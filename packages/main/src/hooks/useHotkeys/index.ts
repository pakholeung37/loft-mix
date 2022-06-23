import { createEffect, createMemo, onCleanup, onMount } from 'solid-js'
import { MaybeAccessor } from '../../types'
import { access, isAccessor } from '../../util'
import arraysAreEqual from './helpers/arraysAreEqual'
import getActiveModifierKeys from './helpers/getActiveModifierKeys'
import getHotkeysArray from './helpers/getHotkeysArray'
import isSameSet from './helpers/isSameSet'
import mapModifierKeys from './helpers/mapModifierKeys'
import modifierKeyPressed from './helpers/modifierKeyPressed'
import tail from './helpers/tail'
import takeUntilLast from './helpers/takeUntilLast'

interface SequenceTimers {
  [key: number]: number
}

interface KeySequences {
  [key: number]: string[]
}

const KEY_SEQUENCE_TIMEOUT = 1000
const ESCAPE_HATCH_KEY = '*'

export const useHotkeys = <T extends HTMLElement>(
  ref: MaybeAccessor<T | undefined>,
  hotkeys: MaybeAccessor<string | string[]>,
  callback: (event: KeyboardEvent) => void,
  eventListenerOptions?: boolean | AddEventListenerOptions,
) => {
  const hotkeysArray = createMemo(() => {
    const _hotKeys = isAccessor(hotkeys) ? hotkeys() : hotkeys
    return Array.isArray(_hotKeys)
      ? _hotKeys.map(getHotkeysArray)
      : [getHotkeysArray(_hotKeys)]
  })

  let onKeydown: (event: KeyboardEvent) => void | undefined
  createEffect(() => {
    const keySequences: KeySequences = {}
    const sequenceTimers: SequenceTimers = {}

    const clearSequenceTimer = (index: number) => {
      clearTimeout(sequenceTimers[index])
    }

    const resetKeySequence = (index: number) => {
      clearSequenceTimer(index)
      keySequences[index] = []
    }

    const handleKeySequence = (
      event: KeyboardEvent,
      keys: string[],
      index: number,
    ) => {
      clearSequenceTimer(index)

      keySequences[index] = keySequences[index] || []
      sequenceTimers[index] = window.setTimeout(() => {
        resetKeySequence(index)
      }, KEY_SEQUENCE_TIMEOUT)

      const keySequence = keySequences[index]
      keySequence.push(event.key.toLowerCase())

      if (arraysAreEqual(keySequence, keys)) {
        resetKeySequence(index)
        callback(event)
      }
    }

    const handleModifierCombo = (event: KeyboardEvent, keys: string[]) => {
      const actionKey: string = tail(keys)
      const modKeys = mapModifierKeys(takeUntilLast(keys))
      const activeModKeys = getActiveModifierKeys(event)
      const allModKeysPressed = isSameSet(modKeys, activeModKeys)

      if (allModKeysPressed && event.key.toLowerCase() === actionKey) {
        callback(event)
      }
    }

    onKeydown = (event: KeyboardEvent) => {
      /**
       * Chrome autocomplete triggers `keydown` event but event.key will be undefined.
       * See https://bugs.chromium.org/p/chromium/issues/detail?id=581537.
       */
      if (!event.key && !modifierKeyPressed(event)) {
        return
      }

      hotkeysArray().forEach((keysArray, i) => {
        if (keysArray.length === 1 && keysArray[0] === ESCAPE_HATCH_KEY) {
          /**
           * Provide escape hatch should the user want to perform
           * some custom logic not supported by the API.
           */
          callback(event)
          return
        }

        // Handle modifier key combos
        if (modifierKeyPressed(event)) {
          handleModifierCombo(event, keysArray)
          return
        }

        // Handle key sequences
        if (keysArray.length > 1 && !modifierKeyPressed(event)) {
          handleKeySequence(event, keysArray, i)
          return
        }

        // Handle the basic case; a single hotkey
        if (event.key.toLowerCase() === keysArray[0]) {
          callback(event)
        }
      })
    }

    const handler = (event: KeyboardEvent) => onKeydown?.(event)
    onMount(() => {
      const target = access(ref) ?? window
      target.addEventListener('keydown', handler as any, eventListenerOptions)
    })

    onCleanup(() => {
      const target = access(ref) ?? window
      target.removeEventListener(
        'keydown',
        handler as any,
        eventListenerOptions,
      )
    })
  })

  return
}

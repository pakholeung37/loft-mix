import { IconTypes } from 'solid-icons'
import { AiFillCloseCircle, AiOutlineSearch } from 'solid-icons/ai'
import {
  createMemo,
  createRenderEffect,
  createSignal,
  For,
  JSX,
  onMount,
  Show,
  VoidComponent,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { useHotkeys } from '../../hooks/useHotkeys'
import { ellipsis } from '../../style/utilities.css'
import { Key } from '../../types'
import { IconButton } from '../Button'
import {
  action_description,
  close_button,
  command_palette,
  header,
  input,
  left_container,
  results,
  result_active,
  result_container,
  result_group,
  result_group_item,
  result_group_title,
  result_icon,
  result_item,
  result_title,
  right_container,
} from './command-palette.css'

export type ResultGroup = {
  groupTitle: string
  results: Result[]
}
export interface Result<T = any> {
  id: Key
  group: string
  title: string
  handler?: () => Promise<T> | T
  actionDescription?: string
  icon?: IconTypes
}

export type CommandPaletteProps = {
  onAction?: (result: Result) => void
  resultGroups: ResultGroup[]
  onSearchValueChange?: (value: string) => void
}
export const CommandPalette: VoidComponent<CommandPaletteProps> = props => {
  const resultIds = createMemo(() =>
    props.resultGroups.reduce((acc, group) => {
      return [...acc, ...group.results.map(result => result.id)]
    }, [] as Key[]),
  )
  const [activeId, setactiveId] = createSignal<Key | null>(
    resultIds()[0] ?? null,
  )

  let ref: HTMLInputElement | undefined

  onMount(() => {
    ref?.focus()
  })

  const triggerHandler = (result: Result) => {
    props.onAction?.(result)
    result.handler?.()
  }

  useHotkeys(
    () => ref,
    'ArrowUp',
    e => {
      e.preventDefault()
      setactiveId(activeId => {
        const _resultIds = resultIds()
        if (activeId === null) return _resultIds[0]
        const index = _resultIds.indexOf(activeId)
        const nextIndex = (index - 1 + _resultIds.length) % _resultIds.length
        return _resultIds[nextIndex]
      })
    },
  )

  useHotkeys(
    () => ref,
    'ArrowDown',
    e => {
      e.preventDefault()
      setactiveId(activeId => {
        const _resultIds = resultIds()
        if (activeId === null) return _resultIds[0]
        const index = _resultIds.indexOf(activeId)
        const nextIndex = (index + 1) % _resultIds.length
        return _resultIds[nextIndex]
      })
    },
  )

  useHotkeys(
    () => ref,
    'Enter',
    e => {
      e.preventDefault()
      const _resultGroups = props.resultGroups
      const _activeId = activeId()
      if (_activeId === null) return
      const _result = _resultGroups.reduce(
        (acc, group) =>
          acc ||
          (group.results.find(result => result.id === _activeId) ?? null),
        null as Result | null,
      )
      if (_result === null) return
      triggerHandler(_result)
    },
  )
  let resultRefs: Record<Key, HTMLLIElement> = {}

  createRenderEffect(() => {
    const _activeId = activeId()
    if (_activeId === null) return
    const item = resultRefs[_activeId]
    if (item) {
      item.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      })
    }
  })

  const [inputValue, setInputValue] = createSignal('')
  const handleKeyDown: JSX.EventHandlerUnion<
    HTMLInputElement,
    Event
  > = event => {
    const value = event.currentTarget.value
    if (value === inputValue()) return
    setInputValue(value)
    props.onSearchValueChange?.(value)
    const _resultIds = resultIds()
    setactiveId(_resultIds[0] ?? null)
  }

  const handleItemMouseEnter = (key: Key) => {
    setactiveId(key)
  }

  return (
    <div class={command_palette} role="dialog">
      <div class={header} onClick={() => ref?.focus()}>
        <div class={left_container}>
          <AiOutlineSearch size={16} />
        </div>
        <input
          ref={ref}
          class={input}
          type="text"
          placeholder="Search Everywhere"
          role="combobox"
          value={inputValue()}
          onKeyUp={handleKeyDown}
        />
        {/* <div class={placeholder}>{}</div> */}
        <div class={right_container}>
          <Show when={inputValue() !== ''}>
            <IconButton
              class={close_button}
              size="xs"
              variant="text"
              icon={<AiFillCloseCircle size={16} />}
              onClick={() => setInputValue('')}
            ></IconButton>
          </Show>
        </div>
      </div>
      <div class={result_container}>
        <ul class={result_group}>
          <For each={props.resultGroups}>
            {resultGroup => (
              <li class={result_group_item}>
                <div class={`${result_group_title} ${ellipsis}`}>
                  {resultGroup.groupTitle}
                </div>
                <ul class={results}>
                  <For each={resultGroup.results}>
                    {result => (
                      <Show when={resultIds().includes(result.id)}>
                        <li
                          ref={ref => (resultRefs[result.id] = ref)}
                          class={`${result_item} ${
                            activeId() === result.id ? result_active : ''
                          }`}
                          onMouseEnter={() => handleItemMouseEnter(result.id)}
                          onClick={() => triggerHandler(result)}
                        >
                          <Dynamic
                            class={result_icon}
                            component={result.icon}
                          />
                          <div class={`${result_title} ${ellipsis}`}>
                            {result.title}
                          </div>
                          <div class={action_description}>
                            {result.actionDescription}
                          </div>
                        </li>
                      </Show>
                    )}
                  </For>
                </ul>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  )
}

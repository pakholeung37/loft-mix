// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/html'
import { Component } from 'solid-js'
import { defineStories } from '../../../util/storybook'
import { useHotkeys } from '../index'

export default defineStories({
  title: 'useHotkeys',
})

const Basic: Component<{ hotkey: string }> = ({ hotkey }) => {
  let ref: HTMLInputElement | undefined
  useHotkeys(
    () => ref,
    hotkey,
    () => {
      alert(`${hotkey} pressed!`)
    },
    true,
  )

  return <input ref={ref} value={`Press ${hotkey}`}></input>
}

const Global: Component<{ hotkey: string }> = ({ hotkey }) => {
  useHotkeys(undefined, hotkey, () => {
    alert(`${hotkey} pressed!`)
  })

  return <div>Press {hotkey}</div>
}

const EventCapture = () => {
  useHotkeys(
    undefined,
    'Escape',
    () => {
      alert('Escape pressed: capturing phase')
    },
    true,
  )

  return <Basic hotkey={'Escape'} />
}

const EscapeHatch = () => {
  let ref: HTMLDivElement | undefined
  useHotkeys(
    () => ref,
    '*',
    (event: KeyboardEvent) => {
      alert(`${event.key} pressed!`)
    },
  )

  return <p ref={ref}>Press any key</p>
}

storiesOf('useHotkeys', module)
  .add('Basic', (() => <Basic hotkey={'ArrowUp'} />) as any)
  .add('Global', (() => <Global hotkey={'Meta+k'} />) as any)
  .add('Modifier combination', (() => (
    <Global hotkey={'Meta+Shift+z'} />
  )) as any)
  .add('Key sequences', (() => <Basic hotkey={'j o b'} />) as any)
  .add('Space in sequence', (() => <Basic hotkey={'w " " d'} />) as any)
  .add('Event listener options', (() => <EventCapture />) as any)
  .add('Escape hatch', (() => <EscapeHatch />) as any)

export const MultipleHotkeys = () => {
  let ref: HTMLInputElement | undefined
  useHotkeys(
    () => ref,
    'ArrowUp',
    () => {
      alert('ArrowUp pressed!')
    },
  )
  useHotkeys(
    () => ref,
    'ArrowDown',
    () => {
      alert('ArrowDown pressed!')
    },
  )
  return <input ref={ref} value={`Press ArrowUp or ArrowDown`}></input>
}

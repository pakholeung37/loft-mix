import { Component, createSignal, Show } from 'solid-js'
import {
  command_palette_container,
  command_palette_mask,
  left_container,
  right_container,
  root_container,
} from './common_layout.css'
import { Content } from '../components/Content'
import { Sidebar } from '../components/Sidebar'
import { CommandPalette } from '../components/CommandPalette'
import { useHotkeys } from '../hooks/useHotkeys'

export const CommonLayout: Component = () => {
  const [visible, setVisible] = createSignal(false)

  useHotkeys(undefined, 'Meta+k', () => {
    setVisible(visible => !visible)
  })

  useHotkeys(undefined, 'Escape', () => {
    setVisible(false)
  })

  return (
    <>
      <div class={`${root_container}`}>
        <div class={`${left_container}`}>
          <Sidebar
            onSearchClick={() => {
              setVisible(true)
            }}
          />
        </div>
        <div class={`${right_container}`}>
          <Content />
        </div>
      </div>
      <Show when={visible()}>
        <div
          class={command_palette_mask}
          onClick={() => setVisible(false)}
        ></div>
        <div class={command_palette_container}>
          <CommandPalette onAction={() => setVisible(false)} />
        </div>
      </Show>
    </>
  )
}

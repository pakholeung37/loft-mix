import { createSignal, Show } from 'solid-js'
import { CommandPalette } from '../components/CommandPalette'
import { useHotkeys } from '../hooks/useHotkeys'
import { command_palette_container } from './common_layout.css'

export const CommandPaletteContainer = () => {
  const [visible, setVisible] = createSignal(false)

  useHotkeys(undefined, 'Meta+k', () => {
    setVisible(visible => !visible)
  })

  useHotkeys(undefined, 'Escape', () => {
    setVisible(false)
  })
  return (
    <Show when={visible()}>
      <div class={command_palette_container}>
        <CommandPalette />
      </div>
    </Show>
  )
}

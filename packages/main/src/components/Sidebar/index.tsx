import { Component, createSignal, Show } from 'solid-js'
import {
  AiFillMacCommand,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from 'solid-icons/ai'

import { IconButton } from '../Button'
import {
  logo,
  logo_container,
  logo_text,
  fold,
  fold_button,
  sidebar,
  nav,
  fold_button_container,
} from './sidebar.css'

export type SidebarProps = {}

export const Sidebar: Component<SidebarProps> = () => {
  const [isFold, setIsFold] = createSignal(false)
  const toggleFold = () => setIsFold(isFold => !isFold)
  return (
    <div class={`${sidebar} ${isFold() ? fold : ''}`}>
      <div class={logo_container}>
        <a class={logo}>
          <AiFillMacCommand size={32} color="currentColor" />
          <Show when={!isFold()}>
            <h1 class={logo_text}>LoftMix</h1>
          </Show>
        </a>
      </div>
      <nav class={`${nav}`}></nav>
      <div class={fold_button_container}>
        <IconButton
          className={fold_button}
          variant="text"
          size="xs"
          rounded
          icon={
            <Show when={isFold()} fallback={<AiOutlineMenuUnfold />}>
              <AiOutlineMenuFold />
            </Show>
          }
          onClick={toggleFold}
        ></IconButton>
      </div>
    </div>
  )
}

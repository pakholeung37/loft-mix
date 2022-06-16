import { Component } from 'solid-js'
import { AiFillMacCommand } from 'solid-icons/ai'

import { logo, logo_container, sidebar, nav } from './sidebar.css'

export type SidebarProps = {}

export const Sidebar: Component<SidebarProps> = () => {
  return (
    <div class={`${sidebar}`}>
      <div class={logo_container}>
        <a class={logo}>
          <AiFillMacCommand size={32} color="currentColor" />
        </a>
      </div>
      <nav class={`${nav}`}></nav>
    </div>
  )
}

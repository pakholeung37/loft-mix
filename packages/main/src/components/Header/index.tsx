import type { Component } from 'solid-js'
import { VscTwitter, VscSearch, VscChevronDown } from 'solid-icons/vsc'
import c from 'clsx'
import {
  header,
  logo_container,
  logo,
  logo_text,
  panels,
  panel,
  left_panel,
  mid_panel,
  right_panel,
  panel_item,
} from './header.css'
import { Avatar } from '../Avatar'
import { Menu } from './Menu'

export const Header: Component = () => {
  return (
    <header class={header}>
      <div class={logo_container}>
        <a class={logo}>
          <VscTwitter size={32} color="currentColor" />
          <h1 class={logo_text}>LoftMix</h1>
        </a>
      </div>
      <div class={panels}>
        <div class={c(panel, left_panel)}>
          <Menu />
        </div>
        <div class={c(panel, mid_panel)}></div>
        <div class={c(panel, right_panel)}>
          <div class={panel_item}>
            <VscSearch />
          </div>
          <div class={panel_item}>
            <Avatar
              name="Pakho Leung"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1003.jpg"
              size="md"
            />
            <VscChevronDown />
          </div>
        </div>
      </div>
    </header>
  )
}

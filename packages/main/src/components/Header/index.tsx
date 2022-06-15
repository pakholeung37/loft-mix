import type { Component } from 'solid-js'
import { AiOutlineBell } from 'solid-icons/ai'
import c from 'clsx'
import {
  header,
  panels,
  panel,
  left_panel,
  mid_panel,
  right_panel,
  panel_item,
} from './header.css'
import { Avatar } from '../Avatar'
import { IconButton } from '../Button'

export const Header: Component = () => {
  return (
    <header class={header}>
      <div class={panels}>
        <div class={c(panel, left_panel)}></div>
        <div class={c(panel, mid_panel)}></div>
        <div class={c(panel, right_panel)}>
          <div class={panel_item}>
            <IconButton
              variant="link"
              icon={<AiOutlineBell size={20} />}
            ></IconButton>
          </div>
          <div class={panel_item}>
            <Avatar
              name="Pakho Leung"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1003.jpg"
              size="md"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

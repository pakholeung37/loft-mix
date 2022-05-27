import { VscChevronDown } from 'solid-icons/vsc'
import { Component } from 'solid-js'
import { menu, menu_list, menu_list_item } from './menu.css'

export const Menu: Component = () => {
  return (
    <nav class={menu}>
      <ul class={menu_list}>
        <li class={menu_list_item}>
          <a href="#">Home</a>
        </li>
        <li class={menu_list_item}>
          <a href="#">About</a>
          <VscChevronDown />
        </li>
        <li class={menu_list_item}>
          <a href="#">Contact</a>
          <VscChevronDown />
        </li>
      </ul>
    </nav>
  )
}

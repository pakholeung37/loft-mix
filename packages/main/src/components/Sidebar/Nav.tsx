import { For, VoidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { NavLink } from 'solid-app-router'
import { nav, nav_item, nav_list } from './sidebar.css'
import {
  AiOutlineAppstore,
  AiOutlineCheckSquare,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineTeam,
} from 'solid-icons/ai'
import { NavButton } from './NavButton'

export type NavProps = {}

const navList = [
  { key: 'dashboard', title: 'Dashboard', icon: AiOutlineHome },
  { key: 'app', title: 'App', icon: AiOutlineAppstore },
  { key: 'todo', title: 'Todo', icon: AiOutlineCheckSquare },
  { key: 'chat', title: 'Chat', icon: AiOutlineMessage },
  { key: 'people', title: 'People', icon: AiOutlineTeam },
]
export const Nav: VoidComponent<NavProps> = () => {
  return (
    <nav class={nav}>
      <ul class={nav_list}>
        <For each={navList}>
          {navItem => (
            <li class={nav_item}>
              <NavLink href={navItem.key}>
                <NavButton
                  title={navItem.title}
                  icon={<Dynamic component={navItem.icon} size={24} />}
                ></NavButton>
              </NavLink>
            </li>
          )}
        </For>
      </ul>
    </nav>
  )
}

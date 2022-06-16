import { createSignal, For, VoidComponent } from 'solid-js'
import { nav, nav_item, nav_list } from './sidebar.css'
import {
  AiOutlineAppstore,
  AiOutlineCheckSquare,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineTeam,
} from 'solid-icons/ai'
import { NavButton } from './NavButton'
import { Dynamic } from 'solid-js/web'

export type NavProps = {}

const navList = [
  { key: 'dashboard', title: 'Dashboard', icon: AiOutlineHome },
  { key: 'app', title: 'App', icon: AiOutlineAppstore },
  { key: 'todo', title: 'Todo', icon: AiOutlineCheckSquare },
  { key: 'chat', title: 'Chat', icon: AiOutlineMessage },
  { key: 'people', title: 'People', icon: AiOutlineTeam },
]
export const Nav: VoidComponent<NavProps> = () => {
  const [activeKey, setActiveKey] = createSignal(navList[0].key)
  const handleButtonClick = (key: string) => setActiveKey(key)

  return (
    <nav class={nav}>
      <ul class={nav_list}>
        <For each={navList}>
          {navItem => (
            <li class={nav_item}>
              <NavButton
                active={activeKey() === navItem.key}
                title={navItem.title}
                icon={<Dynamic component={navItem.icon} size={24} />}
                onClick={() => handleButtonClick(navItem.key)}
              ></NavButton>
            </li>
          )}
        </For>
      </ul>
    </nav>
  )
}

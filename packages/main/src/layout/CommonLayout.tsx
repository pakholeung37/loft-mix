import type { Component } from 'solid-js'
import {
  left_container,
  right_container,
  root_container,
} from './common_layout.css'
import { Content } from '../components/Content'
import { Sidebar } from '../components/Sidebar'
import { CommandPaletteContainer } from './CommandPaletteContainer'

export const CommonLayout: Component = () => {
  return (
    <>
      <div class={`${root_container}`}>
        <div class={`${left_container}`}>
          <Sidebar />
        </div>
        <div class={`${right_container}`}>
          <Content />
        </div>
      </div>
      <CommandPaletteContainer />
    </>
  )
}

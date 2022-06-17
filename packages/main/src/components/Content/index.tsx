import { Outlet } from 'solid-app-router'
import type { Component } from 'solid-js'
import { content } from './content.css'

export const Content: Component = () => {
  return (
    <section class={`${content}`}>
      <Outlet />
    </section>
  )
}

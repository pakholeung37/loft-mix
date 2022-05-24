import type { Component } from 'solid-js'
import { header, logoContainer } from './header.css'

export const Header: Component = () => {
  return (
    <header class={`${header}`}>
      <div class={`${logoContainer}`}>
        <div class="px-4">LoftMix</div>
      </div>
      <div class="panels divide-x divide-slate-200 flex flex-1">
        <div class="left-panel h-full w-32"></div>
        <div class="mid-panel h-full flex-grow"></div>
        <div class="right-panel h-full flex justify-center items-center">
          <div class="px-4">action</div>
        </div>
      </div>
    </header>
  )
}

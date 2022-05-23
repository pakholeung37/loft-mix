import type { Component } from 'solid-js'

export const Header: Component = () => {
  return (
    <header class="header w-full h-12 border-b border-slate-200 flex">
      <div class="logo-container flex justify-center items-center bg-cyan-600">
        <div class="px-4">LoftMix</div>
      </div>
      <div class="panels divide-y divide-slate-200 flex flex-1">
        <div class="left-panel h-full w-32"></div>
        <div class="mid-panel h-full flex-grow"></div>
        <div class="right-panel h-full flex justify-center items-center">
          <div class="px-4">action</div>
        </div>
      </div>
    </header>
  )
}

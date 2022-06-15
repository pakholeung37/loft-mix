import 'tailwindcss/lib/css/preflight.css'
import type { Component } from 'solid-js'
import { left_container, right_container, root_container } from './app.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import './style/index.css'
import { Sidebar } from './components/Sidebar'

const App: Component = () => {
  return (
    <div class={`${root_container}`}>
      <div class={`${left_container}`}>
        <Sidebar />
      </div>
      <div class={`${right_container}`}>
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default App

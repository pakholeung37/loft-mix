import 'tailwindcss/lib/css/preflight.css'
import type { Component } from 'solid-js'
import c from 'clsx'
import { root_container } from './app.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import './theme/index.css'

const App: Component = () => {
  return (
    <div class={c(root_container)}>
      <Header />
      <Content />
    </div>
  )
}

export default App

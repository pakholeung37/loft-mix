import type { Component } from 'solid-js'
import c from 'clsx'
import { root_container } from './app.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { light_theme } from './theme/index.css'
import 'tailwindcss/lib/css/preflight.css'

const App: Component = () => {
  return (
    <div class={c(root_container, light_theme)}>
      <Header />
      <Content />
    </div>
  )
}

export default App

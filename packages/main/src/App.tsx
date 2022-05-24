import type { Component } from 'solid-js'
import { rootContainer } from './app.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { lightTheme } from './theme.css'

const App: Component = () => {
  return (
    <div class={`${rootContainer} ${lightTheme}`}>
      <Header />
      <Content />
    </div>
  )
}

export default App

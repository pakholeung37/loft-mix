import type { Component } from 'solid-js'
import { Content } from './components/Content'
import { Header } from './components/Header'

const App: Component = () => {
  return (
    <div class="root-container flex flex-col h-screen">
      <Header />
      <Content />
    </div>
  )
}

export default App

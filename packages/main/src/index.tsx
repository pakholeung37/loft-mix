/* @refresh reload */
import { Route, Router, Routes } from 'solid-app-router'
import { render } from 'solid-js/web'
import { CommonLayout } from './layout/CommonLayout'
import { App } from './view/App'
import { Chat } from './view/Chat'
import { Dashboard } from './view/Dashboard'
import { NotFound } from './view/NotFound'
import { People } from './view/People'
import { Todo } from './view/Todo'

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<CommonLayout></CommonLayout>}>
          <Route path="/" element={null}></Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="app" element={<App />} />
          <Route path="todo" element={<Todo />} />
          <Route path="chat" element={<Chat />} />
          <Route path="people" element={<People />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)

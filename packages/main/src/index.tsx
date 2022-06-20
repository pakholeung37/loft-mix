/* @refresh reload */
import { Route, Router, Routes } from 'solid-app-router'
import { lazy, Suspense } from 'solid-js'
import { render } from 'solid-js/web'
import 'tailwindcss/lib/css/preflight.css'
import { CommonLayout } from './layout/CommonLayout'

const Dashboard = lazy(() => import('./view/Dashboard'))
const App = lazy(() => import('./view/App'))
const Todo = lazy(() => import('./view/Todo'))
const Chat = lazy(() => import('./view/Chat'))
const People = lazy(() => import('./view/People'))
const NotFound = lazy(() => import('./view/NotFound'))

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<CommonLayout></CommonLayout>}>
          <Route path="/" element={null}></Route>
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
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

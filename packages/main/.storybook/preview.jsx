import { createRoot } from 'solid-js'
import '../src/style/index.css'

export const decorators = [
  Story =>
    createRoot(() => {
      return (
        <div style={{ height: '100%', width: '100%' }}>
          {' '}
          <Story />
        </div>
      )
    }),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { createRoot } from 'solid-js'
import '../src/theme/index.css'

export const decorators = [
  Story =>
    createRoot(() => {
      return (
        <div>
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
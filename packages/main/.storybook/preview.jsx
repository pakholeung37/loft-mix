
import { render } from 'solid-js/web'

let disposeStory

// SolidJS decorators
export const decorators = [
  Story => {
    if (disposeStory) {
      disposeStory()
    }
    const root = document.getElementById('root')
    const solid = document.createElement('div')

    solid.setAttribute('id', 'solid-root')
    root.appendChild(solid)
    disposeStory = render(Story, solid)
    return solid
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  decorators,
  options: {
    storySort: {
      order: [
        'General',
        'Layout',
        'Data entry',
        'Data display',
        'Navigation',
        'Feedback',
        'Overlay',
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

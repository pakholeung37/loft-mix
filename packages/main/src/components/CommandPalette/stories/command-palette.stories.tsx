import { CommandPalette } from '..'
import { defineStories } from '../../../util/storybook'

export default defineStories({ title: 'CommandPalette' })

export const Basic = () => {
  return <CommandPalette />
}

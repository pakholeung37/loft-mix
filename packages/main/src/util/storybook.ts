// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/html'

export const defineStories = (meta: Meta) => {
  const excludeName = '$$registrations'
  return {
    ...meta,
    excludeStories:
      meta.excludeStories instanceof Array && meta.excludeStories.length
        ? [...meta.excludeStories, excludeName]
        : meta.excludeStories instanceof RegExp
        ? new RegExp(`${excludeName}|${meta.excludeStories}`)
        : [excludeName],
  }
}

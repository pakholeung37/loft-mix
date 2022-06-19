import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const rating_list = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: '1',
})

export const list_item_container = style({
  cursor: 'pointer',
  padding: vars.space[2],
  borderRadius: vars.space[2],
  selectors: {
    '&:hover': {
      background: vars.color.bg_default1,
    },
  },
})

export const list_item = style({
  height: vars.space[8],
  display: 'flex',
  gap: vars.space[2],
})

export const pic = style({
  height: vars.space[8],
  width: vars.space[8],
  borderRadius: vars.space[2],
})

export const content_container = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
})

export const title = style({
  fontSize: vars.fontSizes.xs,
  color: vars.color.fg_default,
  fontWeight: vars.fontWeights.bold,
})

export const description = style({
  fontSize: vars.fontSizes.xs,
  color: vars.color.fg_default0,
})

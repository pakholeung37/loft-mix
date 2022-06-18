import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const card_wrapper = style({
  height: '100%',
  width: '100%',
  background: vars.color.bg_default,
  borderRadius: vars.space[1],
  padding: vars.space[4],
})

export const subtle = style({
  background: vars.color.transparent,
  borderRadius: 0,
  padding: 0,
})

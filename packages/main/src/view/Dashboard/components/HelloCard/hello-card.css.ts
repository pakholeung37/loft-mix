import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const hello_card = style({
  display: 'flex',
})

export const title = style({
  fontSize: vars.fontSizes['3xl'],
  fontWeight: vars.fontWeights.semibold,
})

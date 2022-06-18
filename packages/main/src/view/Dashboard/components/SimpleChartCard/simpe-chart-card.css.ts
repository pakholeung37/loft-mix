import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const container = style({
  display: 'flex',
  flex: '1',
  height: '100%',
})

export const left_container = style({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'space-between',
})

export const text_1 = style({
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.semibold,
  color: vars.color.fg_default0,
})
export const text_2 = style({
  fontSize: vars.fontSizes['2xl'],
  fontWeight: vars.fontWeights.bold,
})
export const text_3 = style({
  fontSize: vars.fontSizes.xs,
  color: vars.color.green5,
})

export const chart_container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

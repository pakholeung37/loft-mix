import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const container = style({
  display: 'flex',
  flex: '1',
  height: '100%',
  gap: vars.space[4],
})

export const flex_reverse = style({
  flexDirection: 'row-reverse',
})

export const text_container = style({
  flexShrink: 0,
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
})

export const chart_container = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

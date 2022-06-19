import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const card_wrapper = style({
  height: '100%',
  width: '100%',
  background: vars.color.bg_default,
  borderRadius: vars.space[2],
  padding: vars.space[4],
  display: 'flex',
  flexDirection: 'column',
})

export const subtle = style({
  background: vars.color.transparent,
  borderRadius: 0,
  padding: 0,
})

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: vars.space[2],
  alignItems: 'center',
  marginBottom: vars.space[2],
})

export const title = style({
  fontSize: vars.fontSizes.sm,
  color: vars.color.fg_default,
  fontWeight: vars.fontWeights.bold,
  flex: '1',
})

export const action_bar = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const more_button = style({
  color: vars.color.fg_default0,
  height: vars.space[4],
})

import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'

export const sidebar = style({
  width: vars.space[12],
  background: vars.color.bg_default,
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: vars.space[4],
  borderRight: `1px solid ${vars.color.border}`,
  transitionDuration: vars.transition.duration.fast,
  transitionProperty: vars.transition.property.dimentions,
  transitionTimingFunction: vars.transition.easing_ease_in,
})

export const logo_container = style({
  display: 'flex',
  alignItems: 'center',
  height: vars.space[12],
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: vars.space[5],
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
  cursor: 'pointer',
  userSelect: 'none',
  color: vars.color.primary,
})

export const logo_text = style({
  paddingLeft: vars.space[2],
})

export const nav = style({
  flex: '1',
})

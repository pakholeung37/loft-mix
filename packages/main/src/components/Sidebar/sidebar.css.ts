import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'
import { button } from '../Button/button.css'

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
  marginBottom: vars.space[4],
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

export const nav_list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
})

export const nav_item = style({})

export const nav_button = style({
  selectors: {
    [`${button}.&`]: {
      color: vars.color.fg_default0,
    },
    [`.active > ${button}.&`]: {
      color: vars.color.primary,
      background: vars.color.primary1,
    },
  },
})

export const text_button = style({
  selectors: {
    [`${button}.&`]: { color: vars.color.fg_default0 },
  },
})

export const bottom_group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
})

import { style } from '@vanilla-extract/css'
import { vars } from '../../theme/index.css'

export const header = style({
  display: 'flex',
  width: '100%',
  height: vars.space[12],
  borderBottom: '1px solid',
  borderColor: vars.color.border,
})

export const logo_container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: vars.color.primary,
  color: vars.color.logo_text,
})

export const logo = style({
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  display: 'flex',
  alignItems: 'center',
  fontSize: vars.space[5],
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
  cursor: 'pointer',
  userSelect: 'none',
})

export const panels = style({
  display: 'flex',
  flex: '1',
})

export const panel = style({
  height: '100%',
  selectors: {
    [`${panels} > & ~ &`]: {
      borderLeft: '1px solid',
      borderColor: vars.color.border,
    },
  },
})

export const left_panel = style({
  width: vars.space[32],
})

export const mid_panel = style({
  flex: 1,
})

export const right_panel = style({})

export const panel_item = style({
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

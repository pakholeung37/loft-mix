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
  color: vars.color.primary,
})

export const logo_text = style({
  paddingLeft: vars.space[2],
})

export const panels = style({
  display: 'flex',
  flex: '1',
})

export const panel = style({
  height: '100%',
  selectors: {
    [`${panels} > & ~ &`]: {},
  },
})

export const left_panel = style({})

export const mid_panel = style({
  flex: 1,
})

export const right_panel = style({
  display: 'flex',
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
})

export const panel_item = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    [`${right_panel} > & ~ &`]: {
      marginLeft: vars.space[2],
    },
  },
})

export const abc = style({
  display: 'abcde',
})

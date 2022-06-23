import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'
import { button } from '../Button/button.css'

export const command_palette = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: vars.color.bg_default,
  borderRadius: vars.space[2],
  border: `1px solid ${vars.color.border}`,
  maxHeight: vars.space[96],
})
export const header = style({
  display: 'flex',
  width: '100%',
  padding: `${vars.space[2]} ${vars.space[4]}`,
  gap: vars.space[2],
  borderBottom: `1px solid ${vars.color.border}`,
})
export const left_container = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color.fg_default0,
})
export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: vars.fontSizes.md,
  color: vars.color.fg_default,
})
export const right_container = style({})
export const close_button = style([
  button,
  {
    color: vars.color.fg_default3,
    minWidth: 0,
    selectors: {
      '&:hover': {
        color: vars.color.fg_default2,
      },
    },
  },
])

export const result_container = style({
  overflowY: 'auto',
  padding: `${vars.space[2]} ${vars.space[2]}`,
})
export const result_group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
  width: '100%',
})
export const result_group_item = style({
  borderTop: `1px solid ${vars.color.border}`,
  selectors: {
    '&:first-child': {
      borderTop: 'none',
    },
  },
})
export const result_group_title = style({
  fontSize: vars.fontSizes.xs,
  margin: `${vars.space[2]} 0`,
  paddingLeft: vars.space[2],
  color: vars.color.fg_default3,
})
export const results = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
})

export const result_item = style({
  height: vars.space[10],
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  borderRadius: vars.space[2],
  padding: `${vars.space[1]} ${vars.space[2]}`,
  cursor: 'pointer',
})

export const result_active = style({
  selectors: {
    [`.${result_item}.&`]: {
      background: vars.color.primary0,
    },
  },
})

export const result_icon = style({
  color: vars.color.fg_default1,
})

export const result_title = style({
  color: vars.color.fg_default,
  flex: 1,
})

export const action_description = style({
  visibility: 'hidden',
  color: vars.color.fg_default3,
  fontSize: vars.fontSizes.xs,
  selectors: {
    [`.${result_item}:hover &, ${result_item}.${result_active} &`]: {
      visibility: 'visible',
    },
  },
})

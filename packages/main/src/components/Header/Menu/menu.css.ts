import { style } from '@vanilla-extract/css'
import { vars } from '../../../theme/index.css'

export const menu = style({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

export const menu_list = style({
  display: 'flex',
})

export const menu_list_item = style({
  display: 'flex',
  padding: `0 ${vars.space[2]}`,
  selectors: {
    [`${menu_list} > & ~ &`]: {
      marginLeft: vars.space[2],
    },
  },
})

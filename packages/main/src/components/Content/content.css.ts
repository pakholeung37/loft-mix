import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'

export const content = style({
  display: 'flex',
  flex: '1',
  width: '100%',
  background: vars.color.bg_default1,
})

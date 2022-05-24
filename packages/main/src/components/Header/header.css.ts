import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const header = style({
  display: 'flex',
  width: '100%',
  height: 48,
  borderBottom: '1px solid',
  borderColor: vars.color['slate-200'],
})

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: vars.color.cyan,
})

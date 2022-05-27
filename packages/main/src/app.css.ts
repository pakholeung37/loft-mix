import { style } from '@vanilla-extract/css'
import { vars } from './theme/index.css'

export const root_container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  color: vars.color.slate8,
  backgroundColor: vars.color.white,
})

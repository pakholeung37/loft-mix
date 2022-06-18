import { style } from '@vanilla-extract/css'
import { vars } from '../style/index.css'

export const root_container = style({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  color: vars.color.slate8,
  backgroundColor: vars.color.white,
})

export const left_container = style({})

export const right_container = style({
  flex: '1',
  overflow: 'scroll',
  background: vars.color.bg_default1,
})

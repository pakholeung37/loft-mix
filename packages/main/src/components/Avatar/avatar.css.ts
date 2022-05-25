import { style } from '@vanilla-extract/css'
import { vars } from '../../theme/index.css'

export const avatar = style({
  backgroundColor: 'blue',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  borderRadius: '999px',
  overflow: 'hidden',
  color: vars.color.avatar_text,
})

export const sm = style({
  height: '24px',
  width: '24px',
})

export const md = style({
  height: '32px',
  width: '32px',
})

export const lg = style({
  height: '48px',
  width: '48px',
})

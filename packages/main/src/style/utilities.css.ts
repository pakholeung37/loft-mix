import { keyframes, style } from '@vanilla-extract/css'

export const rounded = style({
  borderRadius: '9999px !important',
})

export const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

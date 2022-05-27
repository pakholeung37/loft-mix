import { style } from '@vanilla-extract/css'
import { vars } from '../../theme/index.css'

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

export const avatar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  borderRadius: '999px',
  overflow: 'hidden',
  color: vars.color.avatar_text,
  position: 'relative',
})

export const no_avatar = style({
  color: vars.color.white,
  backgroundColor: vars.color.gray2,
  position: 'absolute',
  selectors: {
    [`${sm} &`]: {
      fontSize: '28px',
    },
    [`${md} &`]: {
      fontSize: '36px',
    },
    [`${lg} &`]: {
      fontSize: '52px',
    },
  },
})

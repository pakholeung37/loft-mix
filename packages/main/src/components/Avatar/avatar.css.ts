import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'

export const avatar_container = style({
  position: 'relative',
})

export const avatar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  borderRadius: '999px',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  color: vars.color.fg_default,
  background: vars.color.bg_default1,
})

export const sm = style({
  height: vars.space[6],
  width: vars.space[6],
  fontSize: vars.space[2],
})

export const md = style({
  height: vars.space[8],
  width: vars.space[8],
  fontSize: vars.space[3],
})

export const lg = style({
  height: vars.space[12],
  width: vars.space[12],
  fontSize: vars.space[4],
})

export const xl = style({
  height: vars.space[16],
  width: vars.space[16],
  fontSize: vars.space[6],
})

export const square = style({
  borderRadius: vars.borderRadius.sm,
})

export const no_avatar = style({
  color: vars.color.white,
  backgroundColor: vars.color.gray2,
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
    [`${xl} &`]: {
      fontSize: '72px',
    },
  },
})

export const avatar_image = style({
  display: 'block',
  height: '100%',
  width: '100%',
})

export const avatar_text = style({
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  background: vars.color.primary,
  color: vars.color.white,
})

export const status_container = style({
  position: 'absolute',
  borderRadius: '999px',
  bottom: 0,
  right: 0,
  zIndex: 100,
  border: `${vars.space['0.5']} solid ${vars.color.white}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.white,
  selectors: {
    [`${sm} &`]: {
      border: `${vars.space.px} solid ${vars.color.white}`,
      fontSize: vars.space[1.5],
      height: vars.space[1.5],
      width: vars.space[1.5],
    },
    [`${md} &`]: {
      border: `${vars.space['0.5']} solid ${vars.color.white}`,
      fontSize: vars.space[2.5],
      height: vars.space[2.5],
      width: vars.space[2.5],
    },
    [`${lg} &`]: {
      border: `${vars.space['0.5']} solid ${vars.color.white}`,
      fontSize: vars.space[4],
      height: vars.space[4],
      width: vars.space[4],
    },
    [`${xl} &`]: {
      border: `${vars.space['0.5']} solid ${vars.color.white}`,
      fontSize: vars.space[4],
      height: vars.space[4],
      width: vars.space[4],
    },
  },
})

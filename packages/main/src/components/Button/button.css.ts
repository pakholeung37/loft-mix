import { style } from '@vanilla-extract/css'
import { rotate } from '../../style/utilities.css'
import { vars } from '../../style/index.css'

export const xs = style({
  height: vars.space[6],
  minWidth: vars.space[6],
  fontSize: vars.space[3],
  paddingInlineStart: vars.space[2],
  paddingInlineEnd: vars.space[2],
})

export const sm = style({
  height: vars.space[8],
  minWidth: vars.space[8],
  fontSize: vars.space[3.5],
  paddingInlineStart: vars.space[3],
  paddingInlineEnd: vars.space[3],
})

export const md = style({
  height: vars.space[10],
  minWidth: vars.space[10],
  fontSize: vars.space[4],
  paddingInlineStart: vars.space[4],
  paddingInlineEnd: vars.space[4],
})

export const lg = style({
  height: vars.space[12],
  minWidth: vars.space[12],
  fontSize: vars.space[4.5],
  paddingInlineStart: vars.space[5],
  paddingInlineEnd: vars.space[5],
})

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  borderStyle: 'solid',
  borderRadius: vars.borderRadius.md,
  cursor: 'pointer',
  borderWidth: vars.space.px,
  borderColor: 'transparent',
  selectors: {
    '&:active': {
      boxShadow: 'none',
    },
    '&:disabled, &:active:disabled, &:hover:disabled': {
      cursor: 'not-allowed',
      background: vars.color.bg_default1,
      borderColor: vars.color.transparent,
      color: vars.color.fg_default1,
    },
  },
})

export const neutral = style({
  color: vars.color.fg_default,
  background: vars.color.bg_default,
  borderColor: vars.color.gray4,
  selectors: {
    '&:hover': {
      background: vars.color.bg_default1,
    },
    '&:active': {
      background: vars.color.bg_default2,
    },
  },
})
export const primary = style({
  color: vars.color.white,
  background: vars.color.primary,
  selectors: {
    '&:hover': {
      background: vars.color.primary6,
    },
    '&:active': {
      background: vars.color.primary7,
    },
  },
})
export const outline = style({
  color: vars.color.primary,
  background: vars.color.bg_default,
  borderColor: 'currentcolor',
  selectors: {
    '&:hover': {
      background: vars.color.primary0,
    },
    '&:active': {
      background: vars.color.primary1,
    },
  },
})
export const ghost = style({
  color: vars.color.primary,
  background: vars.color.transparent,
  boxShadow: 'none',
  selectors: {
    '&:hover': {
      background: vars.color.primary0,
    },
    '&:active': {
      background: vars.color.primary1,
    },
  },
})
export const text = style({
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  color: vars.color.fg_default,
  background: vars.color.transparent,
  boxShadow: 'none',
  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
    '&:active': {
      color: vars.color.primary7,
    },
    '&:disabled, &:active:disabled, &:hover:disabled': {
      background: 'transparent',
      textDecoration: 'none',
    },
  },
})

export const left_icon = style({
  display: 'inline-flex',
  selectors: {
    [`${xs} &`]: { marginRight: vars.space[0.5] },
    [`${sm} &`]: { marginRight: vars.space[1] },
    [`${md} &`]: { marginRight: vars.space[1.5] },
    [`${lg} &`]: { marginRight: vars.space[2] },
  },
})

export const right_icon = style({
  display: 'inline-flex',
  selectors: {
    [`${xs} &`]: { marginLeft: vars.space[0.5] },
    [`${sm} &`]: { marginLeft: vars.space[1] },
    [`${md} &`]: { marginLeft: vars.space[1.5] },
    [`${lg} &`]: { marginLeft: vars.space[2] },
  },
})

export const loading_icon = style({
  animation: `0.45s linear 0s infinite normal none running ${rotate}`,
})

export const icon_only = style({
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
})

import { style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'

export const table_base = style({
  color: vars.color.fg_default,
  textAlign: 'left',
})

export const simple = style({})
export const striped = style({})
export const bordered = style({})
export const unstyled = style({})

export const xs = style({
  fontSize: vars.fontSizes.xs,
})

export const sm = style({
  fontSize: vars.fontSizes.sm,
})

export const md = style({
  fontSize: vars.fontSizes.md,
})

export const lg = style({
  fontSize: vars.fontSizes.lg,
})

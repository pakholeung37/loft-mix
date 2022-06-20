import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../style/index.css'

export const table_base = style({
  color: vars.color.fg_default,
  width: '100%',
  borderCollapse: 'collapse',
})

globalStyle(`${table_base} thead tr th, ${table_base} tfoot tr th`, {
  textAlign: 'start',
  fontWeight: 'bold',
  color: vars.color.fg_default,
})

globalStyle(`${table_base} tbody tr td`, {
  textAlign: 'start',
  color: vars.color.fg_default,
})

export const simple = style({})

globalStyle(
  `.${table_base}.${simple} thead tr th, .${table_base}.${simple} tfoot tr th, .${table_base}.${simple} tbody tr td`,
  {
    borderBottom: `1px solid ${vars.color.border}`,
  },
)

globalStyle(
  `.${table_base}.${simple} thead tr:last-of-type th, .${table_base}.${simple} tfoot tr:last-of-type th, .${table_base}.${simple} tbody tr:last-of-type td`,
  {
    borderBottom: 'none',
  },
)

export const striped = style({})

globalStyle(`.${table_base}.${striped} tbody tr:nth-of-type(2n+1) td`, {
  backgroundColor: vars.color.bg_default0,
})

export const bordered = style({})

globalStyle(
  `.${table_base}.${bordered} thead tr th, .${table_base}.${bordered} tfoot tr th, .${table_base}.${bordered} tbody tr td`,
  {
    border: `1px solid ${vars.color.border}`,
  },
)

export const unstyled = style({})

export const xs = style({
  fontSize: vars.fontSizes.xs,
})

globalStyle(
  `.${table_base}.${xs} thead tr th, .${table_base}.${xs} tfoot tr th, .${table_base}.${xs} tbody tr td`,
  {
    padding: `${vars.space[0.5]} ${vars.space[1]}`,
  },
)

export const sm = style({
  fontSize: vars.fontSizes.sm,
})

globalStyle(
  `.${table_base}.${sm} thead tr th, .${table_base}.${sm} tfoot tr th, .${table_base}.${sm} tbody tr td`,
  {
    padding: `${vars.space[1.5]} ${vars.space[3]}`,
  },
)

export const md = style({
  fontSize: vars.fontSizes.md,
})

globalStyle(
  `.${table_base}.${md} thead tr th, .${table_base}.${md} tfoot tr th, .${table_base}.${md} tbody tr td`,
  {
    padding: `${vars.space[3]} ${vars.space[6]}`,
  },
)

export const lg = style({
  fontSize: vars.fontSizes.lg,
})

globalStyle(
  `.${table_base}.${lg} thead tr th, .${table_base}.${lg} tfoot tr th, .${table_base}.${lg} tbody tr td`,
  {
    padding: `${vars.space[3.5]} ${vars.space[7]}`,
  },
)

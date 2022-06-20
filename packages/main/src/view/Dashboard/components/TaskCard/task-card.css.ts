import { style } from '@vanilla-extract/css'
import { vars } from '../../../../style/index.css'

export const task_list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[4],
})
export const task_item_container = style({})
export const task = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
})
export const overhead = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
export const status_label = style({
  fontSize: vars.fontSizes.xs,
  lineHeight: 0.75,
  padding: vars.space[2],
  borderRadius: vars.space[2],
})
export const status_inprogress = style({
  background: vars.color.info0,
  color: vars.color.info3,
})
export const status_completed = style({
  background: vars.color.success0,
  color: vars.color.success3,
})
export const status_pending = style({
  background: vars.color.error0,
  color: vars.color.error3,
})
export const deadline = style({
  fontSize: vars.fontSizes.xs,
  color: vars.color.fg_default0,
})
export const title = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.bold,
})
export const description = style({
  fontSize: vars.fontSizes.xs,
  color: vars.color.fg_default0,
})
export const footer = style({
  display: 'flex',
  gap: vars.space[2],
})

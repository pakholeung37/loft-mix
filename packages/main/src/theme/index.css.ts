import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'
import { merge } from 'lodash-es'
import { colors } from './colors'
import { space } from './space'

const avatar = {
  color: {
    avatar_bg: null,
    avatar_text: null,
  },
}

const header = {
  color: {
    header_bg: null,
    header_text: null,
    logo_text: null,
  },
}

const base = {
  color: colors,
  space,
}

const baseTheme = merge(
  {
    color: {
      primary: null,
      primary0: null,
      primary1: null,
      primary2: null,
      primary3: null,
      primary4: null,
      primary5: null,
      primary6: null,
      primary7: null,
      primary8: null,
      primary9: null,
      border: null,
      fg_default: null,
      bg_default: null,
      bg_default0: null,
      bg_default1: null,
      bg_default2: null,
      bg_default3: null,
      success: null,
      success0: null,
      success1: null,
      success2: null,
      success3: null,
      info: null,
      info0: null,
      info1: null,
      info2: null,
      info3: null,
      warning: null,
      warning0: null,
      warning1: null,
      warning2: null,
      warning3: null,
      error: null,
      error0: null,
      error1: null,
      error2: null,
      error3: null,
      critical: null,
      critical0: null,
      critical1: null,
      critical2: null,
      critical3: null,
    },
    borderRadius: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      rounded: null,
    },
  },
  base,
  avatar,
  header,
)
/**
 * Name	Size	Pixels	Preview
 * 0	0px	0px
 *
 * px	1px	1px
 *
 * 0.5	0.125rem	2px
 *
 * 1	0.25rem	4px
 *
 * 1.5	0.375rem	6px
 *
 * 2	0.5rem	8px
 *
 * 2.5	0.625rem	10px
 *
 * 3	0.75rem	12px
 *
 * 3.5	0.875rem	14px
 *
 * 4	1rem	16px
 *
 * 5	1.25rem	20px
 *
 * 6	1.5rem	24px
 *
 * 7	1.75rem	28px
 *
 * 8	2rem	32px
 *
 * 9	2.25rem	36px
 *
 * 10	2.5rem	40px
 *
 * 11	2.75rem	44px
 *
 * 12	3rem	48px
 *
 * 14	3.5rem	56px
 *
 * 16	4rem	64px
 *
 * 20	5rem	80px
 *
 * 24	6rem	96px
 *
 * 28	7rem	112px
 *
 * 32	8rem	128px
 *
 * 36	9rem	144px
 *
 * 40	10rem	160px
 *
 * 44	11rem	176px
 *
 * 48	12rem	192px
 *
 * 52	13rem	208px
 *
 * 56	14rem	224px
 *
 * 60	15rem	240px
 *
 * 64	16rem	256px
 *
 * 72	18rem	288px
 *
 * 80	20rem	320px
 *
 * 96	24rem	384px
 *
 */
export const vars = createThemeContract(baseTheme)

export const light_theme = createGlobalTheme(
  ':root',
  vars,
  merge(baseTheme, {
    color: {
      primary: '#3b82f6',
      primary0: '#eff6ff',
      primary1: '#dbeafe',
      primary2: '#bfdbfe',
      primary3: '#93c5fd',
      primary4: '#60a5fa',
      primary5: '#3b82f6',
      primary6: '#2563eb',
      primary7: '#1d4ed8',
      primary8: '#1e40af',
      primary9: '#1e3a8a',
      success: vars.color.green5,
      success0: vars.color.green1,
      success1: vars.color.green3,
      success2: vars.color.green5,
      success3: vars.color.green7,
      info: vars.color.blue5,
      info0: vars.color.blue1,
      info1: vars.color.blue3,
      info2: vars.color.blue5,
      info3: vars.color.blue7,
      warning: vars.color.yellow5,
      warning0: vars.color.yellow1,
      warning1: vars.color.yellow3,
      warning2: vars.color.yellow5,
      warning3: vars.color.yellow7,
      error: vars.color.red5,
      error0: vars.color.red1,
      error1: vars.color.red3,
      error2: vars.color.red5,
      error3: vars.color.red7,
      avatar_bg: vars.color.primary,
      avatar_text: vars.color.white,
      header_bg: vars.color.white,
      logo_text: vars.color.white,
      border: vars.color.slate2,
      fg_default: vars.color.slate8,
      bg_default: vars.color.white,
      bg_default0: vars.color.gray0,
      bg_default1: vars.color.gray1,
      bg_default2: vars.color.gray3,
      bg_default3: vars.color.gray5,
    },
    borderRadius: {
      xs: vars.space[0.5],
      sm: vars.space[1],
      md: vars.space[1.5],
      lg: vars.space[2],
      rounded: '9999px',
    },
  }),
)

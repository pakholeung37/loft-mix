import { createThemeContract } from '@vanilla-extract/css'
import { DeepNull } from '../../types'
import { colors } from './colors'
import { space } from './space'

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
export const vars = createThemeContract({
  color: {
    ...(colors as unknown as DeepNull<typeof colors>),
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
    fg_default0: null,
    fg_default1: null,
    fg_default2: null,
    fg_default3: null,
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
  space: {
    ...(space as unknown as DeepNull<typeof space>),
  },
  borderRadius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    rounded: '9999px',
  },
  fontSizes: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
    '5xl': null,
    '6xl': null,
    '7xl': null,
    '8xl': null,
    '9xl': null,
  },
  fontWeights: {
    hairline: null,
    thin: null,
    light: null,
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
    extrabold: null,
    black: null,
  },
  transition: {
    property: {
      common: null,
      colors: null,
      dimentions: null,
      position: null,
    },
    duration: {
      ultra_fast: null,
      fast: null,
      faster: null,
      normal: null,
      slow: null,
      slower: null,
      ultra_slow: null,
    },
    easing_ease_in: null,
    easing_ease_in_out: null,
    easing_ease_out: null,
  },
  shadow: {
    xs: null,
    sm: null,
    base: null,
    md: null,
    lg: null,
    xl: null,
    ['2xl']: null,
    outline: null,
    inner: null,
    none: null,
    ['dark-lg']: null,
  },
})

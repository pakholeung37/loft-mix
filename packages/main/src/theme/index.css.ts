import { createTheme, createThemeContract } from '@vanilla-extract/css'
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
  color: {
    ...colors,
    border: colors.slate2,
  },
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
    },
  },
  base,
  avatar,
  header,
)

export const vars = createThemeContract(baseTheme)

export const light_theme = createTheme(
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
      avatar_bg: vars.color.primary,
      avatar_text: vars.color.white,
      header_bg: vars.color.white,
      header_text: vars.color.white,
      logo_text: vars.color.white,
    },
  }),
)

import { createContextProvider } from '@solid-primitives/context'
import { MaybeAccessor } from '../types'

export type ThemeContextType = {
  theme: MaybeAccessor<'light' | 'dark'>
}

export const [ThemeProvider, useTheme] = createContextProvider<
  ThemeContextType,
  ThemeContextType
>(_ => _, { theme: 'light' })

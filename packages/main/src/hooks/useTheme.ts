import { createContext, useContext } from 'solid-js'
import { MaybeAccessor } from '../types'

export const ThemeContext = createContext<{
  theme: MaybeAccessor<'light' | 'dark'>
}>({
  theme: 'light',
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
  return useContext(ThemeContext)
}

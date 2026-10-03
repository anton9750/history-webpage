import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { makeTheme, type Mode } from '../styles/theme'
import { read, write } from '../utils/storage'

interface ModeCtx { mode: Mode; toggle: () => void }
const Ctx = createContext<ModeCtx>(null!)
export const useThemeMode = () => useContext(Ctx)

// Saved choice wins; otherwise follow the visitor's system setting.
const initialMode = (): Mode => {
  const saved = read<string | null>('chronicle_mode', null)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(initialMode)
  const theme = useMemo(() => makeTheme(mode), [mode])

  useEffect(() => {
    write('chronicle_mode', mode)
    document.documentElement.style.colorScheme = mode // native inputs and scrollbars follow
  }, [mode])

  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'))

  return (
    <Ctx.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Ctx.Provider>
  )
}
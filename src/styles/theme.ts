export type Mode = 'light' | 'dark'

const dark = {
  bg: '#1a0e17', panel: '#2a1624', line: '#4d2b3c',
  text: '#fff0e8', muted: '#d9aebb',
  orange: '#ff8a3d', pink: '#ff4f8b', accent: '#ff6b6b', danger: '#ffb199',
  overlay: 'rgba(26,14,23,.92)', glowA: 'rgba(255,138,61,.22)', glowB: 'rgba(255,79,139,.2)',
}

const light = {
  bg: '#fff3ec', panel: '#ffffff', line: '#f0cbbf',
  text: '#2a1624', muted: '#7a5565',
  orange: '#c2490a', pink: '#d12b6a', accent: '#d12b6a', danger: '#b3361b',
  overlay: 'rgba(255,243,236,.92)', glowA: 'rgba(255,138,61,.28)', glowB: 'rgba(255,79,139,.2)',
}

const base = {
  gradient: 'linear-gradient(100deg, #ff8a3d, #ff4f8b)',
  breakpoints: { sm: 600, md: 900, lg: 1200 },
  fonts: { display: "'Fraunces', Georgia, serif", body: "'Source Sans 3', system-ui, sans-serif" },
  headerH: '68px',
}

export const makeTheme = (mode: Mode) => ({ colors: mode === 'dark' ? dark : light, ...base })

// Default export used by utils/media.ts (breakpoints are the same in both modes)
export const theme = makeTheme('dark')
export type AppTheme = typeof theme
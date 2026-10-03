export const theme = {
  colors: {
    bg: '#1a0e17', panel: '#2a1624', line: '#4d2b3c',
    text: '#fff0e8', muted: '#d9aebb',
    orange: '#ff8a3d', pink: '#ff4f8b', accent: '#ff6b6b', danger: '#ffb199',
  },
  gradient: 'linear-gradient(100deg, #ff8a3d, #ff4f8b)',
  breakpoints: { sm: 600, md: 900, lg: 1200 },
  fonts: { display: "'Fraunces', Georgia, serif", body: "'Source Sans 3', system-ui, sans-serif" },
  headerH: '68px',
}
export type AppTheme = typeof theme

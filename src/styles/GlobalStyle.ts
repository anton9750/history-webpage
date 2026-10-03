import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: radial-gradient(circle at 15% -10%, rgba(255,138,61,.22), transparent 50%), radial-gradient(circle at 95% 0%, rgba(255,79,139,.2), transparent 45%) ${({ theme }) => theme.colors.bg};
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.05rem; line-height: 1.65; -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 { font-family: ${({ theme }) => theme.fonts.display}; line-height: 1.15; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button, input, textarea { font: inherit; color: inherit; }
  :focus-visible { outline: 2px solid ${({ theme }) => theme.colors.orange}; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
`

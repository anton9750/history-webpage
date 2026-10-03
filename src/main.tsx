import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AuthProvider><App /></AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

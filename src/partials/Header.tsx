import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { down } from '../utils/media'
import { useAuth } from '../context/AuthContext'
import { useThemeMode } from '../context/ThemeModeContext'

const Bar = styled.header`
  position: sticky; top: 0; z-index: 50; height: ${({ theme }) => theme.headerH};
  display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem;
  background: ${({ theme }) => theme.colors.overlay}; backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`
const Logo = styled(Link)`font-family: ${({ theme }) => theme.fonts.display}; font-size: 1.5rem; font-weight: 800;`
const Burger = styled.button`
  display: none; background: none; border: 0; font-size: 1.7rem; cursor: pointer;
  ${down('md')} { display: block; }
`
const Nav = styled.nav<{ $open: boolean }>`
  display: flex; gap: 1.6rem; align-items: center;
  a { color: ${({ theme }) => theme.colors.muted}; }
  a.active, a:hover { color: ${({ theme }) => theme.colors.text}; }
  ${down('md')} {
    position: absolute; top: ${({ theme }) => theme.headerH}; left: 0; right: 0; flex-direction: column;
    padding: 1.5rem; background: ${({ theme }) => theme.colors.bg}; border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
  }
`
const ModeBtn = styled.button`
  background: none; cursor: pointer; border-radius: 999px; padding: .3rem .9rem;
  border: 1px solid ${({ theme }) => theme.colors.line}; color: ${({ theme }) => theme.colors.text};
  &:hover { border-color: ${({ theme }) => theme.colors.orange}; }
`
const links = [['/', 'Home'], ['/read', 'Read'], ['/characters', 'Characters'], ['/images', 'Images'], ['/contact', 'Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { user } = useAuth()
  const { mode, toggle } = useThemeMode()
  return (
    <Bar>
      <Logo to="/">Chronicle</Logo>
      <Burger aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>{open ? '✕' : '☰'}</Burger>
      <Nav $open={open} onClick={() => setOpen(false)}>
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        <NavLink to={user ? '/dashboard' : '/login'}>{user ? 'My space' : 'Log in'}</NavLink>
        <ModeBtn onClick={toggle} aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
          {mode === 'dark' ? '☀ Light' : '☾ Dark'}
        </ModeBtn>
      </Nav>
    </Bar>
  )
}
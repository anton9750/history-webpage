import { Outlet, Navigate } from 'react-router-dom'
import type { ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'
import MusicPlayer from './MusicPlayer'
import { useAuth } from '../context/AuthContext'

export const Layout = () => (<><Header /><Outlet /><Footer /><MusicPlayer /></>)
export const Protected = ({ children }: { children: ReactElement }) => (useAuth().user ? children : <Navigate to="/login" replace />)

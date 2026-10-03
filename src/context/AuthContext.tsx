import { createContext, useContext, useState, type ReactNode } from 'react'
import { read, write, type User } from '../utils/storage'

interface Auth { user: string | null; login: (u: string, p: string) => string | null; logout: () => void }
const Ctx = createContext<Auth>(null!)
export const useAuth = () => useContext(Ctx)

// DEMO AUTH: users live in localStorage in plain text. Fine for a school project, never for real accounts.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(() => read<string | null>('chronicle_session', null))

  const login = (username: string, password: string) => {
    if (!username.trim() || password.length < 4) return 'Enter a username and a password of at least 4 characters.'
    const users = read<User[]>('chronicle_users', [])
    const found = users.find((u) => u.username === username)
    if (found && found.password !== password) return 'Wrong password for that username.'
    const updated = found
      ? users.map((u) => (u.username === username ? { ...u, lastLogin: Date.now() } : u))
      : [...users, { username, password, lastLogin: Date.now() }]
    write('chronicle_users', updated)
    write('chronicle_session', username)
    setUser(username)
    return null
  }
  const logout = () => { localStorage.removeItem('chronicle_session'); setUser(null) }
  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>
}

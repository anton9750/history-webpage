import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Page, Title, Lead, Button, Field, Error } from '../partials/ui'

export default function Login() {
  const { login } = useAuth(); const nav = useNavigate()
  const [u, setU] = useState(''); const [p, setP] = useState(''); const [err, setErr] = useState<string | null>(null)
  const submit = (e: React.FormEvent) => { e.preventDefault(); const r = login(u, p); if (r) setErr(r); else nav('/dashboard') }
  return (
    <Page>
      <Title>Log in</Title>
      <Lead>New here? Choose a username and password and your account is created on first login.</Lead>
      <form style={{ maxWidth: 420 }} onSubmit={submit}>
        {err && <Error role="alert">{err}</Error>}
        <Field placeholder="Username" value={u} onChange={(e) => setU(e.target.value)} />
        <Field type="password" placeholder="Password" value={p} onChange={(e) => setP(e.target.value)} />
        <Button type="submit">Log in</Button>
      </form>
    </Page>
  )
}

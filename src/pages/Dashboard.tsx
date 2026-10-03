import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { read, filesKey, formatSize, type FileRecord, type User } from '../utils/storage'
import { Page, Title, Lead, Grid, Card, Button } from '../partials/ui'

export default function Dashboard() {
  const { user, logout } = useAuth(); const nav = useNavigate()
  const files = read<FileRecord[]>(filesKey(user!), [])
  const me = read<User[]>('chronicle_users', []).find((x) => x.username === user)
  const total = files.reduce((s, f) => s + f.size, 0)
  return (
    <Page>
      <Title>Welcome back, {user}</Title>
      <Lead>Your personal study space.</Lead>
      <Grid>
        <Card><h3>{files.length}</h3><p>files saved</p></Card>
        <Card><h3>{formatSize(total)}</h3><p>stored in this browser</p></Card>
        <Card><h3>{me?.lastLogin ? new Date(me.lastLogin).toLocaleDateString() : '–'}</h3><p>last login</p></Card>
      </Grid>
      <p style={{ margin: '2rem 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/files"><Button>Open my files</Button></Link>
        <Button onClick={() => { logout(); nav('/') }}>Log out</Button>
      </p>
    </Page>
  )
}

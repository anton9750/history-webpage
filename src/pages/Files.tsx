import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { read, write, filesKey, formatSize, toDataUrl, type FileRecord } from '../utils/storage'
import { Page, Title, Lead, Card, Button, Error } from '../partials/ui'

export default function Files() {
  const { user } = useAuth(); const key = filesKey(user!)
  const [files, setFiles] = useState<FileRecord[]>(() => read(key, []))
  const [err, setErr] = useState('')

  const add = async (list: FileList | null) => {
    if (!list) return
    const added: FileRecord[] = []
    for (const f of Array.from(list)) added.push({ id: crypto.randomUUID(), name: f.name, type: f.type, size: f.size, data: await toDataUrl(f), added: Date.now() })
    const next = [...files, ...added]
    if (write(key, next)) { setFiles(next); setErr('') }
    else setErr('Browser storage is full (about 5 MB). Remove some files or upload smaller ones.')
  }
  const remove = (id: string) => { const next = files.filter((f) => f.id !== id); write(key, next); setFiles(next) }

  return (
    <Page>
      <Title>My files</Title>
      <Lead>Drop notes, scans and sources here. They are saved in this browser only.</Lead>
      <input type="file" multiple onChange={(e) => add(e.target.files)} style={{ marginBottom: '1.5rem' }} />
      {err && <Error role="alert">{err}</Error>}
      {files.length === 0 && <p>No files yet. Choose some above to get started.</p>}
      <div style={{ display: 'grid', gap: '.8rem' }}>
        {files.map((f) => (
          <Card key={f.id} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span>{f.name} <small>({formatSize(f.size)})</small></span>
            <span style={{ display: 'flex', gap: '.6rem' }}>
              <a href={f.data} download={f.name}><Button>Download</Button></a>
              <Button onClick={() => remove(f.id)}>Delete</Button>
            </span>
          </Card>
        ))}
      </div>
    </Page>
  )
}

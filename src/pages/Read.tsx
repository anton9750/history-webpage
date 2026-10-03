import { useState } from 'react'
import { articles } from '../data/library'
import { Page, Title, Lead, Grid, Card, Field } from '../partials/ui'

export default function Read() {
  const [q, setQ] = useState('')
  const list = articles.filter((a) => (a.title + a.era).toLowerCase().includes(q.toLowerCase()))
  return (
    <Page>
      <Title>The Library</Title>
      <Lead>Every era, every empire. Search the encyclopedia or browse below.</Lead>
      <Field placeholder="Search articles or eras…" value={q} onChange={(e) => setQ(e.target.value)} />
      <Grid>
        {list.map((a) => (<Card key={a.id}><small>{a.era}</small><h3>{a.title}</h3><p>{a.summary}</p></Card>))}
      </Grid>
      {list.length === 0 && <p>No articles match “{q}”. Try a broader term.</p>}
    </Page>
  )
}

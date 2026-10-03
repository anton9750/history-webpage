import styled from 'styled-components'
import { figures, figureTitles } from '../data/figures'
import { useWikiImages } from '../hooks/useWikiImages'
import { Page, Title, Lead, Grid, Card } from '../partials/ui'

const Portrait = styled.img`width: 100%; aspect-ratio: 4/5; object-fit: cover; object-position: top; margin-bottom: 1rem; background: ${({ theme }) => theme.colors.line};`
const Empty = styled.div`aspect-ratio: 4/5; margin-bottom: 1rem; background: ${({ theme }) => theme.colors.line};`

export default function Characters() {
  const { items, loading, failed } = useWikiImages(figureTitles)
  return (
    <Page>
      <Title>Characters through history</Title>
      <Lead>The people who bent the course of events.</Lead>
      {failed.length > 0 && <p role="alert">Couldn’t load {failed.length} portrait(s). Check your connection and reload.</p>}
      <Grid>
        {figures.map((f) => (
          <Card key={f.id}>
            {items[f.wiki]?.image ? <Portrait src={items[f.wiki].image} alt={f.name} /> : <Empty aria-busy={loading} />}
            <h3>{f.name}</h3><small>{f.years}</small><p>{f.blurb}</p>
            {items[f.wiki]?.url && <a href={items[f.wiki].url} target="_blank" rel="noreferrer">Read on Wikipedia</a>}
          </Card>
        ))}
      </Grid>
    </Page>
  )
}

import { useState } from 'react'
import styled from 'styled-components'
import { gallery, galleryTitles } from '../data/gallery'
import { useWikiImages, type WikiItem } from '../hooks/useWikiImages'
import { Page, Title, Lead, Grid } from '../partials/ui'

const Tile = styled.button`
  border: 0; background: ${({ theme }) => theme.colors.panel}; cursor: zoom-in; aspect-ratio: 4/3; overflow: hidden; position: relative;
  img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; } &:hover img { transform: scale(1.05); }
  span { position: absolute; left: 0; right: 0; bottom: 0; padding: .6rem; background: rgba(26,14,23,.8); text-align: left; }
`
const Skeleton = styled.div`aspect-ratio: 4/3; background: ${({ theme }) => theme.colors.panel};`
const Box = styled.div`position: fixed; inset: 0; z-index: 100; background: rgba(26,14,23,.95); display: grid; place-items: center; padding: 1rem; cursor: zoom-out; text-align: center;
  img { max-height: 80vh; margin: 0 auto; object-fit: contain; } p { margin-top: .8rem; }`

export default function Images() {
  const { items, loading, failed } = useWikiImages(galleryTitles)
  const [open, setOpen] = useState<{ item: WikiItem; caption: string } | null>(null)
  return (
    <Page>
      <Title>Images through history</Title>
      <Lead>Landmarks and turning points, pulled live from Wikipedia. Select one to enlarge.</Lead>
      {failed.length > 0 && <p role="alert">Couldn’t load {failed.length} image(s). Check your connection and reload.</p>}
      <Grid>
        {loading && gallery.map((p) => <Skeleton key={p.wiki} aria-busy />)}
        {!loading && gallery.filter((p) => items[p.wiki]?.image).map((p) => (
          <Tile key={p.wiki} onClick={() => setOpen({ item: items[p.wiki], caption: p.caption })}>
            <img src={items[p.wiki].image} alt={p.caption} loading="lazy" /><span>{p.caption}</span>
          </Tile>
        ))}
      </Grid>
      {open && (
        <Box onClick={() => setOpen(null)}>
          <div><img src={open.item.image} alt={open.caption} /><p>{open.caption}{open.item.description ? ` – ${open.item.description}` : ''}</p>
            {open.item.url && <a href={open.item.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Source on Wikipedia</a>}</div>
        </Box>
      )}
    </Page>
  )
}

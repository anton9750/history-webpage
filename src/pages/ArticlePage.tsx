import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { articles } from '../data/library'
import { Page, Title } from '../partials/ui'

const Body = styled.article`
  max-width: 68ch; font-family: Georgia, 'Times New Roman', serif; font-size: 1.15rem; line-height: 1.85;
  p { margin-bottom: 1.4rem; }
`
const Era = styled.p`color: ${({ theme }) => theme.colors.orange}; margin-bottom: .4rem;`
const Summary = styled.p`font-size: 1.25rem; color: ${({ theme }) => theme.colors.muted}; max-width: 62ch; margin-bottom: 2.5rem;`
const Pager = styled.nav`display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid ${({ theme }) => theme.colors.line};`

export default function ArticlePage() {
  const { id } = useParams()
  const i = articles.findIndex((a) => a.id === id)
  useEffect(() => window.scrollTo(0, 0), [id])

  if (i === -1) return (<Page><Title>Article not found</Title><p>That article doesn’t exist. <Link to="/read">Back to the library</Link></p></Page>)
  const a = articles[i], prev = articles[i - 1], next = articles[i + 1]
  return (
    <Page>
      <Link to="/read">← Back to the library</Link>
      <Era style={{ marginTop: '1.5rem' }}>{a.era}</Era>
      <Title>{a.title}</Title>
      <Summary>{a.summary}</Summary>
      <Body>{a.body.map((p, n) => <p key={n}>{p}</p>)}</Body>
      <Pager>
        {prev ? <Link to={`/read/${prev.id}`}>← {prev.title}</Link> : <span />}
        {next ? <Link to={`/read/${next.id}`}>{next.title} →</Link> : <span />}
      </Pager>
    </Page>
  )
}
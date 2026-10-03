import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { figures, figureTitles } from '../data/figures'
import { useWikiImages } from '../hooks/useWikiImages'
import { down } from '../utils/media'
import { Button } from '../partials/ui'

const rise = keyframes`from { opacity: 0; transform: translateY(26px) } to { opacity: 1; transform: none }`

const Img = styled.img`
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(.6) brightness(.75);
  transition: filter .5s, transform .8s;
`
const Label = styled.div`
  position: absolute; z-index: 2; left: 0; right: 0; bottom: 0; padding: 1.2rem .8rem; text-align: center;
  background: linear-gradient(transparent, rgba(26,14,23,.92)); opacity: 0; transform: translateY(28px);
  transition: opacity .45s, transform .45s;
  b { display: block; font: 800 1.15rem ${({ theme }) => theme.fonts.display}; color: ${({ theme }) => theme.colors.orange}; }
  small { color: ${({ theme }) => theme.colors.muted}; }
  ${down('md')} { opacity: 1; transform: none; padding: .6rem .3rem; b { font-size: .9rem; } small { display: none; } }
`
const Strip = styled.div`
  position: relative; flex: 1; overflow: hidden; cursor: pointer; border-right: 1px solid ${({ theme }) => theme.colors.bg};
  background: linear-gradient(160deg, ${({ theme }) => theme.colors.line}, ${({ theme }) => theme.colors.panel});
  transition: flex .6s cubic-bezier(.2,.7,.2,1);
  &:hover, &:focus-visible { flex: 3.2; }
  &::after { content: ''; position: absolute; inset: 0; pointer-events: none; transition: opacity .5s;
    background: linear-gradient(165deg, rgba(255,138,61,.5), rgba(255,79,139,.55)); mix-blend-mode: soft-light; }
  &:hover::after, &:focus-visible::after { opacity: 0; }
  &:hover ${Img}, &:focus-visible ${Img} { filter: none; transform: scale(1.06); }
  &:hover ${Label}, &:focus-visible ${Label} { opacity: 1; transform: none; }
  ${down('md')} { flex: 1 1 20%; height: 32vh; min-height: 170px; }
  ${down('sm')} { flex: 1 1 50%; }
`
const Hero = styled.section`
  position: relative; display: flex; height: calc(100vh - ${({ theme }) => theme.headerH}); min-height: 520px;
  ${down('md')} { flex-wrap: wrap; height: auto; min-height: 0; }
`
const Initial = styled.span`
  position: absolute; inset: 0; display: grid; place-items: center; font: 800 3rem ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.line};
`
const Intro = styled.section`
  padding: 4rem 1.5rem; text-align: center; max-width: 780px; margin: 0 auto; animation: ${rise} .9s both;
  h1 { font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 800; margin-bottom: 1rem; }
  p { color: ${({ theme }) => theme.colors.muted}; margin-bottom: 2rem; }
  a { margin: 0 .4rem; display: inline-block; margin-bottom: .6rem; }
`
export default function Home() {
  const { items } = useWikiImages(figureTitles)
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  return (
    <>
      <Hero aria-label="Ten of history's most famous people">
        {figures.map((f) => (
          <Strip key={f.id} tabIndex={0}>
            <Initial>{f.name[0]}</Initial>
            {items[f.wiki]?.image && !broken[f.id] && <Img src={items[f.wiki].image} alt={f.name} onError={() => setBroken((b) => ({ ...b, [f.id]: true }))} />}
            <Label><b>{f.name}</b><small>{f.years}</small></Label>
          </Strip>
        ))}
      </Hero>
      <Intro>
        <h1>History made cool.</h1>
        <p>An encyclopedia, a gallery and a cast of characters built for the next generation of historians.</p>
        <Link to="/read"><Button>Start reading</Button></Link>
        <Link to="/characters"><Button>Meet the characters</Button></Link>
      </Intro>
    </>
  )
}

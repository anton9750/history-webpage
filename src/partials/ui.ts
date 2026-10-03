import styled from 'styled-components'
import { down } from '../utils/media'

export const Page = styled.main`
  max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem 5rem;
  ${down('sm')} { padding: 2rem 1rem 4rem; }
`
export const Title = styled.h1`font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; margin-bottom: .5rem;`
export const Lead = styled.p`color: ${({ theme }) => theme.colors.muted}; max-width: 62ch; margin-bottom: 2rem;`
export const Grid = styled.div`
  display: grid; gap: 1.25rem; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`
export const Card = styled.article`
  background: ${({ theme }) => theme.colors.panel}; border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 6px; padding: 1.25rem; overflow: hidden;
`
export const Button = styled.button`
  background: ${({ theme }) => theme.gradient}; color: #2a0d14; border: 0; border-radius: 4px;
  padding: .7rem 1.3rem; font-weight: 600; cursor: pointer;
  &:hover { filter: brightness(1.08); }
`
export const Field = styled.input`
  width: 100%; background: ${({ theme }) => theme.colors.panel}; border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 4px; padding: .75rem .9rem; margin-bottom: 1rem;
`
export const Error = styled.p`color: ${({ theme }) => theme.colors.danger}; margin-bottom: 1rem;`

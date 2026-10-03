import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { down } from '../utils/media'

const Foot = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.line}; padding: 2.5rem 1.5rem; color: ${({ theme }) => theme.colors.muted};
  display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
  ${down('sm')} { flex-direction: column; text-align: center; }
  nav { display: flex; gap: 1.2rem; justify-content: center; }
`
export default function Footer() {
  return (
    <Foot>
      <span>© {new Date().getFullYear()} Chronicle – history worth studying. Images via Wikipedia, each under its own licence.</span>
      <nav><Link to="/read">Read</Link><Link to="/characters">Characters</Link><Link to="/images">Images</Link><Link to="/contact">Contact</Link></nav>
    </Foot>
  )
}

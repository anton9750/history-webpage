import { useRef, useState } from 'react'
import styled from 'styled-components'

// Put your song at public/assets/theme.mp3 (or change the path below).
const SONG = `${import.meta.env.BASE_URL}assets/theme.mp3`

const Btn = styled.button`
  position: fixed; right: 1rem; bottom: 1rem; z-index: 60; border-radius: 999px; padding: .65rem 1.1rem;
  background: ${({ theme }) => theme.gradient}; color: #2a0d14; border: 0; font-weight: 600; cursor: pointer;
`
export default function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const toggle = () => {
    const a = ref.current; if (!a) return
    if (playing) { a.pause(); setPlaying(false) } else { a.play().then(() => setPlaying(true)).catch(() => setPlaying(false)) }
  }
  return (<><audio ref={ref} src={SONG} loop /><Btn onClick={toggle} aria-pressed={playing}>{playing ? '❚❚ Pause music' : '▶ Play music'}</Btn></>)
}

// Your encyclopedia goes here. Add entries (or later load them from JSON / an API).
export interface Article { id: string; title: string; era: string; summary: string }
export const articles: Article[] = [
  { id: 'rome-republic', title: 'The Roman Republic', era: 'Ancient', summary: 'Placeholder – replace with your full article.' },
  { id: 'black-death', title: 'The Black Death', era: 'Medieval', summary: 'Placeholder – replace with your full article.' },
  { id: 'french-revolution', title: 'The French Revolution', era: 'Early modern', summary: 'Placeholder – replace with your full article.' },
]

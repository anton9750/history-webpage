// Your encyclopedia goes here. Add entries (or later load them from JSON / an API).
export interface Article { id: string; title: string; era: string; summary: string }
export const articles: Article[] = [
  {
    id: 'rome-republic',
    title: 'The Roman Republic',
    era: 'Ancient',
    summary:
      'From 509 BC to 27 BC, Rome was ruled by elected magistrates and a powerful Senate instead of kings. It grew from a city-state into master of the Mediterranean, then collapsed into civil war and gave way to the rule of Augustus.',
  },
  {
    id: 'black-death',
    title: 'The Black Death',
    era: 'Medieval',
    summary:
      'Between 1347 and 1351, plague spread along trade routes from Asia into Europe and killed an estimated third or more of the population. It reshaped labour, religion and society for generations.',
  },
  {
    id: 'french-revolution',
    title: 'The French Revolution',
    era: 'Early modern',
    summary:
      'Beginning in 1789 with a financial crisis and the storming of the Bastille, the revolution toppled the monarchy, declared a republic and descended into the Reign of Terror. It ended in 1799 when Napoleon seized power.',
  },
]
// `wiki` = exact Wikipedia article title; the useWikiImages hook fetches the portrait automatically.
export interface Figure { id: string; name: string; years: string; blurb: string; wiki: string }
export const figures: Figure[] = [
  { id: 'caesar', name: 'Julius Caesar', years: '100–44 BC', wiki: 'Julius Caesar', blurb: 'Roman general whose rise ended the Republic.' },
  { id: 'cleopatra', name: 'Cleopatra', years: '69–30 BC', wiki: 'Cleopatra', blurb: 'Last active ruler of Ptolemaic Egypt.' },
  { id: 'alexander', name: 'Alexander the Great', years: '356–323 BC', wiki: 'Alexander the Great', blurb: 'Built one of history’s largest empires by 30.' },
  { id: 'genghis', name: 'Genghis Khan', years: 'c. 1162–1227', wiki: 'Genghis Khan', blurb: 'Founder of the Mongol Empire.' },
  { id: 'davinci', name: 'Leonardo da Vinci', years: '1452–1519', wiki: 'Leonardo da Vinci', blurb: 'Painter, engineer and the Renaissance ideal.' },
  { id: 'newton', name: 'Isaac Newton', years: '1643–1727', wiki: 'Isaac Newton', blurb: 'Laws of motion and universal gravitation.' },
  { id: 'napoleon', name: 'Napoleon', years: '1769–1821', wiki: 'Napoleon', blurb: 'Emperor of the French and military reformer.' },
  { id: 'victoria', name: 'Queen Victoria', years: '1819–1901', wiki: 'Queen Victoria', blurb: 'Monarch of an age of industry and empire.' },
  { id: 'lincoln', name: 'Abraham Lincoln', years: '1809–1865', wiki: 'Abraham Lincoln', blurb: 'Led the United States through its Civil War.' },
  { id: 'gandhi', name: 'Mahatma Gandhi', years: '1869–1948', wiki: 'Mahatma Gandhi', blurb: 'Led India’s nonviolent independence movement.' },
]
export const figureTitles = figures.map((f) => f.wiki)

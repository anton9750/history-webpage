// Add any Wikipedia article title; its lead image shows up in the gallery automatically.
export interface Pic { wiki: string; caption: string }
export const gallery: Pic[] = [
  { wiki: 'Great Pyramid of Giza', caption: 'Great Pyramid of Giza' },
  { wiki: 'Parthenon', caption: 'The Parthenon, Athens' },
  { wiki: 'Colosseum', caption: 'The Colosseum, Rome' },
  { wiki: 'Terracotta Army', caption: 'The Terracotta Army' },
  { wiki: 'Rosetta Stone', caption: 'The Rosetta Stone' },
  { wiki: 'Stonehenge', caption: 'Stonehenge' },
  { wiki: 'Great Wall of China', caption: 'Great Wall of China' },
  { wiki: 'Machu Picchu', caption: 'Machu Picchu' },
  { wiki: 'Printing press', caption: 'The printing press' },
  { wiki: 'Industrial Revolution', caption: 'The Industrial Revolution' },
  { wiki: 'Taj Mahal', caption: 'Taj Mahal' },
  { wiki: 'Notre-Dame de Paris', caption: 'Notre-Dame de Paris' },
]
export const galleryTitles = gallery.map((p) => p.wiki)

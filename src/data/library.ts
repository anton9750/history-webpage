// Your encyclopedia. Each entry gets its own page at /read/<id>.
// `summary` shows on the card; `body` is the full article, one string per paragraph.
export interface Article { id: string; title: string; era: string; summary: string; body: string[] }

export const articles: Article[] = [
  {
    id: 'rome-republic', title: 'The Roman Republic', era: 'Ancient',
    summary: 'From 509 BC to 27 BC, Rome was run by elected officials and a powerful Senate instead of kings.',
    body: [
      "Tradition says the Romans drove out their last king, Tarquin the Proud, in 509 BC. In his place they built a system where power was shared: two consuls were elected each year, the Senate advised and controlled money, and popular assemblies passed laws.",
      "The republic was never equal at first. Over generations the common people, the plebeians, forced the elite to give them rights, including their own officials called tribunes who could veto unfair decisions. Wars with Carthage, especially the Punic Wars between 264 and 146 BC, made Rome the dominant power of the Mediterranean.",
      "Conquest brought wealth, slaves and ambitious generals such as Marius, Sulla, Pompey and Julius Caesar, whose armies were loyal to them rather than to the state. Caesar crossed the Rubicon in 49 BC, started a civil war and was assassinated in 44 BC. His heir Octavian won the final struggle and in 27 BC became Augustus, the first emperor.",
    ],
  },
  {
    id: 'ancient-egypt', title: 'Ancient Egypt', era: 'Ancient',
    summary: 'A civilisation on the Nile that lasted around 3,000 years and built the pyramids.',
    body: [
      "Egypt was unified under a single ruler around 3100 BC. The yearly flooding of the Nile left rich soil along its banks, which fed a large population and paid for a powerful state ruled by pharaohs, who were seen as living gods.",
      "The Great Pyramid at Giza was built for the pharaoh Khufu around 2560 BC and stayed the tallest human-made structure for thousands of years. Egyptians also developed hieroglyphic writing, a detailed religion built around the afterlife, and advanced skills in medicine, surveying and engineering.",
      "Egypt's long story ended when the Romans took it over in 30 BC after the death of Cleopatra VII. The hieroglyphs were forgotten until the Rosetta Stone, found in 1799, allowed Jean-François Champollion to decipher them in 1822.",
    ],
  },
  {
    id: 'classical-athens', title: 'Classical Athens', era: 'Ancient',
    summary: 'The Greek city-state that invented democracy and produced some of history’s greatest thinkers.',
    body: [
      "In 508 BC the reformer Cleisthenes gave Athenian citizens the right to vote directly on laws in an assembly. This was the first known democracy, though it was limited: only free adult men born in Athens counted as citizens, while women, enslaved people and foreigners had no vote.",
      "Athens led the Greeks against the Persian invasions, winning at Marathon in 490 BC and Salamis in 480 BC. Under the statesman Pericles it entered a golden age: the Parthenon was built between 447 and 432 BC, playwrights such as Sophocles wrote tragedies, and Socrates, Plato and Aristotle laid the foundations of Western philosophy.",
      "The golden age ended with the Peloponnesian War against Sparta, fought from 431 to 404 BC. Athens lost, but its ideas about citizenship, debate and public life have influenced political thought ever since.",
    ],
  },
  {
    id: 'mongol-empire', title: 'The Mongol Empire', era: 'Medieval',
    summary: 'The largest connected land empire in history, built in the 13th century from the Mongolian steppe.',
    body: [
      "In 1206 a chieftain named Temüjin united the Mongol tribes and took the title Genghis Khan. His army was fast, disciplined and promoted fighters on skill rather than birth, which let it defeat much larger enemies.",
      "Within a few decades the Mongols controlled land from the Pacific coast of Asia to eastern Europe. Their conquests were brutal, and cities that resisted, such as Baghdad in 1258, were destroyed. Yet once territories were secured, the Mongols protected trade, a period often called the Pax Mongolica that made travel along the Silk Road safer than before.",
      "The empire split into separate khanates after Genghis Khan’s grandsons took power. Kublai Khan founded the Yuan dynasty in China in 1271, and by the 14th century the Mongol states had fragmented, though their impact on Asia and Europe lasted much longer.",
    ],
  },
  {
    id: 'black-death', title: 'The Black Death', era: 'Medieval',
    summary: 'The plague that killed a huge share of Europe’s population between 1347 and 1351.',
    body: [
      "The Black Death reached Europe in 1347, carried on ships from the Black Sea to Sicily. It was caused by the bacterium Yersinia pestis, spread by fleas living on rats and other animals, and it moved quickly along trade routes.",
      "Estimates of the death toll vary, but many historians believe between a third and a half of Europe’s people died. Doctors had no understanding of germs, and in some places frightened communities blamed outsiders, leading to terrible persecution of Jewish people.",
      "With so many workers dead, those who survived could demand higher wages and better terms. This weakened the old system of serfdom and changed the economy. Plague returned in waves for centuries afterwards.",
    ],
  },
  {
    id: 'renaissance', title: 'The Renaissance', era: 'Early modern',
    summary: 'A rebirth of art, science and learning that began in Italy and spread across Europe.',
    body: [
      "The Renaissance began in Italian cities such as Florence in the 14th century. Wealthy families like the Medici paid for artists and scholars, and thinkers called humanists rediscovered the writings of ancient Greece and Rome and focused on human achievement.",
      "Artists including Leonardo da Vinci, Michelangelo and Raphael developed new techniques such as perspective, giving paintings and sculptures a lifelike depth. Around 1450 Johannes Gutenberg introduced the printing press to Europe, which made books cheaper and helped new ideas travel faster than ever.",
      "From Italy the movement spread north to places like England, France and the Netherlands, shaping literature, science and exploration. Historians usually place it between roughly the 14th and 17th centuries.",
    ],
  },
  {
    id: 'french-revolution', title: 'The French Revolution', era: 'Early modern',
    summary: 'The upheaval that ended the French monarchy and spread ideas of liberty and equality.',
    body: [
      "France in the 1780s was deeply in debt, and ordinary people were burdened with taxes while the nobility and clergy enjoyed privileges. In 1789 King Louis XVI called the Estates-General, and the Third Estate broke away to form a National Assembly. On 14 July a crowd stormed the Bastille prison in Paris.",
      "In August 1789 the Declaration of the Rights of Man and of the Citizen set out principles of liberty and equality before the law. The monarchy was abolished in 1792, and Louis XVI was executed in January 1793.",
      "During the Reign of Terror of 1793 and 1794, the government executed thousands of people it considered enemies, until its leader Robespierre was himself overthrown. In 1799 the general Napoleon Bonaparte took power, ending the revolution but keeping many of its reforms.",
    ],
  },
  {
    id: 'industrial-revolution', title: 'The Industrial Revolution', era: 'Modern',
    summary: 'The shift from hand-made goods and farming to machines, factories and cities, starting in Britain.',
    body: [
      "From about 1760 Britain began to change from a mostly farming society into an industrial one. Textile machines, improved steam engines and cheap coal and iron made it possible to produce goods in factories on a scale never seen before.",
      "Railways, which began carrying passengers in 1825, connected towns and moved goods quickly. People poured into growing cities to find work, where many faced crowded housing and dangerous conditions, including child labour. Reformers pushed for laws such as the Factory Acts to limit the worst abuses.",
      "Industrialisation spread to Europe and North America during the 19th century. In the long run it raised living standards, but it also changed how people lived, worked and thought about their place in society.",
    ],
  },
  {
    id: 'world-war-one', title: 'The First World War', era: 'Modern',
    summary: 'The global conflict of 1914 to 1918 that redrew the map of Europe and the Middle East.',
    body: [
      "On 28 June 1914 Archduke Franz Ferdinand of Austria-Hungary was assassinated in Sarajevo. A chain of alliances pulled the great powers into war within weeks, with the Allies, including Britain, France and Russia, fighting the Central Powers of Germany, Austria-Hungary and the Ottoman Empire.",
      "On the Western Front the armies dug into trenches and fought for years over a few kilometres of ground. Machine guns, artillery, poison gas and tanks made the war deadlier than any before it, and roughly nine million soldiers died.",
      "The fighting stopped with the armistice of 11 November 1918. The Treaty of Versailles followed in 1919, and the German, Austro-Hungarian, Ottoman and Russian empires had all collapsed, leaving a changed world and tensions that fed into later conflicts.",
    ],
  },
  {
    id: 'space-race', title: 'The Space Race', era: 'Modern',
    summary: 'The Cold War contest between the United States and the Soviet Union to reach space first.',
    body: [
      "The Space Race grew out of the Cold War rivalry between the United States and the Soviet Union. It began on 4 October 1957 when the Soviets launched Sputnik 1, the first artificial satellite, which shocked the American public and government.",
      "The Soviets scored another first on 12 April 1961 when Yuri Gagarin became the first human in space. The United States answered with the Apollo programme, and on 20 July 1969 Neil Armstrong and Buzz Aldrin of Apollo 11 became the first people to walk on the Moon.",
      "The rivalry eased in 1975 with the joint Apollo-Soyuz mission, when American and Soviet spacecraft docked in orbit. The technology developed during the race, from rockets to satellites, shaped the communications and navigation systems we use today.",
    ],
  },
]
import { useEffect, useState } from 'react'

export interface WikiItem { title: string; image?: string; description?: string; url?: string }

// Free, key-less Wikipedia REST API (CORS enabled): /page/summary/{title}
const API = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
const cache = new Map<string, WikiItem>()

// Wikimedia only serves standard thumbnail widths (e.g. 500, 960, 1280) and never upscales,
// so ask for 960px only when the original is at least that wide; otherwise use the original file.
function pickImage(d: any): string | undefined {
  const thumb: string | undefined = d.thumbnail?.source
  const orig = d.originalimage
  if (!thumb) return undefined
  if (orig && orig.width >= 960) return thumb.replace(/\/\d+px-/, '/960px-')
  return orig?.source ?? thumb
}

async function fetchOne(title: string, signal: AbortSignal): Promise<WikiItem> {
  const hit = cache.get(title)
  if (hit) return hit
  const res = await fetch(API + encodeURIComponent(title), { signal })
  if (!res.ok) throw new Error(`${title}: ${res.status}`)
  const d = await res.json()
  const item: WikiItem = {
    title,
    image: pickImage(d),
    description: d.description,
    url: d.content_urls?.desktop?.page,
  }
  cache.set(title, item)
  return item
}

/** Fetch an image (plus short description + page link) for every Wikipedia title in the list. */
export function useWikiImages(titles: string[]) {
  const key = titles.join('|')
  const [items, setItems] = useState<Record<string, WikiItem>>({})
  const [failed, setFailed] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ctrl = new AbortController()
    setLoading(true)
    Promise.allSettled(titles.map((t) => fetchOne(t, ctrl.signal))).then((results) => {
      if (ctrl.signal.aborted) return
      const ok: Record<string, WikiItem> = {}
      const bad: string[] = []
      results.forEach((r, i) => {
        if (r.status === 'fulfilled') ok[titles[i]] = r.value
        else { bad.push(titles[i]); console.warn('Wikipedia fetch failed:', titles[i], r.reason) }
      })
      setItems(ok); setFailed(bad); setLoading(false)
    })
    return () => ctrl.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return { items, failed, loading }
}

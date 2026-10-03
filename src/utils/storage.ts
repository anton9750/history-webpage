export interface FileRecord { id: string; name: string; type: string; size: number; data: string; added: number }
export interface User { username: string; password: string; lastLogin?: number }

export const read = <T,>(key: string, fallback: T): T => {
  try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : fallback } catch { return fallback }
}
export const write = (key: string, value: unknown): boolean => {
  try { localStorage.setItem(key, JSON.stringify(value)); return true } catch { return false } // false = quota full
}
export const filesKey = (user: string) => `chronicle_files_${user}`
export const formatSize = (b: number) => (b > 1e6 ? `${(b / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1e3))} KB`)
export const toDataUrl = (f: File) =>
  new Promise<string>((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result)); r.onerror = rej; r.readAsDataURL(f) })

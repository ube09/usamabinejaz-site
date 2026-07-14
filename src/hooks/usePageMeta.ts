import { useEffect } from 'react'

/**
 * Sets document.title ("<page> — Usama Bin Ejaz") and the meta description
 * for the current route. Runs on mount and whenever title/description change.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} — Usama Bin Ejaz`
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
}

export default usePageMeta

import { useDocumentMetadata, type Metadata } from '../lib/hooks'

export function PageMeta({ title, description, path, type }: Metadata) {
  useDocumentMetadata({ title, description, path, type })
  return null
}

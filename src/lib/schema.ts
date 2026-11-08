import type { FaqItem } from '../components/FAQ'

const SITE = 'https://koadr.dev'

type Block = Record<string, unknown>

function script(graph: Block[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
}

export function faqSchema(items: FaqItem[], pageUrl: string): string {
  return script(
    [
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  )
}

export function breadcrumbSchema(name: string, path: string): string {
  return script(
    [
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${path}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` },
        ],
      },
    ],
  )
}

export function webPageSchema({
  name,
  description,
  path,
  type = 'WebPage',
}: {
  name: string
  description: string
  path: string
  type?: 'WebPage' | 'CollectionPage'
}): string {
  return script(
    [
      {
        '@type': type,
        '@id': `${SITE}${path}#webpage`,
        url: `${SITE}${path}`,
        name,
        description,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#software` },
        inLanguage: 'en',
      },
    ],
  )
}


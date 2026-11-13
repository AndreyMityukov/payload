import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Page } from '@/payload-types'

type TextBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'text' }>

export function Text({ content }: TextBlock) {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto prose prose-lg">
      {content ? <RichText data={content} /> : null}
    </section>
  )
}

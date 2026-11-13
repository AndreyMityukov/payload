import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { RenderBlocks } from '@/components/RenderBlocks'

type Props = { params: Promise<{ slug: string }> }

async function getPage(slug: string) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}
  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) notFound()
  return (
    <article>
      <RenderBlocks blocks={page.layout ?? []} />
    </article>
  )
}

import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = { params: Promise<{ slug: string }> }

export default async function NewsItem({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })
  const item = docs[0]
  if (!item) notFound()
  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      {item.publishedAt && (
        <time className="text-gray-500 text-sm">
          {new Date(item.publishedAt).toLocaleDateString('ru-RU')}
        </time>
      )}
      <div className="prose prose-lg mt-6">
        {item.content ? <RichText data={item.content} /> : null}
      </div>
    </article>
  )
}

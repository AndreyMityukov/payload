import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export default async function NewsPage() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'news',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
  })
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Новости</h1>
      <ul className="space-y-6">
        {docs.map((n) => (
          <li key={n.id} className="border-b pb-4">
            <Link href={`/news/${n.slug}`} className="text-xl text-blue-600 hover:underline">
              {n.title}
            </Link>
            {n.excerpt && <p className="text-gray-600 mt-1">{n.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })
  const page = docs[0]

  if (!page) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold">Главная страница не настроена</h1>
        <p className="mt-4 text-gray-600">
          Создайте страницу со slug <code className="bg-gray-100 px-2 py-1 rounded">home</code> в{' '}
          <a href="/admin" className="text-blue-600 hover:underline">
            админке
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <article>
      <RenderBlocks blocks={page.layout ?? []} />
    </article>
  )
}

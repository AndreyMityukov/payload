import Image from 'next/image'
import type { Page } from '@/payload-types'

type HeroBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'hero' }>

export function Hero({ heading, subheading, image, cta }: HeroBlock) {
  return (
    <section className="py-20 px-6 text-center bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold">{heading}</h1>
      {subheading && <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{subheading}</p>}
      {image && typeof image === 'object' && image.url && (
        <div className="mt-8">
          <Image
            src={image.url}
            alt={image.alt ?? heading}
            width={image.width ?? 800}
            height={image.height ?? 400}
            className="mx-auto rounded-lg"
          />
        </div>
      )}
      {cta?.label && cta?.url && (
        <a
          href={cta.url}
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          {cta.label}
        </a>
      )}
    </section>
  )
}

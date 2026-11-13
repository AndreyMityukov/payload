import type { Page } from '@/payload-types'
import { Hero } from './blocks/Hero'
import { Text } from './blocks/Text'
import { Features } from './blocks/Features'

const components = {
  hero: Hero,
  text: Text,
  features: Features,
} as const

export function RenderBlocks({ blocks }: { blocks: NonNullable<Page['layout']> }) {
  return (
    <>
      {blocks.map((block, i) => {
        const Cmp = components[block.blockType as keyof typeof components]
        if (!Cmp) return null
        // @ts-expect-error — discriminated union сложно типизировать без type guard
        return <Cmp key={i} {...block} />
      })}
    </>
  )
}

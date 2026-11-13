import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Media } from '@/payload-types'

type VisualValue =
  { type: 'icon'; value: { name: string } | null } | { type: 'image'; value: string | Media | null }

function toPascal(name: string): string {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

export function Visual({
  value,
  size = 28,
  className = '',
}: {
  value: VisualValue | null
  size?: number
  className?: string
}) {
  if (!value) return null

  // Иконка
  if (
    value.type === 'icon' &&
    value.value &&
    typeof value.value === 'object' &&
    'name' in value.value
  ) {
    const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[toPascal(value.value.name)]
    if (!Icon) return null
    return <Icon size={size} className={className} />
  }

  // Картинка
  if (value.type === 'image') {
    const media = value.value
    if (!media) return null
    const url = typeof media === 'object' && 'url' in media ? (media as Media).url : null
    const alt = typeof media === 'object' && 'alt' in media ? ((media as Media).alt ?? '') : ''
    if (!url) return null
    return (
      <img
        src={url}
        alt={alt}
        width={size}
        height={size}
        className={`object-cover rounded ${className}`}
      />
    )
  }

  return null
}

'use client'
import { useMemo, useState } from 'react'
import * as LucideIcons from 'lucide-react'

// Популярные иконки (можно расширить)
const POPULAR_ICONS = [
  'star',
  'globe',
  'heart',
  'zap',
  'shield',
  'wifi',
  'phone',
  'mail',
  'map-pin',
  'clock',
  'check',
  'users',
  'home',
  'building',
  'truck',
  'credit-card',
  'gift',
  'headphones',
  'tv',
  'camera',
  'video',
  'settings',
  'search',
  'menu',
  'arrow-right',
  'chevron-right',
  'circle-check',
  'circle-alert',
  'info',
  'sparkles',
  'rocket',
  'trending-up',
  'award',
  'badge-check',
  'thumbs-up',
  'smile',
] as const

function toPascal(name: string): string {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

export function IconPickerInner({
  value,
  onChange,
}: {
  value: { name: string } | null
  onChange: (icon: { name: string } | null) => void
}) {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return POPULAR_ICONS
    return POPULAR_ICONS.filter((n) => n.includes(q))
  }, [search])

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Поиск иконки..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-slate-200 rounded px-3 py-1.5 text-sm"
      />

      <div className="grid grid-cols-8 gap-1 max-h-64 overflow-y-auto p-2 border border-slate-200 rounded">
        {filtered.map((name) => {
          const Icon = (
            LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>
          )[toPascal(name)]
          if (!Icon) return null
          const active = value?.name === name
          return (
            <button
              key={name}
              type="button"
              title={name}
              onClick={() => onChange({ name })}
              className={
                active
                  ? 'p-2 rounded bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                  : 'p-2 rounded hover:bg-slate-100 text-slate-700'
              }
            >
              <Icon size={20} />
            </button>
          )
        })}
      </div>

      {value?.name && (
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Выбрано:</span>
          <code className="bg-slate-100 px-2 py-0.5 rounded">{value.name}</code>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="text-red-600 hover:underline text-xs"
          >
            Очистить
          </button>
        </div>
      )}
    </div>
  )
}

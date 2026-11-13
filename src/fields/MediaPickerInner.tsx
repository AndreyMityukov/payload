'use client'
import { useEffect, useState } from 'react'

export function MediaPickerInner({
  value,
  onChange,
}: {
  value: string | null
  onChange: (id: string | null) => void
}) {
  const [media, setMedia] = useState<{
    id: string
    url?: string
    filename?: string
    alt?: string
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [inputId, setInputId] = useState(value ?? '')

  // Загрузка медиа по ID (для превью)
  useEffect(() => {
    if (!value) {
      setMedia(null)
      return
    }
    setLoading(true)
    fetch(`/api/media/${value}?depth=0`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setMedia(data))
      .catch(() => setMedia(null))
      .finally(() => setLoading(false))
  }, [value])

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="ID медиа из медиатеки"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="flex-1 border border-slate-200 rounded px-3 py-1.5 text-sm"
        />
        <button
          type="button"
          onClick={() => onChange(inputId.trim() || null)}
          className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm"
        >
          Применить
        </button>
      </div>

      {loading && <p className="text-sm text-slate-500">Загрузка...</p>}

      {media?.url && (
        <div className="flex items-center gap-3 p-2 border border-slate-200 rounded">
          <img src={media.url} alt={media.alt ?? ''} className="w-16 h-16 object-cover rounded" />
          <div className="text-sm">
            <div className="font-medium">{media.filename}</div>
            <div className="text-slate-500 text-xs">{media.id}</div>
          </div>
          <button
            type="button"
            onClick={() => {
              onChange(null)
              setInputId('')
            }}
            className="ml-auto text-red-600 hover:underline text-xs"
          >
            Очистить
          </button>
        </div>
      )}
    </div>
  )
}

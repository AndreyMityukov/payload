'use client'
import { useField } from '@payloadcms/ui'
import { IconPickerInner } from './IconPickerInner'
import { MediaPickerInner } from './MediaPickerInner'

type VisualValue =
  { type: 'icon'; value: { name: string } | null } | { type: 'image'; value: string | null }

export const VisualPickerField = ({ path }: { path: string }) => {
  const { value, setValue } = useField<VisualValue>({ path })

  const current = value ?? { type: 'icon', value: null }
  const type = current.type ?? 'icon'

  function switchType(newType: 'icon' | 'image') {
    if (newType === type) return
    setValue({ type: newType, value: null })
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-700">Визуал</label>

      {/* Переключатель типа */}
      <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden">
        <button
          type="button"
          onClick={() => switchType('icon')}
          className={
            type === 'icon'
              ? 'bg-blue-600 text-white px-4 py-1.5 text-sm font-medium'
              : 'bg-white text-slate-700 px-4 py-1.5 text-sm hover:bg-slate-50'
          }
        >
          Иконка
        </button>
        <button
          type="button"
          onClick={() => switchType('image')}
          className={
            type === 'image'
              ? 'bg-blue-600 text-white px-4 py-1.5 text-sm font-medium'
              : 'bg-white text-slate-700 px-4 py-1.5 text-sm hover:bg-slate-50'
          }
        >
          Картинка
        </button>
      </div>

      {/* Условный рендер */}
      {type === 'icon' && (
        <IconPickerInner
          value={(current.value as { name: string } | null) ?? null}
          onChange={(icon) => setValue({ type: 'icon', value: icon })}
        />
      )}
      {type === 'image' && (
        <MediaPickerInner
          value={(current.value as string | null) ?? null}
          onChange={(id) => setValue({ type: 'image', value: id })}
        />
      )}
    </div>
  )
}

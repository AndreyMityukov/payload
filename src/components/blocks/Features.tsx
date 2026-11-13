import type { Page } from '@/payload-types'
import { getLucideIcon } from 'payload-lucide-picker'
import type { LucideIconPickerType } from 'payload-lucide-picker'

type FeaturesBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'features' }>

export function Features({ title, items }: FeaturesBlock) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {title && (
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-slate-200" />
            <h2 className="text-xl sm:text-2xl font-bold text-center text-[#2b4392]">{title}</h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {items?.map((item, i) => {
            const Icon = item.icon ? getLucideIcon(item.icon as LucideIconPickerType) : null
            return (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center"
                    style={{ color: '#2B4392' }}
                  >
                    {Icon ? (
                      <Icon size={28} strokeWidth={1.5} />
                    ) : (
                      <span className="text-xl">●</span>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

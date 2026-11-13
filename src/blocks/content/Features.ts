import type { Block } from 'payload'
import { LucideIconPicker } from 'payload-lucide-picker'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: {
    singular: { en: 'Features', ru: 'Преимущества' },
    plural: { en: 'Features', ru: 'Преимущества' },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      admin: {
        description:
          'Заголовок секции (например, «Что вы получите, когда станете нашим абонентом?»)',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Пункты',
      labels: {
        singular: { en: 'Item', ru: 'Пункт' },
        plural: { en: 'Items', ru: 'Пункты' },
      },
      minRows: 1,
      fields: [
        LucideIconPicker({
          name: 'icon',
          label: 'Иконка',
          required: true,
        }),
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Заголовок',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Описание',
        },
      ],
    },
  ],
}

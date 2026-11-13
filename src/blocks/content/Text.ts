import type { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'text',
  labels: {
    singular: { en: 'Text', ru: 'Текст' },
    plural: { en: 'Text', ru: 'Текст' },
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: { en: 'Content', ru: 'Содержание' },
    },
  ],
}

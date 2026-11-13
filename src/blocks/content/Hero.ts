import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: { en: 'Hero', ru: 'Hero (баннер)' },
    plural: { en: 'Hero', ru: 'Hero (баннеры)' },
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: { en: 'Heading', ru: 'Заголовок' },
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: { en: 'Subheading', ru: 'Подзаголовок' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Image', ru: 'Изображение' },
    },
    {
      name: 'cta',
      type: 'group',
      label: { en: 'Button', ru: 'Кнопка' },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: { en: 'Label', ru: 'Текст кнопки' },
        },
        {
          name: 'url',
          type: 'text',
          label: { en: 'URL', ru: 'Ссылка (URL)' },
        },
      ],
    },
  ],
}

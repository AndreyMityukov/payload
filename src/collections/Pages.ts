import type { CollectionConfig } from 'payload'
import { AllBlocks } from '@/blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: { en: 'Page', ru: 'Страница' },
    plural: { en: 'Pages', ru: 'Страницы' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // публичное чтение
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: { en: 'Title', ru: 'Заголовок' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', ru: 'Слаг (URL)' },
      admin: {
        description: {
          en: 'Page URL, e.g. "about" or "tariffs"',
          ru: 'URL страницы, например "about" или "tariffs"',
        },
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: { en: 'Meta title', ru: 'Meta Title (заголовок)' },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: { en: 'Meta description', ru: 'Meta Description (описание)' },
        },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      label: { en: 'Page blocks', ru: 'Блоки страницы' },
      labels: {
        singular: { en: 'Block', ru: 'Блок' },
        plural: { en: 'Blocks', ru: 'Блоки' },
      },
      blocks: AllBlocks,
    },
  ],
}

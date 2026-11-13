import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: { en: 'News', ru: 'Новость' },
    plural: { en: 'News', ru: 'Новости' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt', 'status'],
    group: { en: 'Content', ru: 'Контент' },
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: { en: 'Title', ru: 'Заголовок' } },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', ru: 'Слаг (URL)' },
    },
    { name: 'excerpt', type: 'textarea', label: { en: 'Excerpt', ru: 'Краткое описание' } },
    { name: 'content', type: 'richText', label: { en: 'Content', ru: 'Содержание' } },
    { name: 'cover', type: 'upload', relationTo: 'media', label: { en: 'Cover', ru: 'Обложка' } },
    { name: 'publishedAt', type: 'date', label: { en: 'Published at', ru: 'Дата публикации' } },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      label: { en: 'Status', ru: 'Статус' },
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: { useAsTitle: 'name' },
  access: {
    create: () => true, // публичная форма
    read: ({ req }) => Boolean(req.user), // читать только админ
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'message', type: 'textarea' },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation !== 'create') return
        // пока просто лог; почту добавим позже через nodemailer
        console.log('📩 Новая заявка:', doc.name, doc.phone)
      },
    ],
  },
}

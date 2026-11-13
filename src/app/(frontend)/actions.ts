'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { revalidatePath } from 'next/cache'

export async function submitLead(_prev: unknown, formData: FormData) {
  const payload = await getPayload({ config })
  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  if (!name || !phone) {
    return { ok: false, error: 'Заполните имя и телефон' }
  }
  await payload.create({
    collection: 'leads',
    data: { name, phone, message: String(formData.get('message') ?? '') },
  })
  revalidatePath('/contacts')
  return { ok: true }
}

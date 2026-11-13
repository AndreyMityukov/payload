'use client'
import { useActionState } from 'react'
import { submitLead } from '../actions'

export default function ContactsPage() {
  const [state, action, pending] = useActionState(submitLead, null)
  return (
    <div className="max-w-md mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">Оставить заявку</h1>
      {state?.ok ? (
        <p className="text-green-600">Спасибо! Мы свяжемся с вами.</p>
      ) : (
        <form action={action} className="space-y-4">
          <input name="name" placeholder="Имя" required className="w-full border p-2 rounded" />
          <input
            name="phone"
            placeholder="Телефон"
            required
            className="w-full border p-2 rounded"
          />
          <textarea name="message" placeholder="Сообщение" className="w-full border p-2 rounded" />
          {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
          <button
            type="submit"
            disabled={pending}
            className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {pending ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      )}
    </div>
  )
}

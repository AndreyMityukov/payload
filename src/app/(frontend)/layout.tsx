import React from 'react'
import './globals.css'

export const metadata = {
  description: 'Сайт провайдера — тестовый проект',
  title: 'Мой тестовый сайт',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

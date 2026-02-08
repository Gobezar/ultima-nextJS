import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const url = request.nextUrl.clone()

  // Если запрос пришел на www.ultima-detailing.ru
  if (host === 'www.ultima-detailing.ru') {
    url.hostname = 'ultima-detailing.ru'
    // Делаем 301 редирект на версию без www
    return NextResponse.redirect(url, 301)
  }
}

export const config = {
  // Применять middleware ко всем путям
  matcher: '/:path*',
}
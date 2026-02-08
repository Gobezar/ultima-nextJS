import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  
  // Проверяем наличие www в начале строки
  if (host && host.startsWith('www.')) {
    // Очищаем хост от www и возможного порта :10000
    const newHost = host.replace('www.', '').split(':')[0];
    const newUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${newHost}`);
    
    return NextResponse.redirect(newUrl, 301);
  }
}

export const config = {
  matcher: [
    /*
     * Исключаем статические файлы и API, чтобы не замедлять их:
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
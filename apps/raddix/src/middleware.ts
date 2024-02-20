import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/i18n';

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Verify if the path has a locale
  const pathLocale = locales.find(
    locale => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    // eslint-disable-next-line curly
    if (pathLocale !== defaultLocale) return;

    const pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || '/';
    return NextResponse.redirect(
      new URL(`${pathWithoutLocale}${search}`, req.url)
    );
  }

  const newPath = `/${defaultLocale}${pathname}${search}`;
  return NextResponse.rewrite(new URL(newPath, req.url));
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

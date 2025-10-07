// src/app/layout.tsx
import type {Metadata} from 'next';
import Link from 'next/link'; // ← 追加
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Example Inc.',
    template: '%s | Example Inc.',
  },
  description: 'Example Inc. のコーポレートサイトです。',
  metadataBase: new URL('https://example.com'), // デプロイ後に本番URLへ
  openGraph: {siteName: 'Example Inc.', locale: 'ja_JP', type: 'website'},
  icons: {icon: '/favicon.ico', apple: '/apple-touch-icon.png'},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <body className="min-h-dvh flex flex-col">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold">
              Example Inc.
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/about">会社情報</Link>
              <Link href="/services">事業内容</Link>
              <Link href="/works">実績</Link>
              <Link href="/contact" className="font-medium">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Example Inc.
          </div>
        </footer>
      </body>
    </html>
  );
}

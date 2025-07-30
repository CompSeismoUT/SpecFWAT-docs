/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import type { ReactNode } from 'react';
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'
import '../app/globals.css'
import ThemeToggler from '@/components/ThemeToggler';
import 'katex/dist/katex.min.css'

export const metadata = {
  metadataBase: new URL('https://specfwat.xumijian.me'),
  title: {
    template: 'SpecfFWAT - %s',
  },
  description: 'SpecfFWAT',
  applicationName: 'SpecfFWAT',
  generator: 'Next.js',
  appleWebApp: {
    title: 'SpecfFWAT'
  },
}

const EmptyComponent = () => null

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image
            src="/logo.svg"
            alt="SpecFWAT Logo"
            width={32}
            height={32}
          />
          <b>SpecFWAT</b>{' '}
          {/* <span style={{ opacity: '60%' }}>The Next Docs Builder</span> */}
        </div>
      }
      // Next.js discord server
      // chatLink="https://discord.gg/hEM84NMkRv"
      projectLink="https://github.com/CompSeismoUT/SpecFWAT"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={<Footer> Mijian Xu {new Date().getFullYear()} © UofT.</Footer>}
          editLink={<EmptyComponent />}
          docsRepositoryBase="https://github.com/CompSeismoUT/SpecFWAT"
          // sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

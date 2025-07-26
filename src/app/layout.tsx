/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import type { ReactNode } from 'react';
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'
import '../app/globals.css'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: 'SpecfFWAT - %s',
  },
  description: 'Nextra: the Next.js site builder',
  applicationName: 'Nextra',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Nextra'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  }
}

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
      projectLink="https://github.com/CompSeismoUT/SpecFWAT-docs#"
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
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

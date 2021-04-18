import { ReactNode } from 'react'
import { Navigation } from 'components/Navigation'
import Head from 'next/head'

import styles from './Layout.module.scss'

export const siteTitle = 'Joblytics'

export type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles['layout']}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Joblytics" />
      <meta property="og:image" content={''} />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <main>
      <Navigation />
      {children}
    </main>
  </div>
)

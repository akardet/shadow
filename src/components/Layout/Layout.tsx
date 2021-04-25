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
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta property="og:url" content={'https://joblytics.co'} key="ogurl" />
      <meta
        property="og:image"
        content={'/images/social_banner-large.jpg'}
        key="ogimage"
      />
      <meta property="og:site_name" content={'Joblytics'} key="ogsitename" />
      <meta property="og:title" content={'Joblytics'} key="ogtitle" />
      <meta
        property="og:description"
        content={
          'By analyzing real time market data at scale, Joblytics provides early professionals with a detailed look into their goal career. We help you identify and close your core skill gaps with intelligent, personalized course recommendations.'
        }
        key="ogdesc"
      />
    </Head>
    <main>
      <Navigation />
      {children}
    </main>
  </div>
)

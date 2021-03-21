import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.scss';

export const siteTitle = 'Joblytics';

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Joblytics" />
      <meta property="og:image" content={''} />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);

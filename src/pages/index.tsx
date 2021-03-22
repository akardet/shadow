import Link from 'next/link';
import Head from 'next/head';
import { Layout, siteTitle } from 'components/Layout';
import styles from 'styles/pages/home.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles['hero']}>
        <div className={styles['hero__left']}>
          <h1 className={styles['hero__title']}>
            The go-to platform for career advancement
          </h1>
          <h2 className={styles['hero__subtitle']}>
            Designed to meet the needs of early career professionals. Using
            real-time market data, we accurately assess the skills you need to
            succeed
          </h2>
          <Link href={'/assess'}>
            <a className={styles['button']}>Take the Skills Assessment</a>
          </Link>
        </div>
        <div className={styles['hero__right']}>
          <img
            className={styles['hero__image']}
            width={400}
            height={400}
            src={'/images/dog.jpg'}
            alt={'black french bulldog looking into the camera'}
          />
        </div>
      </section>
      <footer className={styles['footer']}>
        <p>© Joblytics - All rights reservered</p>
      </footer>
    </Layout>
  );
}

import Head from 'next/head';
import { Layout, siteTitle } from '../components/Layout';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{'Hello Sam'}</h1>
    </Layout>
  );
}

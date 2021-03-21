import Head from 'next/head';
import { Layout, siteTitle } from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{'Hello Sam'}</p>
    </Layout>
  );
}

import Head from 'next/head'
import { Layout, siteTitle } from 'components/Layout'
import { SignUpForm } from 'components/SignUpForm'
import HeroSection from 'components/HeroSection'
import InfoSection from 'components/InfoSection'

import styles from 'styles/pages/home.module.scss'

const data = {
  hero: {
    eyebrow: 'The Premiere',
    title: 'Platform for early stage career advancement',
    description:
      'Designed to meet the needs of early career professionals. Using real time market data, we accurately asses the skills you need to succeed.',
    buttonText: 'Sign up',
    heroImageUrl:
      'https://res.cloudinary.com/stancharoen/image/upload/v1617567516/hero_se04wg.png',
  },
  background: {
    blobUrl:
      'https://res.cloudinary.com/stancharoen/image/upload/v1617568382/red_blob_g5lz8e.png',
  },
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        className={styles['background__blob']}
        width={400}
        height={400}
        src={data.background.blobUrl}
        alt={'black french bulldog looking into the camera'}
      />
      <HeroSection />
      <svg
        viewBox="0 0 7009 762"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles['hero-info-diagnol-svg']}
      >
        <path d="M7009 0H0V761.999L7009 0Z" fill="var(--jl-hero-svg-top)" />
        <path
          d="M0 762L7009 762L7009 0.000732422L0 762Z"
          fill="var(--jl-white)"
        />
      </svg>
      <InfoSection />
      <section className={styles['first']}>
        <div className={styles['first__content']}>
          <div>
            <img
              className={styles['first__image']}
              width={400}
              height={400}
              src={
                'https://res.cloudinary.com/stancharoen/image/upload/v1617767516/first_info_crvlin.png'
              }
              alt={'Joblytics dashboard'}
            />
          </div>
          <div>
            <h2 className={styles['first__title']}>
              {
                'First we ask you for an honest assessment of what skills you currently have pertaining to your desired career field'
              }
            </h2>
            <p>
              {
                'We remove the guess work out of the equation and find the exact skills you need to bridge your current skill gap.'
              }
            </p>
            <p>
              {
                'Our Machine Learning software quantifies your current skills to better match you with a job closest to your skill level.'
              }
            </p>
          </div>
        </div>
      </section>
      <section className={styles['cta']}>
        <div className={styles['discord']}>
          <h2>
            {'Keep yourself accountable'}
            <span>{'And stay engaged'}</span>
          </h2>
        </div>
        <div className={styles['signup']}>
          <h2>{'Sign up'}</h2>
          <p>{'Stay up to date for when we release our early beta'}</p>
          <SignUpForm user={{ email: '', firstName: '', lastName: '' }} />
        </div>
      </section>
      {/* <footer className={styles['footer']}>
        <p>© Joblytics - All rights reservered</p>
      </footer> */}
    </Layout>
  )
}

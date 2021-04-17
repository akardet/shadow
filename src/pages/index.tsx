import Head from 'next/head'
import { Layout, siteTitle } from 'components/Layout'
import { SignUpForm } from 'components/SignUpForm'
import HeroSection from 'components/HeroSection'
import InfoSection from 'components/InfoSection'
import AssessmentSection from 'components/AssessmentSection'

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
      <svg viewBox="0 0 3054 252" className={styles['info-first-diagnol-svg']}>
        <path d="M3054 0L0.5 251.5H3054V0Z" fill="#F6FDFE" />
        <path
          d="M0 251.5L3053.5 0.000244141L2.19868e-05 -2.28048e-05L0 251.5Z"
          fill="white"
        />
      </svg>
      <AssessmentSection />
      <svg viewBox="0 0 3054 252" xmlns="http://www.w3.org/2000/svg">
        <path d="M3054 0L0.5 251.5H3054V0Z" fill="white" />
        <path
          d="M0 251.5L3053.5 0.000244141L2.19868e-05 -2.28048e-05L0 251.5Z"
          fill="#F6FDFE"
        />
      </svg>
      <section>
        <div className={styles['first__content']}>
          <div>
            <h2 className={styles['first__title']}>
              {
                'Then we curate a customized plan to address your personal skill gaps'
              }
            </h2>
            <p>
              {
                'Our system crawls the web to build a database of courses that are vetted by our team.'
              }
            </p>
            <p>
              {
                'We only curate courses that have been proven to meet current industry standards.'
              }
            </p>
          </div>
          <div>
            <img
              className={styles['first__image']}
              width={400}
              height={400}
              src={
                'https://res.cloudinary.com/dhc96divr/image/upload/v1618628829/Group_282_ggiry7.png'
              }
              alt={'Joblytics dashboard'}
            />
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

import Head from 'next/head'
import { Layout, siteTitle } from 'components/Layout'
import { Section } from 'components/Section'
import { Button } from 'components/Button'
import { Block } from 'components/Block'
import { InfoTile } from 'components/InfoTile'
import HeroSection from 'components/HeroSection'

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
    background: {
      blobUrl:
        'https://res.cloudinary.com/stancharoen/image/upload/v1617568382/red_blob_g5lz8e.png',
    },
  },
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <svg
        viewBox="0 0 7009 762"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7009 0H0V761.999L7009 0Z" fill="var(--jl-orange-op07)" />
        <path
          d="M0 762L7009 762L7009 0.000732422L0 762Z"
          fill="var(--jl-white)"
        />
      </svg>
      <Section className={styles['info']}>
        <div className={styles['info__content']}>
          <h2 className={styles['info__title']}>{'What is Joblytics?'}</h2>
          <p className={styles['info__description']}>
            {
              'Torem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'
            }
          </p>
          <div className={styles['info__tiles']}>
            <InfoTile
              imageUrl={''}
              title={'Share Your Skills'}
              info={
                'Placeholder text commonly used to demonstrate the visual form of a document or a typeface'
              }
            />
            <InfoTile
              imageUrl={''}
              title={'Know Your Skill Gaps'}
              info={
                'Placeholder text commonly used to demonstrate the visual form of a document or a typeface'
              }
            />
            <InfoTile
              imageUrl={''}
              title={'Get Recommended Courses'}
              info={
                'Placeholder text commonly used to demonstrate the visual form of a document or a typeface'
              }
            />
          </div>
          <Button
            as={'a'}
            href={'/signup'}
            type={'button'}
            icon={'chevron'}
            className={styles['info__button']}
            iconClassName={styles['info__button-icon']}
          >
            {'Take the Assessment'}
          </Button>
        </div>
      </Section>
      {/* <footer className={styles['footer']}>
        <p>© Joblytics - All rights reservered</p>
      </footer> */}
    </Layout>
  )
}

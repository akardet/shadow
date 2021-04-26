import Head from 'next/head'
import Link from 'next/link'
import styles from 'styles/pages/home.module.scss'

import { Layout, siteTitle } from 'components/Layout'
import HeroSection from 'components/HeroSection'
import InfoSection from 'components/InfoSection'
import AssessmentSection from 'components/AssessmentSection'
import SignUpSection from 'components/SignUpSection'
import { ComingSoon } from 'components/ComingSoon'
import PlanSection from 'components/PlanSection'

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
      <PlanSection />
      <ComingSoon />
      <SignUpSection />
      <footer className={styles['footer']}>
        <p>Joblytics ©2021</p>
        <div>
          <p>
            All Rights Reserved | <Link href={'/'}>Terms and Condition</Link> |{' '}
            <Link href={'/'}>Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </Layout>
  )
}

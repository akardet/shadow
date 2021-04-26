import React from 'react'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { SignUpForm } from 'components/SignUpForm'

import styles from './SignUpSection.module.scss'

export const SignUpSection = () => {
  return (
    <section className={styles['cta']}>
      <div className={styles['signup__image-container']}>
        <img
          className={styles['signup__image']}
          width={400}
          height={400}
          src={
            'https://res.cloudinary.com/dhc96divr/image/upload/v1618628829/Group_azro6h.png'
          }
          alt={'Two women standing saround an certificate'}
        />
      </div>
      <div className={styles['signup']}>
        <h2>{'Join the waitlist'}</h2>
        <p>{'Stay up to date for when we release our early beta'}</p>
        <SignUpForm user={{ email: '', firstName: '', lastName: '' }} />
        <p className={styles['divider']}>{'And'}</p>
        <Button
          as={'a'}
          href={'https://discord.gg/URGCdzfQMM'}
          className={styles['discord__button']}
        >
          <span className={styles['discord__button-wrapper']}>
            <Icon className={styles['discord__button-icon']} name={'discord'} />
            {'Join our Discord'}
          </span>
        </Button>
      </div>
    </section>
  )
}

import React from 'react'
import { Block } from 'components/Block'

import styles from './ComingSoon.module.scss'

export const ComingSoon = () => {
  return (
    <section className={styles['comingsoon']}>
      <Block className={styles['cs-block']}>
        <div className={styles['cs__content']}>
          <div>
            <p className={styles['cs-eyebrow']}>Coming Soon</p>
            <h2 className={styles['cs__title']}>
              {'Lastly we pair you with recruiters for potential job postings'}
            </h2>
            <p>
              {
                'Impress recruiters with your relevant skillset and increase your chances to confidently land your dream job'
              }
            </p>
          </div>
          <div className={styles['cs__images']}>
            <img
              className={styles['foreground-image']}
              width={400}
              height={400}
              src={
                'https://res.cloudinary.com/dhc96divr/image/upload/v1618628829/Group_283_aqsbbj.png'
              }
              alt={'Avatar of a data scientist'}
            />
            <img
              className={styles['background-image']}
              width={400}
              height={400}
              src={
                'https://res.cloudinary.com/dhc96divr/image/upload/v1618628828/Group_153_xsns9x.png'
              }
              alt={''}
              tabIndex={-1}
            />
          </div>
        </div>
      </Block>
    </section>
  )
}

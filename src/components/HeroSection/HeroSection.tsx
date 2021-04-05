import { Section } from 'components/Section'
import { Button } from 'components/Button'
import { Block } from 'components/Block'

import styles from './HeroSection.module.scss'

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

export const HeroSection = () => {
  const { hero } = data
  return (
    <Section className={styles['hero']}>
      <div className={styles['hero__content']}>
        <Block className={styles['hero__text']}>
          <>
            <span className={styles['hero__eyebrow']}>{hero.eyebrow}</span>
            <h1 className={styles['hero__title']}>{hero.title}</h1>
            <p className={styles['hero__description']}>{hero.description}</p>
            <Button
              as={'a'}
              href={'/signup'}
              type={'button'}
              icon={'chevron'}
              className={styles['hero__button']}
              iconClassName={styles['hero__button-icon']}
            >
              {hero.buttonText}
            </Button>
          </>
        </Block>
        <Block className={styles['hero__image--wrapper']}>
          <img
            className={styles['hero__image']}
            width={400}
            height={400}
            src={hero.heroImageUrl}
            alt={'Joblytics dashboard'}
          />
        </Block>
        <img
          className={styles['background__blob']}
          width={400}
          height={400}
          src={hero.background.blobUrl}
          alt={'black french bulldog looking into the camera'}
        />
      </div>
    </Section>
  )
}

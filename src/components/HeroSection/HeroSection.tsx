import { Section } from 'components/Section'
import { Button } from 'components/Button'
import { Block } from 'components/Block'

import styles from './HeroSection.module.scss'

const data = {
  hero: {
    eyebrow: 'The Smartest',
    title: 'Platform for Successfully Changing Careers',
    description:
      'Joblytics takes the guesswork out of career pivoting. By analyzing real-time market data at scale, Joblytics provides early professionals with a detailed look into their core skills gaps, and a personalized plan for how to close them.',
    buttonText: 'Join the waitlist',
    heroImageUrl:
      'https://res.cloudinary.com/dhc96divr/image/upload/v1618629040/Group_285_g4cn87.png',
  },
  background: {
    blobUrl:
      'https://res.cloudinary.com/dhc96divr/image/upload/v1619449870/full_pill_ddamqm.png',
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
              href={'#signup'}
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
            alt={'Joblytics Dashboard'}
          />
        </Block>
        <img
          className={styles['background__pill']}
          width={400}
          height={400}
          src={data.background.blobUrl}
          alt={''}
        />
      </div>
    </Section>
  )
}

import { Section } from 'components/Section'
import { Button } from 'components/Button'
import { InfoTile } from 'components/InfoTile'

import styles from './InfoSection.module.scss'

const data = {
  heading: 'How does it work?',
  description:
    'Joblytics analyzes thousands of job postings every day. By using Natural Language Processing, we are able to get a deep understanding of the skills required to succeed in your goal job. Then, we calculate the optimal set of online courses to close those gaps as quickly and cheaply as possible.',
  tiles: [
    {
      key: 'infoTile-1',
      title: 'Take an Assessment',
      description: 'Tell us about your current skill set and career goals',
      imageUrl:
        'https://res.cloudinary.com/dhc96divr/image/upload/v1618629040/Group_281_c5jiew.png',
      altImageText: 'Icon illustration of a chart',
    },
    {
      key: 'infoTile-2',
      title: 'Find your Skill Gaps',
      description:
        'Joblytics will identify the most important skills you need to break into your dream job',
      imageUrl:
        'https://res.cloudinary.com/dhc96divr/image/upload/v1618628828/Group_280_fhbm7h.png',
      altImageText: 'Icon illustration of a lightbult',
    },
    {
      key: 'infoTile-3',
      title: 'Get a Personalized Recommendation',
      description:
        'We’ll curate a personalized set of classes to close your skill gaps & get you interview ready',
      imageUrl:
        'https://res.cloudinary.com/dhc96divr/image/upload/v1618628829/Group_279_bgqtwf.png',
      altImageText: 'Icon illustration of a thumbs up',
    },
  ],
}

export const InfoSection = () => {
  return (
    <Section className={styles['info']}>
      <div className={styles['info__content']}>
        <h2 className={styles['info__title']}>{data.heading}</h2>
        <p className={styles['info__description']}>{data.description}</p>
        <div className={styles['info__tiles']}>
          {data.tiles.map(
            ({ key, title, description, imageUrl, altImageText }) => (
              <InfoTile
                key={key}
                imageUrl={imageUrl}
                title={title}
                info={description}
                altImageText={altImageText}
              />
            ),
          )}
        </div>
        <Button
          as={'a'}
          href={'#signup'}
          type={'button'}
          icon={'chevron'}
          className={styles['info__button']}
          iconClassName={styles['info__button-icon']}
        >
          {'Join the waitlist'}
        </Button>
      </div>
    </Section>
  )
}

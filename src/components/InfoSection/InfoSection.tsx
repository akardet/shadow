import { Section } from 'components/Section'
import { Button } from 'components/Button'
import { InfoTile } from 'components/InfoTile'

import styles from './InfoSection.module.scss'

const data = {
  heading: 'How does it work?',
  description:
    'A data-driven and cost-effective platform that helps bring the most effective resources together to make you a more effective candidate.',
  tiles: [
    {
      title: 'Take an Assessment',
      description: 'Tell us about your current skill set and career goals',
      imageUrl:
        'https://res.cloudinary.com/dhc96divr/image/upload/v1618629040/Group_281_c5jiew.png',
      altImageText: 'Icon illustration of a chart',
    },
    {
      title: 'Find your Skill Gaps',
      description:
        'Joblytics will identify the most important skills you need to break into your dream job',
      imageUrl:
        'https://res.cloudinary.com/dhc96divr/image/upload/v1618628828/Group_280_fhbm7h.png',
      altImageText: 'Icon illustration of a lightbult',
    },
    {
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
          {data.tiles.map(({ title, description, imageUrl, altImageText }) => (
            <InfoTile
              imageUrl={imageUrl}
              title={title}
              info={description}
              altImageText={altImageText}
            />
          ))}
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
  )
}

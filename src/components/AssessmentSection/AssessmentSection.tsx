import { Section } from 'components/Section'
import { Button } from 'components/Button'

import styles from './AssessmentSection.module.scss'

export const AssessmentSection = () => {
  return (
    <Section className={styles['first']}>
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
          <Button
            as={'a'}
            href={'#signup'}
            type={'button'}
            icon={'chevron'}
            className={styles['first__button']}
            iconClassName={styles['first__button-icon']}
          >
            {'Join the waitlist'}
          </Button>
        </div>
      </div>
    </Section>
  )
}

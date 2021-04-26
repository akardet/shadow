import { Section } from 'components/Section'
import { Button } from 'components/Button'

import styles from './PlanSection.module.scss'

export const PlanSection = () => {
  return (
    <Section>
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
        <div>
          <img
            className={styles['first__image']}
            width={400}
            height={400}
            src={
              'https://res.cloudinary.com/dhc96divr/image/upload/v1618628829/Group_282_ggiry7.png'
            }
            alt={'A list of companies that your skills match up with'}
          />
        </div>
      </div>
    </Section>
  )
}

import { Section } from 'components/Section'
import { Button } from 'components/Button'
import { InfoTile } from 'components/InfoTile'

import styles from './InfoSection.module.scss'

export const InfoSection = () => {
  return (
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
  )
}

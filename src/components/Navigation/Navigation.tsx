import Link from 'next/link'
import { Button } from 'components/Button'
import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['logo']}>
        <Link href={'/'}>
          <div>
            <img
              width={194}
              height={34}
              src={
                'https://res.cloudinary.com/stancharoen/image/upload/v1617510838/joblytics-logo_loscgf.png'
              }
              alt={'Joblytics logo'}
            />
          </div>
        </Link>
      </div>
      <ul className={styles['nav__list']}>
        <li className={styles['nav__link']}>
          <Link href={'/story'}>Our Story</Link>
        </li>
        <li className={styles['nav__link']}>
          <Link href={'/signup'}>
            <Button
              className={styles['nav__button']}
              iconClassName={styles['nav__button-icon']}
              icon={'chevron'}
              as={'button'}
              type={'button'}
            >
              Sign up
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

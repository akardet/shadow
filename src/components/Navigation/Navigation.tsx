import Link from 'next/link';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['logo']}>
        <Link href={'/'}>Joblytics</Link>
      </div>
      <ul className={styles['nav__list']}>
        <li className={styles['nav__link']}>
          <Link href={'/team'}>Team</Link>
        </li>
        <li className={styles['nav__link']}>
          <Link href={'/assess'}>Skills Assessment</Link>
        </li>
      </ul>
    </nav>
  );
};

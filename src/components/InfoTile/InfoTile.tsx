import React from 'react'

import styles from './InfoTile.module.scss'

interface InfoTileProps {
  imageUrl: string
  title: string
  info: string
}

export const InfoTile = ({ imageUrl, title, info }: InfoTileProps) => {
  return (
    <div className={styles['tile']}>
      <div className={styles['image']}>{''}</div>
      <h3 className={styles['title']}>{title}</h3>
      <p className={styles['info']}>{info}</p>
    </div>
  )
}

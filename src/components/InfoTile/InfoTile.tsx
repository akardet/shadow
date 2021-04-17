import React from 'react'

import styles from './InfoTile.module.scss'

interface InfoTileProps {
  imageUrl: string
  title: string
  info: string
  altImageText: string
}

export const InfoTile = ({
  imageUrl,
  title,
  info,
  altImageText,
}: InfoTileProps) => {
  return (
    <div className={styles['tile']}>
      <img
        className={styles['image']}
        width={100}
        height={100}
        src={imageUrl}
        alt={altImageText}
      />
      <h3 className={styles['title']}>{title}</h3>
      <p className={styles['info']}>{info}</p>
    </div>
  )
}

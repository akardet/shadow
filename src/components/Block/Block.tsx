import React, { ReactNode } from 'react'
import classnames from 'classnames'

import styles from './Block.module.scss'

interface BlockProps {
  children: ReactNode
  className?: string
}

export const Block = ({ children, className }: BlockProps) => {
  return (
    <div className={classnames(styles['block'], className)}>{children}</div>
  )
}

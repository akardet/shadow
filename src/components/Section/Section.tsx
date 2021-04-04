import React, { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './Section.module.scss'

interface SectionProps {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={classnames(styles['section'], className)}>
      {children}
    </section>
  )
}

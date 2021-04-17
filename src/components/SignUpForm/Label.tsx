import { ReactNode } from 'react'
import classnames from 'classnames'

import styles from './Form.module.scss'

export interface LabelProps {
  children: ReactNode
  className: string
  htmlFor: string
}

export const Label = ({
  htmlFor,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classnames(styles['label'], className)}
      {...props}
    >
      {children}
    </label>
  )
}

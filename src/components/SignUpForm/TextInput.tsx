import { InputHTMLAttributes } from 'react'
import classnames from 'classnames'
import { Label } from './Label'

import styles from './Form.module.scss'

export type TextInputProp = InputHTMLAttributes<any> & {
  className?: string
  htmlFor: string
  id: string
  label: string
  error: string | undefined
}

type InputFeedbackProp = {
  error: string | undefined
}

const InputFeedback = ({ error }: InputFeedbackProp) =>
  error ? <div className={styles['input-feedback']}>{error}</div> : null

export const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}: TextInputProp) => {
  const classes = classnames(
    styles['input__group'],
    {
      'animated shake error': !!error,
    },
    className,
  )
  return (
    <div className={classes}>
      <Label htmlFor={id} className={styles['form__label']}>
        {label}
      </Label>
      <input
        id={id}
        className={styles['form__input']}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}

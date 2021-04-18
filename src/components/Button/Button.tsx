import React, {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react'
import classnames from 'classnames'

import { Icon } from 'components/Icon'

import styles from './Button.module.scss'

export type ButtonRef = HTMLButtonElement & HTMLAnchorElement

export type ButtonAs =
  | keyof Pick<JSX.IntrinsicElements, 'a' | 'button'>
  | ((
      props: ButtonHTMLAttributes<any> & AnchorHTMLAttributes<any>,
    ) => JSX.Element)

export type ButtonProps = (ButtonHTMLAttributes<any> &
  AnchorHTMLAttributes<any>) & {
  as?: ButtonAs
  ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
  type?: 'button' | 'submit' | 'reset'
  icon?: 'chevron' | 'discord'
  iconPlacement?: 'end' | 'start'
  iconClassName?: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = forwardRef(
  (
    {
      className,
      as: T = 'button',
      type = 'button',
      icon,
      iconPlacement,
      iconClassName,
      children,
      ...props
    },
    ref,
  ) => (
    <T
      {...props}
      ref={ref}
      type={T === 'button' ? type : undefined}
      className={classnames(styles['button'], className)}
    >
      {children && <span className={styles['button__text']}>{children}</span>}
      {icon && (
        <>
          <Icon
            name={icon}
            className={classnames(
              styles['button__icon'],
              iconPlacement === 'end' ? '' : '',
              iconClassName,
            )}
          />
          {/* <span className={styles['button__icon-background']} /> */}
        </>
      )}
    </T>
  ),
)

import { type HtmlHTMLAttributes } from 'react'
import cls from './button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps} >
      {children}
    </button>
  )
}

import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './appLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  classname?: string
  theme?: AppLinkTheme
}

const AppLink: React.FC<AppLinkProps> = (props) => {

  const {
    to,
    classname,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps 
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [classname, cls[theme]])}
      {...otherProps}
    >
      {children}</Link>
  )
}

export default AppLink

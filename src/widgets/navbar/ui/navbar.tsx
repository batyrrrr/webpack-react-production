import cls from './navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/app-link/app-link'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [])} >
      <div className={cls.links} >
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
        >Главная
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
        >О сайте</AppLink>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import cls from './sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/theme-switcher'
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher'

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}
      >
        toggle
      </button>
      <div className={cls.switchers} >
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

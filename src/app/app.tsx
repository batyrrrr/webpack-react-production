import { Suspense } from 'react'

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/themeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { SideBar } from 'widgets/sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
      <Suspense fallback='' >
        <Navbar />
        <div className='content-page' >
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App

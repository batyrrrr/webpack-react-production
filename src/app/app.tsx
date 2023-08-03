import { Suspense, } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/themeProvider'
import { AboutPage } from 'pages/about'
import { MainPage } from 'pages/main'



const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
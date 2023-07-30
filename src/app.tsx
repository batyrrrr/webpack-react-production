import React, { Suspense, useContext, useState } from 'react'
import { Counter } from './components/counter/counter'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/about/about-page-async'
import { MainPageAsync } from './pages/main/main-page-async'

import './styles/index.scss'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'



const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  )
}

export default App
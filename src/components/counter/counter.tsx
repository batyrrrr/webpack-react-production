import React, { useState } from 'react'
import classes from './counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className={classes.btn}>{count}</h1>
      <button onClick={increment}>increment</button>
      <p className={classes.ass}>sadasd</p>
    </div>
  )
}

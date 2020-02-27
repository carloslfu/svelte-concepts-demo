import React from 'react'
import style from './style.module.css'

export const Counter = () => {
  // local state
  const [count, setCount] = React.useState(0)

  // reactive expression ala React, explicit dependency declaration
  const derived = React.useMemo(() => Math.round(Math.E * count / Math.E * 100), [count])

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return <div className={style.container}>
    <h3>Counter example</h3>
    Count: {count} <br/>
    Derived value: {count * 2} <br/>
    <br/>
    Derived state (through reactive expresions): <br/>
    <div className={style.derivedState}>
      1 time: {derived} <br/>
      2 time: {derived} <br/>
      3 time: {derived} <br/>
      4 time: {derived} <br/>
      5 time: {derived} <br/>
      6 time: {derived} <br/>
      7 time: {derived} <br/>
    </div>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    <button onClick={increment}>Increment</button>
  </div>
}

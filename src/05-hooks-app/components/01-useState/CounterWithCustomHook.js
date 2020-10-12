import React from 'react'
import { useCounter } from '../../hooks/useCounterWithFactor'

const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100)

  return (
    <div className="Root">
      <h3>Counter with hook: {state}</h3>
      <button onClick={() => increment()} className="btn btn-primary">+ 1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={() => decrement()} className="btn btn-primary">- 1</button>
    </div>
  )
}

export default CounterWithCustomHook

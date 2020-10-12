import React, { useState } from 'react'

const CounterApp = () => {

  /*
    Ejercicio: Incrementar en 1 sólo una propiedad del objeto.
  */
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  })

  const { counter1, counter2 } = state

  return (
    <div>
      <h3>Counter:</h3>
      <h6>Counter 1: {counter1}</h6>
      <h6>Counter 2: {counter2}</h6>
      <button 
        className="btn btn-primary"
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1            
          })
        }}
      >+ 1</button>
    </div>
  )
}

export default CounterApp

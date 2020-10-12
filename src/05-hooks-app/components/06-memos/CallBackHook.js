import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback((num) => {
    setCounter(c => c + num)
  }, [setCounter])

  // Otro caso de uso común es cuando se utiliza con 
  // funciones.
  // useEffect(() => {
  //   // ???
  // }, [increment])

  return (
    <div>
      <h3>useCallBack Hook: {counter}</h3>
      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallBackHook

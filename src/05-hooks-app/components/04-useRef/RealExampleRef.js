import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <h3>useRef</h3>
      { show && <MultipleCustomHooks /> }

      <button 
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >Show/Hide</button>
    </div>
  )
}

export default RealExampleRef

import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  useEffect(() => {
    console.log('hey!')
  }, []) // Se ejecuta sólo una vez.

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })    
  }

  return (
    <>
      <h3>useEffect</h3>      
      <div className="form-group">
        <input 
          type="text"
          name="name"
          className=""
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="text"
          name="email"
          className=""
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  )
}

export default SimpleForm

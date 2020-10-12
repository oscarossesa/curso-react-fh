import React from 'react'
import { useForm } from '../../hooks/useForm'

const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>FormWithCustomHook</h3>
      <div className="form-group">
        <input 
          type="text"
          name="name"
          className="form-control"
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
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="text"
          name="password"
          className="form-control"
          placeholder="Tu password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  )
}

export default FormWithCustomHook

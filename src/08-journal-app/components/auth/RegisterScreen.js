import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { removeError, setError } from '../../actions/uiActions'

const RegisterScreen = () => {

  const dispatch = useDispatch()
  const { ui: { msgError } } = useSelector(state => state)

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const { name, email, password1, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      console.log('Formulario correcto')
    }

    console.log(name, email, password1, password2)
  }

  const isFormValid = () => {

    if (name.trim().length === 0) {

      dispatch(setError('Name is required.'))
      return false
      
    } else if (!validator.isEmail(email)) {
      
      dispatch(setError('Email is not valid.'))
      return false      
      
    } else if (password1 !== password2 || password1.length < 5) {
      
      dispatch(setError('Password should be at least 6 characters and match each other.'))
      return false      

    }

    dispatch(removeError())
    return true
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        { msgError &&
          <div className="auth__alert-error">
            { msgError }
          </div>
        }
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          className="auth__input"
          onChange={handleInputChange}
          value={password1}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
          value={password2}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>
        <Link 
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>
      </form>
    </>
  )
}

export default RegisterScreen

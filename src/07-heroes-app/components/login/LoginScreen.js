import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const LoginScreen = ({ history }) => {

  const context = useContext(AuthContext)
  const { dispatch } = useContext(AuthContext)
  console.log(context)

  const handleLogin = () => {
    
    const newUser = {
      name: 'Oscar Osses'
    }
    
    dispatch({
      type: types.login,
      payload: newUser
    })
    
    // history.push('/')
    history.replace('/')
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen

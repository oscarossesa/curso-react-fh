import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ 
  isAuthenticated,
  component: Component,
  ...rest
 }) => {
  
  localStorage.setItem('lastPath', rest.location.pathname)

  return (
    <Route {...rest} 
      component={(props) => (
        (isAuthenticated) ? <Component {...props} /> : <Redirect to='/login' />
      )}
    />
  )
}

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRouter

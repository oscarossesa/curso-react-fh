import React, { useState } from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'

const MainApp = () => {

  const [user, setUser] = useState({})
  
  return (
    <UserContext.Provider value={{
      setUser,
      user
    }}>
      <AppRouter /> 
    </UserContext.Provider>
  )
}

export default MainApp

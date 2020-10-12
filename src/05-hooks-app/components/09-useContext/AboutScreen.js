import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext)

  const handleLogOut = () => {
    setUser({})
  }

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
      <button
        className="btn btn-warning"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  )
}

export default AboutScreen

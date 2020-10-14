import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase-config'
import { login } from '../actions/authActions';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRoute';
import JournalScreen from '../components/journal/JournalScreen';
import PublicRoute from './PublicRoute';


const AppRouter = () => {

  const dispatch = useDispatch()
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false)
    })
  }, [dispatch, setChecking])

  if(checking) {
    return <h1>Espere...</h1>
  }

  return (
    <Router>
      <Switch>
        <PublicRoute 
          path="/auth" 
          isAuthenticated={isLoggedIn}
          component={AuthRouter} 
        />
        <PrivateRouter 
          exact
          isAuthenticated={isLoggedIn}
          path="/"
          component={JournalScreen}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  )
}

export default AppRouter

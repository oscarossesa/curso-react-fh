import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase-config'
import { login } from '../actions/authActions';
import { startLoadingNotes } from '../actions/notesAction'
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRoute';
import PublicRoute from './PublicRoute';
import JournalScreen from '../components/journal/JournalScreen';


const AppRouter = () => {

  const dispatch = useDispatch()
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {

      if (user?.uid) {

        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)

        dispatch(startLoadingNotes(user.uid))

      } else {

        setIsLoggedIn(false)

      }

      setChecking(false)
    })
  }, [dispatch, setChecking])

  if(checking) {
    return <h1>Loading...</h1>
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

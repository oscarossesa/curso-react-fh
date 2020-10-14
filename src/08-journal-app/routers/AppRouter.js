import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase-config'
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/authActions';


const AppRouter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }
    })
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route exact path="/" component={JournalScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  )
}

export default AppRouter

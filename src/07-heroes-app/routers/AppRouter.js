import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,  
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import LoginScreen from '../components/login/LoginScreen';
import DashboarRoutes from './DashboarRoutes';
import { AuthContext } from '../auth/AuthContext';

const AppRouter = () => {

  const { user: { logged }} = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={logged} />
          <PrivateRoute path="/" component={DashboarRoutes} isAuthenticated={logged} />                                                             
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter

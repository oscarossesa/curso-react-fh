import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/NavBar';
import DashboarRoutes from './DashboarRoutes';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboarRoutes} />

        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter

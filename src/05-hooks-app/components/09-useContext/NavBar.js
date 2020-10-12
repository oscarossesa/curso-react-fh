import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">useContext</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact activeClassName="active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

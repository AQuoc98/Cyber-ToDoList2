// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            {
              !isAuthenticated &&
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => loginWithRedirect({})} >Login</Link>
              </li>
            }

            {
              isAuthenticated &&
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile" >Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/secret" >Secret</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => logout()} >Logout</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-task" >ADD TASK</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
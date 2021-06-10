import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/dashboard">
            DashBoard
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/todo">TODO NOW</Link>
          </li>
        
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/register">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

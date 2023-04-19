import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ logout, token }) => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/Routines">Public Routines</Link>
        {token ? <Link to="/MyRoutines">My Routines</Link> : null}
        {token ? (
          <Link to="/" onClick={() => logout()}>
            Log Out
          </Link>
        ) : (
          <>
            <Link to="/Login">Log in</Link>
            <Link to="/Register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

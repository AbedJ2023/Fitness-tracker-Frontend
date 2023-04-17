import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ token }) => {
  const handleLogOut = (cb) => {
    localStorage.removeItem("JWT");
    cb();
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/Routines">Public Routines</Link>
        {token ? <Link to="/MyRoutines">My Routines</Link> : null}
        {token ? (
          <Link to="/" onClick={handleLogOut}>
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

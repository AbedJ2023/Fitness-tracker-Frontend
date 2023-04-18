import React from "react";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <div className="home">
      <h1>Welcome to Fitness Tracker!</h1>
      {token ? (
        <>
          <p> Let's get to work! </p>
          <div>
            <Link to="/=">View your routines</Link>
            <Link to="/">Checkout workout options</Link>
          </div>
        </>
      ) : (
        <>
          <p>
            Not a member? <Link to="/Register">Sign Up</Link> and get to work!
          </p>
        </>
      )}
    </div>
  );
};

export default Home;

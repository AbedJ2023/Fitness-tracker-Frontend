import React from "react";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <div className="home">
      <h1>Welcome to Fitness Tracker!</h1>
      {token ? (
        <>
          <p> Let's get to work! </p>
          <div id="inline-options">
            <Link to="/MyRoutines=" id="view-routine">
              View your routines
            </Link>
            <Link to="/Activities" id="view-all-routines">
              Checkout workout options
            </Link>
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

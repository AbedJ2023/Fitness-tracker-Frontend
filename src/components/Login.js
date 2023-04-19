import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Login.css";

import { loginUser } from "../api";

const LoginUser = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    window.localStorage.setItem("token", results.token);

    if (results.token) {
      setToken(results.token);

      navigate("/Activities");
    } else {
      setUsername("");
      setPassword("");
      swal(
        "Invalid login credentials!",
        "Please try again or create an account."
      );
    }
  };

  return (
    <main className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <h3>Welcome to Fitness Tracker</h3>

        <label className="login-label" htmlFor="username">
          Username
        </label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter Username"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />

        <label className="login-label" htmlFor="password">
          Password
        </label>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button className="btn btn-primary" type="submit">
          Log In
        </button>
        <div className="signup">
          <div>Don't have an account? </div>
          <Link to="/Register" className="signUpLink">
            SIGN UP HERE
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LoginUser;

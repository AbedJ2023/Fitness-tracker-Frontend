import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { registerUser } from "../api";

import "./Register.css";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async () => {
    if (password.length < 8) {
      swal({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters.",
      });
    } else {
      const results = await registerUser(username, password);
      window.localStorage.setItem("token", results.token);

      if (results.token) {
        setToken(results.token);

        swal("Congratulation!! account has been created");
        navigate("/Activities");
      } else {
        swal("User already exists!", "Please login instead.");
      }
    }
  };

  return (
    <main>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form
        className="signUp-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
          setUsername("");
          setPassword("");
        }}
      >
        <h3>Sign UP Please!</h3>

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
          Sign Up
        </button>
        <div className="signup">
          <div>Already have an account? </div>
          <Link to="/login" className="signUpLink">
            Please Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUp;

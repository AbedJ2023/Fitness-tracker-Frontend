import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Activities,
  Footer,
  Home,
  Login,
  NavBar,
  Register,
  Routines,
} from "./components";
import { getUserDetails } from "./api";

const App = () => {
  const [token, setToken] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);

  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    window.reload();
  }

  const getMe = async () => {
    const storedToken = window.localStorage.getItem("token");
    if (!token) {
      if (storedToken) {
        setToken(storedToken);
      }
      return;
    }
  };

  useEffect(() => {
    getMe();
  }, [token]);
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar logout={logout} token={token} />

        <Routes>
          <Route exact path="/" element={<Home token={token} />} />
          <Route
            path="/Activities"
            element={
              <Activities
                token={token}
                activities={activities}
                setActivities={setActivities}
                setRoutines={setRoutines}
              />
            }
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/Register" element={<Register setToken={setToken} />} />
          <Route
            path="/Routines"
            element={<Routines routines={routines} setRoutines={setRoutines} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

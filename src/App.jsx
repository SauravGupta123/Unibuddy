import React, { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavSlider from "./components/NavSlider/NavSlider";
import Results from "./components/Notices/Results";

function App() {
  const [user, setLoginUser] = useState({});

  return (
      <div className="flex ">
    <Router>
      {user._id && <NavSlider />}

      <Routes>
        <Route
         exact path="/"
          element={
            user._id ? (
              <Dashboard user={user} setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;

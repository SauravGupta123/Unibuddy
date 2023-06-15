import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavSlider from "./components/NavSlider/NavSlider";
import Results from "./components/Results/Results";
import Notices from "./components/Notices/Notices";
import Timetable from "./components/Timetable/Timetable";
import Resources from "./components/Resources/Resources";
import Control from "./components/AdminControls/control";

function App() {
  const [user, setLoginUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="flex">
      <Router>
        {user._id && <NavSlider isAdmin={user.isAdmin}/>}

        <Routes>
          <Route
            exact
            path="/"
            element={
              user._id ? (
                <Dashboard user={user} setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/Results" element={<Results />} />
          <Route path="/user/Notices" element={<Notices />} />
          <Route path="/user/TimeTable" element={<Timetable />} />
          <Route path="/user/Resources" element={<Resources />} />
          <Route path="/admin/Controls" element={<Control />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

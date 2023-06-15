import React, { useState } from "react";
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
          <Route path="/Notices" element={<Notices />} />
          <Route path="/TimeTable" element={<Timetable />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

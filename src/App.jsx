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
import Control from "./components/AdminControls/control";
import EditNotices from "./components/Notices/EditNotices";

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
          <Route path="/users/Results" element={<Results />} />
          <Route path="/users/Notices" element={<Notices />} />
          <Route path="/users/TimeTable" element={<Timetable />} />
          <Route path="/users/Resources" element={<Resources />} />
          <Route path="/admin/Controls" element={<Control />} />
          <Route path="/admin/Controls/notices/:id/edit" element={<EditNotices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

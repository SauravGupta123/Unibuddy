import React, { useState } from "react";
import './App.css'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={user._id ? <Dashboard user={user} setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

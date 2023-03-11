import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Mydashboard from "./components/Dashboard/pages/Mydashboard";
import Newsfeed from "./components/Dashboard/pages/Newsfeed";
import Profile from "./components/Dashboard/pages/Profile";
import Tools from "./components/Dashboard/pages/Tools";
import Weather from "./components/Dashboard/pages/Weather";
import Thoughts from "./components/Dashboard/pages/Thoughts";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mydashboard" element={< Mydashboard />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/thoughts" element={<Thoughts />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
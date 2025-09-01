import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequestMNP from "./pages/RequestMNP";

export default function App() {
  const [session, setSession] = useState(null);

  const handleLogin = (user) => setSession(user);
  const handleLogout = () => setSession(null);
  const handleRequestUpdate = (updatedUser) => setSession(updatedUser);

  return (
    <Router>
      <Navbar isLoggedIn={!!session} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard session={session} />} />
        <Route
          path="/request-mnp"
          element={
            <RequestMNP session={session} onRequestUpdate={handleRequestUpdate} />
          }
        />
      </Routes>
    </Router>
  );
}

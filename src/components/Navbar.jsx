import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLogout, isLoggedIn }) {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Login</Link>
      {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      {isLoggedIn && <Link to="/request-mnp">Request MNP</Link>}
      {isLoggedIn && (
        <button
          onClick={onLogout}
          className="ml-auto bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      )}
    </nav>
  );
}

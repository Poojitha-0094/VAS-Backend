import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../data/mockUsers";

export default function Login({ onLogin }) {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find((u) => u.mobile === mobile) || {
      mobile,
      operator: "Unknown",
    };
    onLogin(user);
    navigate("/dashboard");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

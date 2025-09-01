import React from "react";

export default function Dashboard({ session }) {
  if (!session) {
    return (
      <div className="p-4">
        <p>Please login first.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Dashboard</h2>
      <p>
        <strong>Mobile:</strong> {session.mobile}
      </p>
      <p>
        <strong>Current Operator:</strong> {session.operator}
      </p>
      <p>
        <strong>MNP Status:</strong> {session.status || "No Request"}
      </p>
    </div>
  );
}

import React, { useState } from "react";

export default function RequestMNP({ session, onRequestUpdate }) {
  const [newOperator, setNewOperator] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newOperator) return;
    onRequestUpdate({ ...session, status: "Pending", newOperator });
  };

  const handleApprove = () => {
    if (session.status === "Pending") {
      onRequestUpdate({
        ...session,
        status: "Completed",
        operator: session.newOperator,
      });
    }
  };

  if (!session) {
    return <p className="p-4">Please login first.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Request MNP</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>
          Select New Operator:
          <select
            value={newOperator}
            onChange={(e) => setNewOperator(e.target.value)}
            className="border p-2 ml-2"
          >
            <option value="">--Select--</option>
            <option value="Jio">Jio</option>
            <option value="Airtel">Airtel</option>
            <option value="VI">VI</option>
            <option value="BSNL">BSNL</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Submit Request
        </button>
      </form>

      {session.status === "Pending" && (
        <button
          onClick={handleApprove}
          className="mt-4 bg-purple-600 text-white px-3 py-1 rounded"
        >
          Approve Request (Admin)
        </button>
      )}
    </div>
  );
}

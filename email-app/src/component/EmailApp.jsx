import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmail,
  setNewEmail,
} from "../../../shared-state/src/Component/emailSlice";
const EmailApp = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails);
  const newEmail = useSelector((state) => state.email.newEmail);

  const handleAddEmail = () => {
    if (newEmail.trim() !== "") {
      dispatch(addEmail(newEmail));
      dispatch(setNewEmail(""));
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{ width: "400px", height: "auto" }} // Adjusted height to auto for better responsiveness
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Email Manager</h2>

        {/* Input Section */}
        <div className="input-group mb-4">
          <input
            type="email"
            className="form-control border-primary"
            value={newEmail}
            onChange={(e) => dispatch(setNewEmail(e.target.value))}
            placeholder="example@gmail.com"
            required
          />
          <button
            className="btn btn-primary px-4 fw-bold"
            onClick={handleAddEmail}
          >
            ➕ Add
          </button>
        </div>

        {/* Email List Section */}
        <div className="overflow-auto" style={{ maxHeight: "250px" }}>
          {emails.length > 0 ? (
            <ul className="list-group">
              {emails.map((email, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span className="fw-semibold">{email}</span>
                  <span className="badge bg-success rounded-pill">✔</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted text-center my-3">No emails added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailApp;

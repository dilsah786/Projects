import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function UpdatedPassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [updatePasswordConfirm, setUpdatePasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8001/users/updatePass", {
        email: username,
        password: password,
        updatePassword,
        updatePasswordConfirm,
      });

      console.log(response.data);

      if (response.data) {
        setSuccess(response.data.message);
        // Handle successful login (e.g., redirect, store token, etc.)
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>UpdatedPassword</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">updatedPassword:</label>
            <input
              type="password"
              id="password"
              value={updatePassword}
              onChange={(e) => setUpdatePassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">updatedPasswordConfirm:</label>
            <input
              type="password"
              id="password"
              value={updatePasswordConfirm}
              onChange={(e) => setUpdatePasswordConfirm(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Update Password</button>
        </form>
      </header>
    </div>
  );
}

export default UpdatedPassword;

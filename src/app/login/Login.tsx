'use client'
import React from 'react';

export default function LoginPage({ username, password, setUsername, setPassword, handleLogin }) {
  return (
    <div>
      <div className="form px-4 pt-5">
        <input
          type="text"
          name=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="Username"
        />
        <input
          type="password"
          name=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
        <button className="btn btn-dark btn-block" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

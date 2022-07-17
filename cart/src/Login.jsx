import React, { useState, useEffect } from "react";
import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin" />
      </span>
      {showLogin && (
        <div
          className="absolute  p-5 border-4 border-blue-800 w-full"
          style={{ width: 300 }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p2 round-md w-full"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p2 round-md w-full"
          />
        </div>
      )}

      <button onClick={() => login(username, password)} id="loginbtn">
        Login
      </button>
    </>
  );
}

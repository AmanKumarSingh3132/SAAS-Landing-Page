import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form className="login-form">
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        {isRegister && (
          <>
            <label>Confirm Password:</label>
            <input type="password" required />
          </>
        )}
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button
        className="toggle-btn"
        onClick={() => setIsRegister((r) => !r)}
        type="button"
      >
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); // Default to login

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };


  return (
    <div className="login-signup-container">
      {isLogin ? (
        <div>
          <Login />
          <p>
            Don't have an account?{' '}
            <span className="switch-link" onClick={toggleForm}>
              Sign up
            </span>
          </p>
        </div>
      ) : (
        <div>
          <Signup />
          <p>
            Already have an account?{' '}
            <span className="switch-link" onClick={toggleForm}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;

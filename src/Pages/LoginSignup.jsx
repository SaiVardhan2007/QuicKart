import React from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Signup</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-signup-agree">
          <input type="checkbox" />
          <p>I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
        </div>
        <div>
        <button>Continue</button>
        </div>
        <p className="loginsignup-login">Already have an account? <span>Login</span></p>
      </div>
    </div>
  )
}

export default LoginSignup

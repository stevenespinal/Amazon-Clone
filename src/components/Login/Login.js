import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img className="login__logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
           alt=""/>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="text"/>
          <label htmlFor="password">Password</label>
          <input type="password"/>
          <button>Sign In</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.</p>
        <button className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
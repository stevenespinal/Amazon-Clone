import React, {useState} from "react";
import "./Login.css";
// import firebase from "../../config/firebaseConfig";
import {auth} from "../../config/firebaseConfig";
import {useStateValue} from "../State/Provider";

const Login = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [, dispatch] = useStateValue();
  // console.log(user);
  const handleSignIn = async (e) => {
    e.preventDefault();
    const loggedInUser = await auth.signInWithEmailAndPassword(email, password);
    history.push("/");
    dispatch({
      type: 'SIGN_IN',
      user: loggedInUser
    });
  }

  const handleSignUp = async () => {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    history.push("/");
    dispatch({
      type: 'SIGN_UP',
      user: newUser
    })
  }

  return (
    <div className="login">
      <img className="login__logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
           alt=""/>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Sign In</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.</p>
        <button className="login__registerButton" onClick={handleSignUp}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
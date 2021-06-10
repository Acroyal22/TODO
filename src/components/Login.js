import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Login=(props) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const logInData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOkHjdJaKcAugUMhs-14s5iUooebQcSo4",
        config,
        logInData
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("idToken", res.data.idToken);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.isAuthenticated) {
      alert("you have succesfully login");
      props.histroy.push("/dashboard");
    }
  }, []);

  return (
    <div className="login-box">
      <div className="login-space">
        {redirect ? <Redirect to="/dashboard" /> : null}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;

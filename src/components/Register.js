import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Register = {
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOkHjdJaKcAugUMhs-14s5iUooebQcSo4",
        Register,
        config
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
      alert("you have succesfull register");
      props.histroy.push("/dashboard");
    }
  },[]);
  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="sign-up-form">
            {redirect ? <Redirect to="/dashboard" /> : null}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
      </div>
    </div>
  );
}

export default Register;

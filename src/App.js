import React, { useState, useEffect, Fragment } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/DashBoard";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todo from "./components/Todo/Todo";
import { NavBar } from "./components/NavBar";

const theme = createMuiTheme();

function App(props) {
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      setToken(idToken);
      setIsAuth(true);
    }
  }, []);

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={HomePage}
              isAuthenticated={isAuth}
              {...props}
            />
            <Route
              path="/login"
              component={Login}
              render={(props) => <Login isAuthenticated={isAuth} {...props} />}
            />
            <Route
              path="/register"
              component={Register}
              render={(props) => (
                <Register isAuthenticated={isAuth} {...props} />
              )}
            />
            <Route
              path="/dashboard"
              component={Dashboard}
              render={(props) => (
                <Dashboard isAuthenticated={isAuth} {...props} />
              )}
            />
            <Route
              path="/todo"
              component={Todo}
              render={(props) => <Todo isAuthenticated={isAuth} {...props} />}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;

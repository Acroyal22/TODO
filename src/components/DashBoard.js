import React from "react";
import { Redirect } from "react-router-dom";

function DashBoard(props) {
  return props.isAuthenticated ? (
    <h3>Welcome to my dashboard, have a great day</h3>
  ) : (
    <Redirect to="/login" />
  );
}

export default DashBoard;

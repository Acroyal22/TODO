import React from "react";
import TodoItem from "./TodoItem";
import firebase from "../../firebase";

const Todo = (props) => {
  if (!firebase.getCurrentUsername()) {
    //  not logged in
    alert("Please login first");
    props.history.replace("/login");
    return null;
  }

  return (
    <div>
      <form>
        <div className="forms-group margin-bottom-lg">
          <input
            type="text"
            className="form-control"
            placeholder="enter your todo"
          />
        </div>

        <br />
        <button
          type="submit"
          className="btn btn-primary btn-block margin-bottom-md"
        >
          Create Todo
        </button>
      </form>
      <br />
      <br />
      <div className="row justify-content-center margin-top-sm">
        <div className="col-md-12"></div>

        <TodoItem />
      </div>
    </div>
  );
};

export default Todo;

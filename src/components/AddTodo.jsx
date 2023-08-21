import React, { useReducer, useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./AddTodo.module.css";

const stateReducer = (prevState, action) => {
  if (action.type === "USER_STATE") {
    return {
      title: action.val,
      date: prevState.date,
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      date: action.val,
      title: prevState.title,
    };
  }

  return {
    title: "",
    date: "",
  };
};

const AddTodo = (props) => {
  const [todo, dispath] = useReducer(stateReducer, {
    title: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    dispath({ type: "USER_STATE", val: e.target.value });
  };
  const dateChangeHandler = (e) => {
    dispath({ type: "USER_INPUT", val: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSave(todo.title, todo.date);

    // setDate('')
    // setName('')
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <input
          value={todo.title}
          type="text"
          placeholder="User name"
          onChange={titleChangeHandler}
        />
        <input
          value={todo.date}
          type="date"
          placeholder="date"
          onChange={dateChangeHandler}
        />

        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddTodo;

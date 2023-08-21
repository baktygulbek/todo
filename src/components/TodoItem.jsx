import React, { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {

  const deleteHandler = (e) => {
    props.setTodos(props.todos.filter((el) => el.id !== e.target.id));
  };

  const checkboxChange = (e) => {
    props.setTodos(
      props.todos.map((el) => {
        if (el.id === e.target.id) {
          el.complated = !el.complated
        }
        return el
      })
    
    )
  }
  


  return (
    <Card className={classes.users}>
      <ul>
        <li className={props.complated ? classes.done : ''}>
          <h4>{props.name} </h4>
          <h4>{props.date}</h4>
          <input id={props.id} type="checkbox" onChange={checkboxChange} />
          <Button onClick={deleteHandler} id={props.id}>
            Delete
          </Button>
        </li>
      </ul>
    </Card>
  );
};

export default TodoItem;

import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div>
   {props.todos.map((el)=>{
        return(
            <TodoItem 
            complated={el.complated}
            setTodos={props.setTodos}
            todos={props.todos}
            key={el.id}
            name={el.name}
            date={el.date}
            id={el.id}
             />
        )
    })}
        </div>
  )
}

export default TodoList
import { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    let localData = JSON.parse(localStorage.getItem('todo'))
    setTodos(localData ? [...localData] : [])
  
  },[])

 useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))     
    },[todos])
  const saveTodo = (title, date) => {
    setTodos([
      ...todos,
      { title, date, complated: false, id: Math.random().toString() },
    ]);
  };

  return (
    <div className="App">
      <AddTodo onSave={saveTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

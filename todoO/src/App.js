
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  
  const[todos,setTodos]=useState([])

  const saveTodo= (name,date) =>{
    
      setTodos([
        ...todos, {name,date,complated:false, id: Math.random().toString()}
      ])
      
        }

       
  

  return (
    <div className="App">
    <AddTodo onSave={saveTodo} />
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

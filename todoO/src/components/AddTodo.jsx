import React, { useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import classes from './AddTodo.module.css'

const AddTodo = (props) => {
const [name,setName]=useState('')
const [date,setDate]=useState('')



const nameChangeHandler=(e)=>{
    setName(e.target.value)
}
const dateChangeHandler=(e)=>{
    setDate(e.target.value)
}


 const submitHandler=(e)=>{
e.preventDefault()
console.log(name);
console.log(date);

props.onSave(name, date)
setDate('')
setName('')

 }

  return (
    <Card  className={classes.input}>
    <form onSubmit={submitHandler}>
<input value={name} type='text' placeholder='User name' onChange={nameChangeHandler} />
<input value={date} type="date" placeholder='date'  onChange={dateChangeHandler} />

<Button type="submit" >Add</Button>

    </form>
    </Card>
  )
}

export default AddTodo
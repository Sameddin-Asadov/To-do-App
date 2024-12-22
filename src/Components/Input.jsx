import React, { useState } from 'react'
import '.././App.css'
function Input({onCreateTodos}) {
const [newTodo,setNewTodo] = useState('')

const clearInput = ()=>{
  setNewTodo("")
}
const giveTodo = ()=>{
  const users ={
    id: Math.floor(Math.random() * 9999999),
   content:newTodo
  }



  onCreateTodos(users)
  clearInput()


}

  return (
    
    
    <div className='todo-input same-props'>
        <input value={newTodo} onChange={(e)=>{
          setNewTodo(e.target.value)
        }} className='input-area ' type="text"  placeholder='Bir todo elave edin '/>
        <button onClick={giveTodo} className='todo-button '>Todo elave edin</button>
      </div>
    
    
  )
}

export default Input

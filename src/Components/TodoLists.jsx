import React from 'react'
import TodoList from './TodoList'
import '../App.css'

function TodoLists({todos, deletItem}) {
  return (
    
    <div >
      {todos && todos.map((todo)=>(
        <TodoList key={todo.id} todo = {todo} deletItem={deletItem}/>
      ))}



      
    </div>
  )
}

export default TodoLists

import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import TodoLists from './Components/TodoLists'

function App() {
     const [todos, setTodos]= useState([]);


     const CreateList = (newTodo)=>{
         setTodos([...todos,newTodo])

     }

     const removeItem = (userId)=>{
setTodos([...todos.filter((todo) =>(
  todo.id !== userId
))])
     }


  return (
    <div>
   <div className=' parent same-props'>
    <div className='components same-props'>
    <Input onCreateTodos = {CreateList} />
    <TodoLists todos = {todos} deletItem = {removeItem}/>
    </div>
    </div>
   </div>
  )
}

export default App

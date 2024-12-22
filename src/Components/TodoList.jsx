import React, { useState } from 'react'
import '../App.css'
import { FaPen } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

function TodoList({todo, deletItem}) {
  const {content,id} = todo
  const itemdel= ()=>{
    deletItem(id)
  }
  const [changeIcon, setChangeicon]= useState(false)
const [newTodo, setNewTodo] = useState(content)

  return (
    <div>
    <div className='todos  same-props'>
    { changeIcon ? }
   <div></div>
  
         { changeIcon ?<FaCheck />:  <FaPen onClick={()=> setChangeicon(true)} />
          }
           <CiCircleRemove  onClick={itemdel}/>
      

    </div></div>
  )
}

export default TodoList

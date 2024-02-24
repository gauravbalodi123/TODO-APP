import React from 'react'
import './Todo.css'
import { FaTrashAlt } from 'react-icons/fa'

const Todo = (props) => {


  const deleteTodoHandler = (id) => {
    props.deleteTodo(id);
    console.log(id)
  }

  const inputChangeHandler = (id)=>{
    props.checkTodo(id);
  }


  return (
    <li className={`${props.checked ? 'todo checked' : 'todo' }`}>

      <input onChange={()=>inputChangeHandler(props.id)} type='checkbox' defaultChecked= {props.checked} />
      <span>{props.todo}</span>
      <span onClick={() => deleteTodoHandler(props.id)} ><FaTrashAlt /> </span>

    </li>
  )
}

export default Todo
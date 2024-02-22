import React,{useState} from 'react'
import './Form.css'

const Form = (props) => {

  const [input , setInput] = useState('');

  const inputChangeHandler = (e)=>{
    setInput(e.target.value)
  }

  const formSubmitHandler =(e)=>{
    e.preventDefault();
    // console.log(input);
    const newTodo={
      id : props.todos.length,
      todo : input
    }

    props.addTodo(newTodo);
    setInput('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type='text' placeholder='Add your todos' value={input} />

    </form>
  )
}

export default Form
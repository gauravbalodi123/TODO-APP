import React, { useState } from 'react'
import './Form.css'
import { v4 as uuid } from 'uuid';


const Form = (props) => {

  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    setInput(e.target.value)
    if(input.trim().length>0){
      setIsValid(true);
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(input);

    if(input.trim().length===0){
      setIsValid(false);
      return;
    }

    const newTodo = {
      id: uuid(),
      todo: input,
      checked:false
    }

    props.addTodo(newTodo);
    setInput('')
  }

  return (
    <form className='input-form' onSubmit={formSubmitHandler}>
      <input style={{border: `${!isValid ? '5px solid red':' 5px solid green'}`}} onChange={inputChangeHandler} type='text' placeholder='Add your todos' value={input} />

    </form>
  )
}

export default Form
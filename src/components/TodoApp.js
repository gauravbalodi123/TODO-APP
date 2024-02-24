import React , {useState,useEffect} from 'react'
import TodoList from './TodoList'
import Form from './Form'
// import { v4 as uuid } from 'uuid';

const TodoApp = () => {



  // yaha se dummy_todos mein todos ki ek normal array milegi.
  const DUMMY_TODOS = JSON.parse( window.localStorage.getItem('todos') || "[]");
  // console.log(todos);

  // const DUMMY_TODOS = [
  //   {
  //     id: uuid(),
  //     todo: "Go to Shopping",
  //     checked:true
  //   },
  //   {
  //     id: uuid(),
  //     todo: "Buy Groceries",
  //     checked:false
  //   },
  //   {
  //     id: uuid(),
  //     todo: "Watch Movies",
  //     checked:true
  //   },
  //   {
  //     id: uuid(),
  //     todo: "Learn React",
  //     checked:false
  //   }
  // ];


  //todos is the current or previous state
  const [todos, setTodos] = useState(DUMMY_TODOS);


  // we are getting the new todo from forms so pass it their as a prop
  const addTodo = (todo)=>{
    // todos are the dummy crated todos
    // todo is the 
    setTodos([...todos , todo]);

  }

  useEffect(()=>{
    // console.log("use effect hook");
    window.localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  // console.log('inside todoapp component');
  // console.log(todos);




  const deleteTodo = (id)=>{
    // const newTodo = todos.filter((todo)=>todo.id !== id);
    // setTodos(newTodo);

    setTodos((prevState)=>{
      return prevState.filter((todo)=>todo.id !== id);
    });

  }


  const checkTodo = (id)=>{
    // agar ids match kar gayi to {checked: !item.checked } obj return hoga
    // ...item to bas spread karne ko hai
    setTodos((prevState) => {
      return prevState.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  })
  }
    
  

  return (
    <div style={{width:'360px',margin:'auto'}}>
      <h1 style={{textAlign:"center"}} >TODO-APP</h1>
      <Form addTodo={addTodo} todos = {todos} />
      <TodoList todos={todos} deleteTodo= {deleteTodo} checkTodo={checkTodo} />
    </div>  
  )
}

export default TodoApp
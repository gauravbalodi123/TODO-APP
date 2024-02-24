import React from 'react'
import Todo from './Todo'
import './Todolist.css'

const TodoList = (props) => {

  const allTodos = props.todos.map((item) => {
    return <Todo key={item.id}
      id={item.id}
      todo={item.todo}
      checked={item.checked}
      deleteTodo={props.deleteTodo}
      checkTodo={props.checkTodo}
    />
  })


  return (
    <section>
      <ul className="todo-list">
        {allTodos}
      </ul>
    </section>
  )
}

export default TodoList;
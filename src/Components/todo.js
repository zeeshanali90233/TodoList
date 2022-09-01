import React from 'react'
import TodoItem from './todoItemComp'
function Todos(props) {
  let todoStyle={
    minHeight: "100vh"
  }
  return (
    <div className="container my-2" style={todoStyle}>
        <h1 className=''>Todo List</h1>
        
        {props.todos.length!==0?props.todos.map((todo)=>{
            return <TodoItem todo={todo} deleteTodo={props.deleteTodo}/>
        }):"No Todo Task"}
        <br />
        
    </div>
  )
}

export default Todos
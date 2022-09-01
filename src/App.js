import Todos from './Components/todo';
import Footer from './Components/footer';
import Header from './Components/header';
import { useState,useEffect } from 'react';
import { About } from './Components/About';
import { AddTodo } from './Components/AddTodo';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import React from 'react';
import './App.css';

function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('todos'));
  }
  const deleteTodo=(todo)=>{
    setTodos(todos.filter((todoitem)=>{return todo!==todoitem }))
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    let newTodos=[...todos];
    let sno;
    (todos.length===0)?sno=0:sno=todos[todos.length-1].sno+1;
    newTodos.push({sno:sno,title:title,desc:desc});
    setTodos(newTodos);

    
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);


  return (

    <>
      <div className="container-fluid">
    <Router>
        <Header title="My Todos List" searchBar={true}/>
      <Routes>
        <Route  exact path="/about" element={<About/>} />
        <Route exact path="/" element={<><AddTodo addTodo={addTodo}/>
                {/* Todos */}
          <Todos todos={todos} deleteTodo={deleteTodo} addTodo={addTodo}/>
          </>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
      
    </>
  );
}

export default App;

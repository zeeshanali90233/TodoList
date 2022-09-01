import React from 'react'
import { useState } from 'react'


export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    let submit=(e)=>{
        e.preventDefault(); //To prevent from reloading(page)
        if(!title && !desc){alert("Title and Description can't be empty");}
        else if(!title){
            alert("Title can't be empty");
        }
        else if(!desc){ alert("Description can't be empty");}
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Todo Title</label>
    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Todo Title"></input>
  </div>
  <div className="form-group">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}placeholder="Enter Todo Description"></input>
  </div>
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
    </div>
  )
}

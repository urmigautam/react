import React, { useState } from "react";

export default function AddTodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("title and desc cant be null");
      }else{
        props.addTodos(title,desc);
  
        setTitle("");
        setDesc("");
      }
        
    }
  return (
    <div className="container my-3">
     <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
           Title
          </label>
          <input
           value={title}
           onChange={(e)=>{setTitle(e.target.value)}}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
           Description
          </label>
          <input
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            type="text"
            className="form-control"
            id="desc"
          />
        </div>
      
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

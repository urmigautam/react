import React from 'react'
import PropTypes from 'prop-types'
import TodoItems from './TodoItems'

const Todos = (props) => {
  return (
    <div className='container'>
      <h4 className='text-center my-3'>Todos List</h4>
      {props.todos.length === 0 ? "no todos to display":props.todos.map((todo)=>{
       return  <TodoItems  todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })} 
      
     
    </div>
  )
}

export default Todos

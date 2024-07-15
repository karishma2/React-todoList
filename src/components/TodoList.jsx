import React from 'react'
import TodoCard from './TodoCard'

export default function (props) {
   const {todos, handleDeleteTodo, handleEditTodo} = props
  return (
  <ul className='main'>
    {todos.map((todo, todoIndex)=>{
        
        return (<TodoCard index = {todoIndex} handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo}>
            <p>{todo}</p>
        </TodoCard>)
        
    })}
  </ul>
  )
}

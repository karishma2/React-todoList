import { useState } from "react"

export default function TodoInput(props){
    const {addTodo, todoValue, setTodoValue} = props
    
    return (
       <header>
        <input placeholder="Enter todo....." value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}}></input>
        <button onClick={()=>{addTodo(todoValue)}}>Add</button>
       </header>
    )
}
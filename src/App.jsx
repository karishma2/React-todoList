import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState(['drink more water',
    'eat more fruits'])
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodoValue('')
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localtodos = localStorage.getItem('todos')
    if (!localtodos) {
      return
    }
    localtodos = JSON.parse(localtodos).todos
    setTodos(localtodos)
  }

    , [])
  return (
    <>
      <TodoInput addTodo={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App

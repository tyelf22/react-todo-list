import React, {useState} from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about react',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const deletedTodos = [...todos]
    deletedTodos.splice(index, 1)
    setTodos(deletedTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App

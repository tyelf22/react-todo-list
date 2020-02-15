import React, {useState} from 'react'

export default function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="add new todo item" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}
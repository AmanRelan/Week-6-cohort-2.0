import React, { useEffect, useState } from 'react'
import Todo from './Todo'

// Poll from server after every 2s
const TodosFromServer = () => {
  const [todos, setTodos] = useState([])

  useEffect(function () {
    setInterval(() => {
      fetch('https://sum-server.100xdevs.com/todos')
        .then(async function (res) {
          const json = await res.json()
          setTodos(json.todos)
        })
        .catch(function (error) {
          console.error(error)
        })
    }, 2000);
  }, [])
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  )
}

export default TodosFromServer

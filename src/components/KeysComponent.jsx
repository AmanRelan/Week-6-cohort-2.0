import { useState } from 'react'
import React, { Fragment } from 'react'
import Todo from './Todo'

function KeysComponent() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Go to gym',
      description: 'Need to hit the gym from 7-9PM',
    },
    {
      id: 2,
      title: 'Go to Clas',
      description: 'Need to go to the class from 4-7 PM',
    },
    {
      id: 3,
      title: 'Eat foor',
      description: 'Need to eat food from 2-4 PM',
    },
  ])
  const addATodo = () => {
    setTodos([
      ...todos,
      {
        id: 4,
        title: Math.random(),
        description: Math.random(),
      },
    ])
  }
  return (
    <>
      <button onClick={addATodo}> Add a Todo </button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}
export default KeysComponent
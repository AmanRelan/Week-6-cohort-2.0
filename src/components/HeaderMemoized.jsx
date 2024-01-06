import React, { useState, memo } from 'react'
import Header from './Header'

const HeaderMemoized = memo(function () {
  const [firstTitle, setFirstTitle] = useState('my name is harkirat')
  function changeTitle() {
    setFirstTitle('My name is ' + Math.random())
  }
  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
    </div>
  )
})

export default HeaderMemoized

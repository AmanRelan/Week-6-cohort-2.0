import { useState } from "react"
import Header from "./Header"

export default function HeaderWithButton() {
  const [title, setTitle] = useState('First Title')
  const handleTitleChange = () => {
    const randomNumber = Math.random() * 100
    setTitle(`The new title is :- ${randomNumber}`)
  }
  return (
    <>
      <button onClick={handleTitleChange}>
        Click to change the title of the first Header
      </button>
      <Header title={title} />
    </>
  )
}

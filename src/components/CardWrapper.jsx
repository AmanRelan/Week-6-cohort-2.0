import React from 'react'

const CardWrapper = ({children}) => {
  return (
    <>
      <div style={{ border: '2px solid black' }}>{children}</div>
    </>
  )
}

export default CardWrapper
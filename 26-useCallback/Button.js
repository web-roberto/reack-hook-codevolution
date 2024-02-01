import React from 'react'

const Button = ({handleClick,children}) => {
  console.log('Rendeing button-',children)

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button
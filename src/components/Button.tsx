import React from 'react'

interface ButtonProps {
  onClick: () => void
  label: string
}

const Button = ({onClick, label}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className=''
    >
      {label}
    </button>
  )
}

export default Button 
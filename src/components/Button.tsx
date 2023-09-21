import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button = ({onClick, label}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='bg-gradient-to-r from-pink-500 via-purple-500 via-70% to-indigo-500 px-6 py-2 text-white rounded-sm capitalize'
    >
      {label}
    </button>
  )
}

export default Button 
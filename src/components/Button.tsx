import React from 'react'

interface ButtonProps {
  label: string
  outline?: boolean
  disabled?: boolean
  onClick?: () => void
  type: 'button' | 'submit'
}

const Button = ({onClick, label, type, outline, disabled}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-gradient-to-r from-pink-500 via-purple-500 via-70% to-indigo-500 px-8 py-2 text-white rounded-sm capitalize'
    >
      {label}
    </button>
  )
}

export default Button 
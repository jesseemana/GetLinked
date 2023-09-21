import React from 'react'

type InputProps = {
  id: string
  type: 'text'
  error?: string
  placeholder: string
}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete='off'
        className='py-1 md:py-2 px-3 text-sm text-gray-200 border border-gray-200 rounded-md bg-transparent'
      />
      {props.error && <span className='text-red-600 text-sm'>{props.error}</span>}
    </>
  )
}

export default Input   
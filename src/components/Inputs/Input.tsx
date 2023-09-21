import React from 'react'

type InputProps = {
  id: string
  type: 'text'
  label?: string
  error?: string
  htmlFor?: string
  placeholder: string
}

const Input = (props: InputProps) => {
  return (
    <>
      <label 
        htmlFor={props.htmlFor} 
        className='text-sm md:text-[15px] capitalize text-gray-200'
      >
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete='off'
        className='py-1 md:py-3 px-3 text-sm text-gray-200 border border-gray-700 rounded-md bg-transparent w-[300px] outline-none'
      />
      {props.error && <span className='text-red-600 text-sm'>{props.error}</span>}
    </>
  )
}

export default Input   
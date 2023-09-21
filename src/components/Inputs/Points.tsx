import React from 'react'

const Points = ({span, text}: { text: string, span: string }) => {
  return (
    <p> <span className='text-span-color text-lg'>{span}: </span> {text}</p>
  )
}

export default Points  
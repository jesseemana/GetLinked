import React from 'react'
import Input from './Input'

const RegInputFields2 = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 items-start'>
      <div className='flex flex-col gap-3 items-start'>
        <Input 
          id='email' 
          type='text' 
          htmlFor='email'
          label={`email`}
          placeholder='Enter your email address' 
        />
      </div>
      <div className='flex flex-col gap-3 items-start'>
        <Input 
          id='project' 
          type='text' 
          htmlFor='project'
          label={`project topic`}
          placeholder='What is your group project topic' 
        />
      </div>
    </div>
  )
}

export default RegInputFields2 
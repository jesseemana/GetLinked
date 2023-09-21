import React from 'react'
import Input from './Input'

const RegInputFields1 = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 items-start'>
      <div className='flex flex-col gap-3 items-start'>
        <Input 
          id='team' 
          type='text' 
          htmlFor='team'
          label={`Team's Name`}
          placeholder='Enter the name of your group' 
        />
      </div>
      <div className='flex flex-col gap-3 items-start'>
        <Input 
          id='phone'
          type='text' 
          htmlFor='phone'
          label={`phone`} 
          placeholder='Enter your phone number' 
        />
      </div>
    </div>
  )
}

export default RegInputFields1
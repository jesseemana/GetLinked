import React from 'react'
import Button from '../Button'
import RegInputFields1 from './RegInputFields1'
import RegInputFields2 from './RegInputFields2'

interface FormProps {
  submitting: boolean
  onSubmit: () => void
}

const RegisterForm = ({onSubmit, submitting}: FormProps) => {
  const handleSubmit = () => { console.log('Form Submitted') }

  return (
    <form onSubmit={onSubmit} className='text-white flex flex-col gap-4'>
      <h1 className='capitalize text-2xl text-text-color font-bold'>register</h1>
      <p className='text-gray-200'>Be part of this movement.............</p>
      <h1 className='text-3xl uppercase font-semibold'>create your account</h1>
      
      <RegInputFields1 />
      
      <RegInputFields2 />

      <div className='flex justify-between'>
        <div className='flex flex-col gap-3'>
          <label 
            htmlFor='category' 
            className='text-sm md:text-[15px] capitalize text-gray-200'
          >
            select your category
          </label>
          <select 
            id='category' 
            placeholder='select your catgegory' 
            className='bg-transparent border border-gray-700 rounded-md p-2 w-[300px] text-gray-500 outline-none'
          >
            <option>Select your category</option>
            <option value='category 1'>Category 1</option>
            <option value='category 2'>Category 2</option>
            <option value='category 3'>Category 3</option>
            <option value='category 4'>Category 4</option>
          </select>
        </div>
      
        <div className='flex flex-col gap-3'>
          <label 
            htmlFor='category' 
            className='text-sm md:text-[15px] capitalize text-gray-200'
          >
            group size
          </label>
          <select 
            id='category' 
            placeholder='select' 
            className='bg-transparent border border-gray-700 rounded-md p-2 w-[300px] text-gray-500 outline-none'
          >
            <option>Select</option>
            <option value='size 1'>Size 1</option>
            <option value='size 2'>Size 2</option>
            <option value='size 3'>Size 3</option>
            <option value='size 4'>Size 4</option>
          </select>
        </div>
      </div>

      <p className='text-text-color'>Please review your registration details before submitting</p>

      <p className='gap-3 flex'>
        <input 
          type='checkbox' 
          className='bg-transparent' 
        /> 
        <span>I agreed with the event terms and conditions and privay policy</span>
      </p>
      
      <Button 
        type='submit' 
        label='register now' 
        disabled={submitting}
      />
    </form>
  )
}

export default RegisterForm   
import React from 'react'
import Input from './Input'
import Button from '../Button'

const ContactForm = () => {
  const handleSubmit = () => { console.log('Form Submitted') }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[630px] border px-[70px] py-10 rounded-md'>
      <p className='text-text-color font-semibold'>
        Questions or need assistance? <br /> 
        Let us know about it!
      </p>
      <Input 
        id='full name' 
        type='text' 
        placeholder='Full Name' 
      />
      <Input 
        id='email' 
        type='text' 
        placeholder='Email' 
      />
      <textarea 
        id='message'
        rows={10} 
        placeholder='Message'
        className='py-1 px-3 resize-none bg-transparent border border-gray-200 rounded-md'
      />
      <div className='grid place-items-center'>
        <Button 
          type='submit' 
          label='submit' 
        />
      </div>
    </form>
  )
}

export default ContactForm  
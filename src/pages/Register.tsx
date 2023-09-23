import React, { useState } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import RegisterForm, { RegisterFields } from '../components/Forms/RegisterForm'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const Register = () => {
  useDocumentTitle('Register')
  
  const [submitting, setSubmitting] = useState(false)

  const submit = async (data: RegisterFields) => {
    console.log(data)
    // const responess = axios.post('/apiroute', 
    // JSON.stringify({

    // }), 
    // {
    //   headers: {'Content-Type': 'application/json'},
    //   withCredentials: true
    // })
  }

  return (
    <Container>
      <div className='flex flex-col lg:flex-row items-center justify-around py-10'>
        <img 
          src='./designer.png' 
          alt='designer showing thumbs up' 
          className='h-[560px]'
        />
        <RegisterForm
          onSubmit={submit}
          submitting={submitting}
        />
      </div>
    </Container>
  )
}

export default Register 
import React, { useState } from 'react'
import Container from '../components/Container'
import RegisterForm from '../components/Forms/RegisterForm'

const Register = () => {
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = () => {}

  return (
    <Container>
      <div className='flex items-center h-[79vh] justify-around'>
        <img 
          src='./designer.png' 
          alt='designer showing thumbs up' 
          className='h-[560px]'
        />
        <div>
          <RegisterForm
            onSubmit={onSubmit}
            submitting={submitting}
          />
        </div>
      </div>
    </Container>
  )
}

export default Register 
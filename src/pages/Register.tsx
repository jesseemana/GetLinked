import { useState } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import RegisterForm, { RegisterFields } from '../components/Forms/RegisterForm'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const Register = () => {
  useDocumentTitle('Register')
  
  const [submitting, setSubmitting] = useState(false)

  const submit = async (data: RegisterFields) => {
    setSubmitting(true)
    try {
      const response = await axios.post('https://backend.getlinked.ai/hackathon/registration', 
      JSON.stringify({
        "email": data.email ,
        "phone_number": data.phone,
        "team_name": data.team_name,
        "group_size": data.group_size,
        "project_topic": data.project_topic,
        "category": data.category,
        "privacy_poclicy_accepted": data.privacy_poclicy_accepted
      }), 
      {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Container>
      <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 justify-around py-10'>
        <img 
          src='./designer.png' 
          alt='designer showing thumbs up' 
          className='lg:h-[560px] h-[400px]'
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
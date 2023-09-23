import axios from 'axios'
import { useState } from 'react'
import Container from '../components/Container'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import ContactForm, { ContactFields } from '../components/Forms/ContactForm'

const Contact = () => {
  useDocumentTitle('Contact')
  
  const [submitting, setSubmitting] = useState(false)

  const submit = async(data: ContactFields) => {
    console.log(data)
  }

  return (
    <Container>
      <div className='text-gray-200 items-center flex flex-col-reverse lg:grid lg:grid-cols-2 px-2 justify-around gap-y-5'>
        <div className='flex flex-col gap-4 font-normal px-3 w-full'>
          <h1 className='text-text-color text-2xl font-bold'>Get in touch</h1>
          <p className='capitalize'>contact <br/> information</p>
          <p>27, Alara Street <br/>
            Yabba 100012 <br/>
            Lagos State
          </p>
          <p>Call Us: 07067981819 </p>
          <p>We are open from Monday - Friday <br/> 
            08:00am - 05:00pm
          </p>
          <p className='text-text-color text-xl font-semibold'>Share on</p>
          {/* SOCIAL ICONS */}
          <div className='flex items-center gap-4'>
            <img src='./insta.png' alt='social media icon' className='h-4'/>
            <img src='./x.png' alt='social media icon' className='h-4'/>
            <img src='./facebook.png' alt='social media icon' className='h-4'/>
            <img src='./linkedin.png' alt='social media icon' className='h-5'/>
          </div>
        </div>
        <ContactForm
          onSubmit={submit}
          submitting={submitting}
        />
      </div>
    </Container>
  )
}

export default Contact  
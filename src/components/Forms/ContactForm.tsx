import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { ContactSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '@/components/Input'
import Button from '@/components/Button'
import TextArea from '@/components/TextArea'

export type ContactFields = z.infer<typeof ContactSchema>

interface FormProps {
  submitting: boolean
  onSubmit: (data: ContactFields) => void
}

const ContactForm = ({onSubmit, submitting}: FormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFields>({
    resolver: zodResolver(ContactSchema)
  })

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className='flex flex-col gap-3 px-4 py-10 rounded-sm white-glassmorphism w-full'
    >
      <p className='text-text-color font-semibold'>
        Questions or need assistance? <br /> 
        Let us know about it!
      </p>
      
      <Input 
        id='full name' 
        type='text' 
        inputProps={register('full_name')}
        placeholder='Full Name' 
        error={errors.full_name?.message as string}
      />
      <Input 
        id='email' 
        type='text' 
        inputProps={register('email')}
        placeholder='Email' 
        error={errors.email?.message as string}
      />
      <TextArea
        id='message' 
        type='text' 
        inputProps={register('message')}
        placeholder='message' 
        error={errors.message?.message as string}
      />
      <div className='grid place-items-center'>
        <Button 
          type='submit' 
          label='submit' 
          disabled={submitting}
        />
      </div>
    </form>
  )
}

export default ContactForm  
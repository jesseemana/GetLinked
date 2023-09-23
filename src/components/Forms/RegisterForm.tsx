import { z } from 'zod'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '@/lib/schemas'
import { Checkbox } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'

export type RegisterFields = z.infer<typeof RegisterSchema>

interface FormProps {
  submitting: boolean
  onSubmit: (data: RegisterFields) => Promise<void>
}

const RegisterForm = ({ onSubmit, submitting }: FormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFields>({
    resolver: zodResolver(RegisterSchema)
  })

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className='text-white flex flex-col gap-4 py-10 px-4 white-glassmorphism'
    >
      <h1 className='capitalize text-2xl text-text-color font-bold'>register</h1>
      <p className='text-gray-200'>Be part of this movement.............</p>
      <h1 className='lg:text-3xl text-xl uppercase font-semibold'>create your account</h1>
      
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 items-start'>
        <div className='flex flex-col gap-3 min-w-full'>
          <Input 
            id='team' 
            type='text' 
            htmlFor='team'
            label={`Team's Name`}
            inputProps={register('team_name')}
            placeholder='Enter the name of your group' 
            error={errors.team_name?.message as string}
          />
        </div>
        <div className='flex flex-col gap-3 min-w-full'>
          <Input 
            id='phone'
            type='text' 
            htmlFor='phone'
            label={`phone`} 
            inputProps={register('phone')}
            placeholder='Enter your phone number' 
            error={errors.phone?.message as string}
          />
        </div>
      </div> 

      <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3 min-w-full'>
          <Input 
            id='email' 
            type='text' 
            htmlFor='email'
            label={`email`}
            inputProps={register('email')}
            placeholder='Enter your email address' 
            error={errors.email?.message as string}
          />
        </div>
        <div className='flex flex-col gap-3 min-w-full'>
          <Input 
            id='project' 
            type='text' 
            htmlFor='project'
            label={`project topic`}
            inputProps={register('project_topic')}
            placeholder='What is your group project topic' 
            error={errors.project_topic?.message as string}
          />
        </div>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 items-start'>
        <div className='flex flex-col gap-3 min-w-full'>
          <label htmlFor='category' className='text-sm md:text-[15px] capitalize text-gray-200'>category</label>
          <select 
            id="category" 
            {...register("category", { required: true })}
            className='border p-2 capitalize text-gray-500 w-full bg-transparent outline-none text-sm rounded-md border-gray-700'
          >
            <option value="category1">Froontend Developmnet</option>
            <option value="category2">Mobile Developmnet</option>
            <option value="category3">Game Developmnet</option>
            <option value="category4">Backend Developmnet</option>
          </select>
        </div>
      
        <div className='flex flex-col gap-3 min-w-full'>
          <label htmlFor='goals' className='text-sm md:text-[15px] capitalize text-gray-200'>Goal</label>
          <select 
            id="goals"
            {...register("group_size", { required: true })}
            className='border p-2 capitalize text-gray-500 bg-transparent outline-none text-sm rounded-md border-gray-700'
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
            <option value="4">6</option>
            <option value="4">7</option>
            <option value="4">8</option>
            <option value="4">9</option>
            <option value="4">10</option>
          </select>
        </div>
      </div>

      <p className='text-text-color'>Please review your registration details before submitting</p>

      <div className='flex items-center gap-2'>
        <input 
          type="checkbox" 
          className='flex items-center gap-2' 
          {...register('privacy_poclicy_accepted', { required: true })} 
        />
        <p>I agreed with the event terms and conditions and privay policy</p>
      </div>
      
      <Button 
        type='submit' 
        label='register now' 
        disabled={submitting}
      />
    </form>
  )
}

export default RegisterForm   
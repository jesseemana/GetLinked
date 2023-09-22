import React from 'react'
import Container from './Container'
import Button from './Button'
import { Link, useNavigate } from'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <div className='flex py-4 gap-[400px] items-center justify-betwee'>
        <h1 className='font-bold text-white text-3xl'>
          <Link to='/'>get<span className='text-text-color'>linked</span></Link>
        </h1>
        <div className='hidden lg:flex items-center gap-[400px]'>
          <div className='flex gap-7 text-white'>
            <Link to='/timeline'>Timeline</Link>
            <Link to='/overview'>Overview</Link>
            <Link to='/faqs'>FAQs</Link>
            <Link to='/contact' className='gradient-to-r from-pink-500 via-purple-500 via-70% to-indigo-500'>Contact</Link>
          </div>
          <Button 
            type='button'
            label='register' 
            onClick={() => navigate('/register')} 
          />
        </div>
      </div>
    </Container>
  )
}

export default Navbar   
import React from 'react'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Link, useNavigate } from'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <nav className='flex py-4 gap-[300px] items-center justify-around'>
        <h1 className='font-bold text-white text-2xl lg:text-3xl'>
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
      </nav>
    </Container>
  )
}

export default Navbar   
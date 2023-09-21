import React from 'react'
import Button from './Button'
import Content from './Content'
import { Link, useNavigate } from'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Content>
      <div className='flex border p-4'>
        <h1><Link to='/'>get<span>linked</span> </Link></h1>
        <div>
          <Link to='/home'>Timeline</Link>
          <Link to='/overview'>Overview</Link>
          <Link to='/faqs'>FAQs</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <Button 
          label='register' 
          onClick={() => navigate('/register')} 
        />
      </div>
    </Content>
  )
}

export default Navbar   
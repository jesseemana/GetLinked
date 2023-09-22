import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='bg-footer-background p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-evenly mr-10'>
          {/* GET LINKED */}
          <div className='text-gray-300 flex flex-col gap-2 w-1/3'>
            <h1 className='font-bold text-white text-3xl'>
              get<span className='text-text-color'>linked</span>
            </h1>
            <p>
              Getlinked Tech Hackathon is a technology innovation program 
              established by a group of organizations with the aim of showcasing 
              young and talented individuals in the field of technology.
            </p>
            <p className='mt-5'>Terms of Use <span className='border border-text-color mr-2'></span> Privacy Policy</p>
          </div>
          {/* END GET LINKED */}

          {/* USEFUL LINKS */}
          <div>
            <h1 className='text-text-color capitalize'>useful links</h1>
            <ul className='text-gray-300 flex flex-col gap-2'>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className='flex gap-3 mt-6'>
              <p className='text-text-color capitalize'>follow us</p>
              <div className='flex items-center gap-4'>
                <img src='./insta.png' alt='social media icon' className='h-4'/>
                <img src='./x.png' alt='social media icon' className='h-4'/>
                <img src='./facebook.png' alt='social media icon' className='h-4'/>
                <img src='./linkedin.png' alt='social media icon' className='h-5'/>
              </div>
            </div>
          </div>
          {/* END USEFUL LINKS */}

          {/* CONTACT US */}
          <div className='text-gray-200 flex flex-col gap-2'>
            <h1 className='text-text-color capitalize'>contact us</h1>
            <div className='flex gap-2 items-center'>
              <img src='./contact1.png' alt='contact icon' className='h-4' />
              <p>+234 6707653444</p>
            </div>
            <div className='flex gap-2'>
              <img src='./contact2.png' alt='contact icon' className='h-4' />
              <p>27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
            </div>
          </div>
          {/* END CONTACT US */}
        </div>
      </Container>
    </footer>
  )
}

export default Footer   
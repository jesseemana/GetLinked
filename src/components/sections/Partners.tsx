import React from 'react'
import Container from '@/components/Container'

const Partners = () => {
  return (
    <div className='py-10'>
      <Container>
        <div className='flex flex-col gap-10'>
          <div className='text-gray-300 text-center'>
            <h1 className='text-white text-2xl font-bold'>Partners and Sponsors</h1>
            <p>Getlinked Hackathon 1.0 is honored to have the following <br /> 
              major companies as its partners and sponsors
            </p>
          </div>
          <div className='grid place-items-center'>
            <div className='place-items-center grid md:grid-cols-3 gap-8 grid-cols-2 grid-rows-3 md:grid-rows-none'>
              <img src='./LibertyLogo.png' alt='company logo' className='h-10 md:h-20'/>
              <img src='./Libertywhite.png' alt='company logo' className='md:h-10 h-6'/>
              <img src='./WinwiseLogo.png' alt='company logo' className='h-10 md:h-20'/>
              <img src='./wisperlogo.png' alt='company logo' className='h-10 md:h-20'/>
              <img src='./Paybox.png' alt='company logo' className='md:h-10 h-6'/>
              <img src='./Vizual Plus.png' alt='company logo' className='md:h-10 h-6'/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Partners 
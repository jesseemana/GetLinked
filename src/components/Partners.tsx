import React from 'react'
import Container from './Container'

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
            <div className='border border-text-color rounded-md w-[800px] h-[400px] flex flex-col gap-4 items-center justify-center'>
              <div className='flex gap-20 items-center'>
                <img src='./LibertyLogo.png' alt='company logo' className='h-20 border-2 border-text-color'/>
                <img src='./Libertywhite.png' alt='company logo' className='h-10'/>
                <img src='./WinwiseLogo.png' alt='company logo' className='h-20'/>
              </div>
              <div className='flex gap-20 items-center'>
                <img src='./wisperlogo.png' alt='company logo' className='h-20'/>
                <img src='./Paybox.png' alt='company logo' className='h-10'/>
                <img src='./Vizual Plus.png' alt='company logo' className='h-10 w-[200px]'/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Partners 
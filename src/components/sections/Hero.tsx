import Button from '@/components/Button'
import Container from '@/components/Container'
import { useNavigate } from 'react-router'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <header className='border-t border-gray-500'>
      <Container>
        <h1 className='grid text-md md:text-2xl lg:text-3xl place-items-center text-white font-semibold italic lg:justify-end lg:tracking-wider relative lg:mr-[130px] mb-10 mt-3'>
          Igniting a Revolution in HR innovation
          <img 
            src='./Vector 4.png' 
            alt='a vector for decoration' 
            className='h-2 w-[100px] lg:w-[220px] md:w-[140px] absolute top top-6 right-12 lg:right-1 md:right-[200px] md:top-8' 
          />
        </h1>
        <div className='flex flex-col lg:flex-row lg:items-center justify-around gap-y-10'>
          {/* LEFT SIDE */}
          <div className='flex flex-col gap-7 lg:gap-10 relative text-center lg:text-start'>
            <div className='lg:py-1 pt-7 lg:w-[700px] relative'>
              <h1 className='text-white text-3xl md:text-6xl lg:text-[80px] font-bold font-serif leading-none'>
                getlinked Tech <br/> Hackathon <span className='text-text-color'>1.0</span>
                <div className='absolute flex lg:bottom-[0%] md:left-[630px] bottom-[3%] left-[480px]'>
                  <img 
                    src='./chain.png' 
                    alt='an svg icon' 
                    className='h-[40px] lg:h-[70px]' 
                  />
                  <img 
                    src='./boom.png' 
                    alt='an svg icon' 
                    className='bottom-1 lg:bottom-10 left-[40%] h-[40px] lg:h-[70px]'
                  />
                </div>
                <img 
                  src='./creative.png' 
                  alt='an svg icon' 
                  className='absolute bottom-[80%] right-[25%] lg:right-[20%] h-[40px] lg:h-[70px]'
                />
              </h1>
            </div>
            <p className='text-white text-[14px] md:text-2xl font-light'>
              Participate in getlinked tech Hackathon <br/> 
              2023 stand a chance to win a Big prize
            </p>
            <div>
              <Button 
                type='button'
                label='register' 
                onClick={() => navigate('/register')} 
              />
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className='bg-hero-image bg-cover bg-no-repeat object-fill -mb-3'>
            <img 
              src='./Image.png' 
              alt='glowing ball' 
              className='object-fill' 
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Hero 
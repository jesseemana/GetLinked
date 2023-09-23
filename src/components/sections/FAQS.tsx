import Questions from './Questions'
import Container from '@/components/Container'

const FAQS = () => {
  return (
    <section id='questions' className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col-reverse gap-10 lg:flex-row-reverse items-center justify-around'>
          <div className='lg:w-1/2 ml-20 relative'>
            <img 
              src='./casual.png' 
              alt='casual.png' 
              className='py-10'
            />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[170px]' />
            <img src='./query.png' alt='decorator icons' className='absolute top-[7%] left-[18%] h-12' />
            <img src='./query.png' alt='decorator icons' className='absolute bottom-[90%] left-[33%] h-20' />
            <img src='./query.png' alt='decorator icons' className='absolute top-[7%] left-[50%] h-12' />
          </div>
          <div className='text-gray-200 lg:w-1/2 p-7 relative flex flex-col gap-4 text-md md:text-xl'>
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[10%] right-[140px]' />
            <h1 className='text-white text-3xl font-bold mb-2'>Frequently Asked <br /> 
              <span className='text-text-color'>Questions</span>
            </h1>
            <p className='mb-10'>
              We got answers to the questions that you might
              want to ask about getlinked Hackathon 1.0
            </p>
            <Questions />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQS 
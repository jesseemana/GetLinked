import Questions from './Questions'
import Container from '@/components/Container'

const FAQS = () => {
  return (
    <section id='questions' className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col-reverse gap-10 lg:flex-row-reverse items-center justify-around'>
          <div className='lg:w-1/2 lg:ml-20 relative'>
            <img 
              src='./casual.png' 
              alt='casual.png' 
              className='py-10 h-[400px] lg:h-[500px]'
            />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[170px]' />
            <img src='./query.png' alt='decorator icons' className='absolute top-[7%] left-[18%] h-12' />
            <img src='./query.png' alt='decorator icons' className='absolute bottom-[90%] left-[33%] h-20' />
            <img src='./query.png' alt='decorator icons' className='absolute top-[7%] left-[50%] h-12' />
          </div>
          <div className='text-gray-200 lg:w-1/2 p-7 flex flex-col gap-4 text-md md:text-xl'>
            <h1 className='text-white text-2xl lg:text-3xl relative font-bold mb-2'>Frequently Asked <br /> 
              <span className='text-text-color'>Questions</span>
              <img src='./starpu.png' alt='decorator icons' className='absolute bottom-[94%] right-[220px]' />
            </h1>
            <p className='lg:mb-10 mb-4'>
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
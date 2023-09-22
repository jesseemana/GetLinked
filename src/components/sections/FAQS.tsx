import Questions from './Questions'
import Container from '../components/Container'

const FAQS = () => {
  return (
    <section id='questions' className='border-[0.3px] border-l-0 border-r-0 border-b-0 border-gray-500 p-10'>
      <Container>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-around'>
          <div className='lg:w-1/2 ml-20 relative'>
            <img 
              src='./casual.png' 
              alt='casual.png' 
              className='py-10'
            />
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[170px]' />
            <img src='./query.png' alt='decorator icons' className='absolute top-[40px] left-[100px] h-12' />
            <img src='./query.png' alt='decorator icons' className='absolute bottom-[650px] left-[200px] h-20' />
            <img src='./query.png' alt='decorator icons' className='absolute top-[40px] left-[320px] h-12' />
          </div>
          <div className='text-gray-300 lg:w-1/2 p-7 relative flex flex-col gap-4'>
            <img src='./starpu.png' alt='decorator icons' className='absolute top-[40px] right-[140px]' />
            <h1 className='text-white text-3xl font-bold'>Frequently Asked <br /> 
              <span className='text-text-color'>Questions</span>
            </h1>
            <p>We got answers to the questions that you might
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
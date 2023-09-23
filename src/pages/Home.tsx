import React from 'react'
import Hero from '@/components/sections/Hero'
import Overview from '@/components/sections/Overview'
import Guidelines from '@/components/sections/Guidelines'
import Criteria from '@/components/sections/Criteria'
import FAQS from '@/components/sections/FAQS'
import Footer from '@/components/sections/Footer'
import Partners from '@/components/sections/Partners'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const Home = () => {
  useDocumentTitle('GetLinked Hackathon - Home')

  return (
    <>
      <Hero />
      <Overview />
      <Guidelines />
      <Criteria />
      <FAQS />
      {/* <Partners /> */}
      <Footer />
    </>
  )
}

export default Home 
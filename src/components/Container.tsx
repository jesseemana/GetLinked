import React from 'react'

const Container = ({children}: { children: React.ReactNode }) => {
  return (
    <main className='max-w-full px-[3%] py-3'>
      {children}
    </main>
  )
}

export default Container 
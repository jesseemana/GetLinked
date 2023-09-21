import React from 'react'

const Container = ({children}: { children: React.ReactNode }) => {
  return (
    <div className='max-w-full px-[3%] py-3'>
      {children}
    </div>
  )
}

export default Container 
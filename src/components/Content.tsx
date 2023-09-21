import React from 'react'

const Content = ({children}: { children: React.ReactNode }) => {
  return (
    <div className='max-w-full px-[3%] py-3'>
      {children}
    </div>
  )
}

export default Content 
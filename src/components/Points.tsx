const Points = ({point, text}: { text: string, point: string }) => {
  return (
    <p className='text-sm md:text-lg'> 
      <span className='text-span-color'>{point}: </span> 
      {text}
    </p>
  )
}

export default Points  
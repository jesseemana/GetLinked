const Points = ({point, text}: { text: string, point: string }) => {
  return (
    <p className="text-sm md:text-md"> <span className='text-span-color'>{point}: </span> {text}</p>
  )
}

export default Points  
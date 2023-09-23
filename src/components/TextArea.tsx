type InputProps = {
  id: string
  type: 'text'
  label?: string
  error?: string
  htmlFor?: string
  placeholder: string
  inputProps?: unknown
}

const TextArea = (props: InputProps) => {
  return (
    <>
      <label 
        htmlFor={props.htmlFor} 
        className='text-sm md:text-[15px] capitalize text-gray-200'
      >
        {props.label}
      </label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        autoComplete='off'
        rows={10}
        {...(props.inputProps ?? {})}
        className='py-3 px-3 text-sm md:text-md resize-none text-gray-200 border border-gray-700 rounded-md bg-transparent  outline-none'
      />
      {props.error && <span className='text-red-600 text-sm'>{props.error}</span>}
    </>
  )
}

export default TextArea   
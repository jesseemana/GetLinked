import { useState, useEffect } from 'react'

const useDocumentTitle = (value: string) => {
  const [title, setTitle] = useState(value)

  useEffect(() => {
    document.title = title
  })

}
    
export default useDocumentTitle 
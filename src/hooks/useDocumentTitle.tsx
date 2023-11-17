import { useEffect } from 'react'

const useDocumentTitle = (name: string) => {
  useEffect(() => {
    document.title = name
  })
}

export default useDocumentTitle

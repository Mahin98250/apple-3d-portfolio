import { useEffect } from 'react'

export default function useScrollProgress() {
  useEffect(() => {
    const progress = document.createElement('div')

    progress.style.position = 'fixed'
    progress.style.top = '0'
    progress.style.left = '0'
    progress.style.height = '3px'
    progress.style.background = 'linear-gradient(90deg,#ffffff,#7dd3fc)'
    progress.style.zIndex = '9999'

    document.body.appendChild(progress)

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const width = (scrollTop / docHeight) * 100
      progress.style.width = width + '%'
    }

    window.addEventListener('scroll', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      progress.remove()
    }
  }, [])
}

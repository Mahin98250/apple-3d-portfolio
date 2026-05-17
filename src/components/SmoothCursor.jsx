import { useEffect } from 'react'

export default function SmoothCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')

    cursor.style.width = '18px'
    cursor.style.height = '18px'
    cursor.style.border = '1px solid rgba(255,255,255,0.4)'
    cursor.style.borderRadius = '999px'
    cursor.style.position = 'fixed'
    cursor.style.pointerEvents = 'none'
    cursor.style.backdropFilter = 'blur(8px)'
    cursor.style.zIndex = '9999'

    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.left = e.clientX - 9 + 'px'
      cursor.style.top = e.clientY - 9 + 'px'
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      cursor.remove()
    }
  }, [])

  return null
}

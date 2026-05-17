import { useRef } from 'react'

export default function MagneticButton({ children }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
  }

  const reset = () => {
    ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className='px-8 py-4 rounded-full bg-white text-black font-medium transition-transform duration-300 will-change-transform'
    >
      {children}
    </button>
  )
}

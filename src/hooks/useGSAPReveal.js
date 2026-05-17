import { useEffect } from 'react'
import gsap from 'gsap'

export default function useGSAPReveal(selector) {
  useEffect(() => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.12
      }
    )
  }, [selector])
}

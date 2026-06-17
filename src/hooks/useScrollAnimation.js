import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// animFn recebe o elemento DOM raiz e deve registrar ScrollTriggers nele.
// Retorna automaticamente cleanup de todos os ScrollTriggers criados na seção.
export default function useScrollAnimation(animFn) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => animFn(el), el)
    return () => ctx.revert()
  }, [])

  return ref
}

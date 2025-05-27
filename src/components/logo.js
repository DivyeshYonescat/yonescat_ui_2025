'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function YonescatLogo({type}) {
  const dotRef = useRef(null)
  const logoRef = useRef(null)
  const dotTextRef = useRef(null)
  const idleTimeout = useRef(null)

  const [isFixed, setIsFixed] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  if(type === 'interactive'){
    useEffect(() => {
      const dot = dotRef.current
      const logo = logoRef.current
      const dotText = dotTextRef.current
  
      const quickX = gsap.quickTo(dot, 'x', { duration: 0.3, ease: 'power3.out' })
      const quickY = gsap.quickTo(dot, 'y', { duration: 0.3, ease: 'power3.out' })
  
      const moveDot = (e) => {
        clearTimeout(idleTimeout.current)
  
        if (!isFixed) {
          const logoRect = logo.getBoundingClientRect()
          const originX = logoRect.right - 10
          const originY = logoRect.bottom - 10
          gsap.set(dot, { x: originX, y: originY, scale: 1 })
          setIsFixed(true)
        }
  
        quickX(e.clientX)
        quickY(e.clientY)
  
        // Only scale up if no text is active
        if (!dotText.textContent) {
          gsap.to(dot, {
            scale: 5,
            zIndex: 99999,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
  
        idleTimeout.current = setTimeout(() => {
          if (isClicking || dotText.textContent) return // ⛔ prevent return if clicking or text visible
  
          const logoRect = logo.getBoundingClientRect()
          const originX = logoRect.right - 10
          const originY = logoRect.bottom - 10
  
          gsap.to(dot, {
            x: originX,
            y: originY,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              if (!isClicking && !dotText.textContent) {
                setIsFixed(false)
              }
            },
          })
        }, 1000)
      }
  
      const handleClick = () => {
        const ripple = document.createElement('span')
        ripple.className = 'ripple'
        dot.appendChild(ripple)
  
        setIsClicking(true)
  
        gsap.fromTo(
          ripple,
          { scale: 0, opacity: 0.4 },
          {
            scale: 6,
            opacity: 0,
            duration: 0.6,
            ease: 'power1.out',
            onComplete: () => {
              ripple.remove()
              setIsClicking(false)
            },
          }
        )
      }
  
      // Dynamic cursor text behavior
      const textTargets = document.querySelectorAll('[data-cursor-text]')
      textTargets.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const text = el.getAttribute('data-cursor-text') || ''
          if (text) {
            dotText.textContent = text
            gsap.to(dot, { scale: 8, duration: 0.3, ease: 'power2.out' })
          }
        })
  
        el.addEventListener('mouseleave', () => {
          dotText.textContent = ''
          gsap.to(dot, { scale: 5, duration: 0.3, ease: 'power2.out' })
        })
      })
  
      const hoverTargets = document.querySelectorAll('a, img, .no-cursor')
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHidden(true))
        el.addEventListener('mouseleave', () => setIsHidden(false))
      })
  
      window.addEventListener('mousemove', moveDot)
      window.addEventListener('click', handleClick)
  
      return () => {
        window.removeEventListener('mousemove', moveDot)
        window.removeEventListener('click', handleClick)
        textTargets.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
        hoverTargets.forEach((el) => {
          el.removeEventListener('mouseenter', () => {})
          el.removeEventListener('mouseleave', () => {})
        })
      }
    }, [isFixed, isClicking])
  }


  return (
    <>
    {
      type === 'interactive' ? <div className="relative inline-block w-[170px] h-auto" ref={logoRef}>
      <Image src="/images/logo.webp" className='' priority={true} alt="Yonescat" width={256} height={48} />
      <div
        ref={dotRef}
        className={`cursorFollower ${isHidden ? 'opacity-0 scale-0' : ''}`}
        style={
          isFixed || isClicking
            ? { position: 'fixed', top: 0, left: 0 }
            : { position: 'absolute', bottom: '0', right: '0', transform: 'translate(0, 0)', }
        }
      >
        <span ref={dotTextRef} className="dot-text"></span>
      </div>
    </div> 
    :
      <Image src="/images/logo-main.webp"  priority={true} alt="Yonescat" width={256} height={48} />
    }
    
    </>
  )
}

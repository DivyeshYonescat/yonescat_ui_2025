'use client'
import { usePathname } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'
import { useEffect } from 'react'

export function PageTitleTracker({ title }) {
  const pathname = usePathname()
  
  useEffect(() => {
    const pageTitle = title || document.title
    
    sendGAEvent('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: pageTitle
    })
  }, [pathname, title])
  
  return null
}

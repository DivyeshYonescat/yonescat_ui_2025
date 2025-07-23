'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'
import { useEffect } from 'react'

export function AnalyticsProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '')
    const screenName = pathname? pathname.split('/').filter(Boolean)[0] || 'home': 'home';
    
    // Send page view with custom title
    sendGAEvent('event', 'page_view', {
      page_location: window.location.href,
      page_path: url,
      page_title: document.title
    })
    
    // Send screen view for app-like analytics
    sendGAEvent('event', 'screen_view', {
      app_name: 'NextJSWeb',
      screen_name: screenName
    })
    
  }, [pathname, searchParams])

  return null
}

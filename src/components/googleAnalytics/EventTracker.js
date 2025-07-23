// components/EventTracker.tsx
'use client'
import { sendGAEvent } from '@next/third-parties/google'

export function EventTracker() {
  const trackPurchase = (value, currency = 'USD') => {
    sendGAEvent('event', 'purchase_completed', {
      value,
      currency,
      page_location: window.location.href
    })
  }

  const trackVideoPlay = (videoTitle) => {
    sendGAEvent('event', 'video_started', {
      video_title: videoTitle,
      page_location: window.location.href
    })
  }

  const trackFormSubmission = (formName) => {
    sendGAEvent('event', 'form_submitted', {
      form_name: formName,
      page_location: window.location.href
    })
  }

  return {
    trackPurchase,
    trackVideoPlay,
    trackFormSubmission
  }
}

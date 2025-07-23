// lib/user-properties.ts
export const setActiveUserProperty = (isActive) => {
  // Ensure gtag is available (loaded by GoogleAnalytics component)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', {
      ActiveUsersByUser: isActive ? 'true' : 'false'
    })
  }
}

// Usage example
export const markUserAsActive = () => {
  setActiveUserProperty(true)
}

export const markUserAsInactive = () => {
  setActiveUserProperty(false)
}

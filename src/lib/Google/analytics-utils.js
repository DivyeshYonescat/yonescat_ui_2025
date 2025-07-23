// lib/analytics-utils.ts
export const getScreenName = (pathname) => {
  const segments = pathname.split('/').filter(Boolean)
  
  // Custom mapping for your app structure
  const screenMap = {
    '': 'home',
    'products': 'product_list',
    'product': 'product_detail',
    'checkout': 'checkout_flow',
    'profile': 'user_profile'
  }
  
  return screenMap[segments[0]] || segments[0] || 'home'
}

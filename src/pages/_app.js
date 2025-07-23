import "@/styles/globals.css";
import "~/css/flaticon.css";
import * as gtag from '../lib/Google/gtag';
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <>
    <Component {...pageProps} />
  </>;
}

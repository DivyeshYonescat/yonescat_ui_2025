"use "
import { useEffect, useRef, useState } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "./Footer";
import Header from "./Header";
import NewsLetterSection from "./NewsLetter/newsLetter";
import CookiePopup from "./cookie";
import AIagentComponent from "./AIagent";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsProvider } from "@/components/googleAnalytics/AnalyticsProvider";
import PageHead from "./PageHead";

const Layout = ({ headTitle, metaDescription, keywords, url, children})=>{

  const [scroll, setScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScrolled = () => {
    setIsVisible(false);
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    // Check if the user has scrolled down 20% of the page
    if (scrollPosition > (documentHeight - windowHeight) * 0.07) {
      setIsVisible(true); // Show the component
    } else {
      setIsVisible(false); // Hide the component
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolled);
    return () => {
      window.removeEventListener('scroll', handleScrolled); // Cleanup the event listener
    };
  },[])

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 400;
      if (scrollCheck !== scroll) { setScroll(scrollCheck); }
    };

    document.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => { document.removeEventListener("scroll", handleScroll);};
  }, [scroll]);


  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

   useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, [footerRef]);

  return (
  <>
    <PageHead headTitle={headTitle} metaDescription={metaDescription} keywords={keywords} url={url} />
    <Header />
    <main className="relative block">
      {children}
      <NewsLetterSection />
      <AnalyticsProvider />
    </main>
     
    <Footer footerHeight={setFooterHeight}  />
    <AIagentComponent isVisible={isVisible} />
    <CookiePopup />
    <Toaster richColors position="top-right" />
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      
   </>
   );
}

export default Layout;
"use "
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetterSection from "./NewsLetter/newsLetter";

const Layout = ({children})=>{
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

   useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, [footerRef]);

     
  


  
  
   
  return (
  <>
    <Header />
    <main className="relative block z-20">
      {children}
    
      <NewsLetterSection />
    
    </main>
 
    
    <Footer footerHeight={setFooterHeight}  />
    
   </>
   );
}

export default Layout;
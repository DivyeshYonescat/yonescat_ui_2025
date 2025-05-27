"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import SidebarMenu from "./Sidebar";
import Image from "next/image";
import YonescatLogo from "@/components/logo";
import Dropdown from '@/components/dropdown';


const Header = () => {

  const [token, setToken] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken !== null) {
      setToken( JSON.parse(localStorage.getItem('user')));
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <>
      <header className={`header-main ${scrolled ? 'scrolled' : ''}`} >
        <div className="container mx-auto">
          <nav className="navbar">
            <div className="navbar-container">
              <div className="nav-container-left">
                <Link href={'/'} className="brand-logo ">
                  {/* <Image src="/images/logo.webp" alt="Yonescat" width={833} height={136}></Image> */}
                  <YonescatLogo/>
                </Link>
              </div>
              
              <div className="nav-container-right flex items-center">
                {token === null ? <>
                  <Link href="/auth" className="btn mx-3">Login</Link>
                </> : <>
                  <Dropdown token={token}/>
                </>}
                <div className="nav-sidebar overflow-hidden">   
                  <SidebarMenu />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import FloatingCircles from '@/components/animators/FlotingCircles';
import Image from 'next/image';


const menuItems = [
  {
    title: "Home",
    link: "/",
    icone: "/images/main/menu/home-1-svgrepo-com.svg",
    subItems: []
  },
  {
    title: "About",
    link: "/about",
     icone: "/images/main/menu/about-filled-svgrepo-com.svg",
    subItems: []
  },
  {
    title: "Projects",
    link: "/projects",
    icone: "/images/main/menu/project-svgrepo-com.svg",
    subItems: []
  },
  {
    title: "Solutions",
    link: "",
    icone: "/images/main/menu/solution-svgrepo-com.svg",
    subItems: [
      { title: "Overview", link: " /solutions" },
      { title: "Software Development", link: " /solutions/software-development " },
      { title: "Product Design", link: " /solutions/product-design " },
      { title: "Ai & Machine Learning", link: " /solutions/ai-and-machine-learning " },
      { title: "Mobile Applications", link: " /solutions/mobile-applications " },
      { title: "Web & Cloud Portals", link: " /solutions/web-and-cloud-portals " },
      { title: "E-commerce", link: " /solutions/e-commerce " },
      { title: "Data Analytics", link: " /solutions/data-analytics " },
      { title: "Virtual Reality", link: " /solutions/virtual-reality " },
      { title: "Decentralized Systems", link: " /solutions/decentralized-systems " },
      { title: "IoT", link: " /solutions/iot " },
    ]
  },
  {
    title: "Infrastructure",
    link: "",
     icone: "/images/main/menu/infrastructure-solid-svgrepo-com.svg",
    subItems: [
      { title: "Overview", link: " /infrastructure" },
      { title: "Datacenter", link: "/infrastructure/datacenter" },
      { title: "DDos Protections", link: "/infrastructure/ddos-protections" },
      { title: "Database-as-a-Service", link: "/infrastructure/database-as-a-service" },
      { title: "Microsoft Office365", link: "/infrastructure/microsoft-office365" },
      { title: "Google G-Suite", link: "/infrastructure/google-g-suite" },
      { title: "VOIP - Virtual Numbers", link: "/infrastructure/voip-virtual-numbers" },
      { title: "IPTV Services", link: "/infrastructure/iptv-services" },
    ]
  },
  {
    title: "Hosting",
    link: "",
    icone: "/images/main/menu/hosting-svgrepo-com.svg",
    subItems: [
      { title: "Overview", link: " /hosting" },
      { title: "Shared Hosting", link: "/hosting/shared-hosting" },
      { title: "Cloud Reseller", link: "/hosting/cloud-reseller" },
      { title: "Dedicated Servers", link: "/hosting/dedicated-servers" },
      { title: "Cloud VPS", link: "/hosting/cloud-vps" },
      { title: "Domain Names", link: "/hosting/domain-names" },
      { title: "Developer Hosting", link: "/hosting/developer-hosting" },
      { title: "Email Security", link: "/hosting/email-security" },
      { title: "SSl Certificates", link: "/hosting/ssl-certificates" },
      { title: "Gaming Server", link: "/hosting/gaming-server" }
    ]
  },
  {
    title: "Career",
    link: "/career",
    icone: "/images/main/menu/job-svgrepo-com.svg",
    subItems: []
  },
  {
    title: "Support",
    link: "",
     icone: "/images/main/menu/support-svgrepo-com.svg",
    subItems: [
      { title: "Blogs", link: "/blogs" },
      { title: "FAQ", link: "/faqs" },
      { title: "Contact Us", link: "/contact" },
      { title: "Ticket", link: "/ticket", },
    ]
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
    icone: "/images/main/menu/privacy-dashboard-svgrepo-com.svg",
    subItems: []
  },
  {
    title: "Terms and Conditions",
    link: "/terms",
     icone: "/images/main/menu/service-contract-svgrepo-com.svg",
    subItems: []
  },
  {
    title: "GDPR Policy",
    link: "/GDPR-policy",
     icone: "/images/main/menu/security-protection-gdpr-svgrepo-com.svg",
    subItems: []
  }
];

const initialOpenMenus = menuItems.reduce((acc, menu, index) => {
  if (menu.subItems && menu.subItems.length > 0) {
    acc[index] = false;
  }
  return acc;
}, {});

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState(initialOpenMenus);
  const subMenuRefs = useRef([]);
  const mainMenuContainer = useRef(null);
  const menuTimeline = useRef(null);
  const menuItemsList = useRef(null);
  const backdropRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ 
      paused: true
    });

    menuTimeline.current.to(mainMenuContainer.current, {
      display: "block", 
      opacity: 1, 
      x: 0, 
      duration: 0 
    })
    .to(backdropRef.current,
    { 
      display:"block",
      scale: 140,  
      duration: 0.8, 
      ease: "power4.inOut"
    },)
    .to(".navbar-toggle svg line:nth-child(1)", { 
      y: 8, 
      rotation: 45, 
      transformOrigin: "center center", 
      duration:0.2
    }, 0)
    .to(".navbar-toggle svg line:nth-child(2)", { 
      opacity: 0, 
      duration:0.2
    }, 0)
    .to(".navbar-toggle svg line:nth-child(3)", { 
      y: -8, 
      rotation: -45, 
      transformOrigin: "center center", 
      duration:0.2
    }, 0)
    .to('.scroll-gradient', {
      opacity: 1,
      display: "block"
    })
    .to(".menu-items-list>li", {
      y: 0,
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      stagger: {
        amount: 0.5
      },
      duration: 0.4,
      ease: "power3.out"
    }, '-=0.8');

  }, []);

  useEffect(() => {
    const openMenusList = Object.keys(openMenus);
    openMenusList.forEach((key, i) => {
      const el = subMenuRefs.current[key];
      if (!el) return;
      if (openMenus[key]) {
        gsap.set(el, { display: 'block', transformOrigin: 'top' });
        gsap.to(el, {
          autoAlpha: 1,
          scaleY: 1,
          display: 'block',
        });
      } else {
        gsap.to(el, {
          autoAlpha: 0,
          scaleY: 0,
          duration: 0.4,
          onComplete: () => gsap.set(el, { display: 'none' }),
        });
      }
    });
  }, [openMenus]);

  useEffect(() => {
    mainMenuContainer.current.scrollTop = 0;
    if (isOpen) {
      menuTimeline.current.play();
    } else {
      setOpenMenus(initialOpenMenus);
      setTimeout(() => {
        menuTimeline.current.reverse();
      }, 0);
    }
  }, [isOpen])

  const toggleMainMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };



  return (
    <>
      <div className='circlular-backdrop' ref={backdropRef}></div>
      <button type='button' ref={menuToggleRef} className={`navbar-toggle ${isOpen ? 'isVisible' : ''}`} onClick={toggleMainMenu}
        data-cursor-text={isOpen ? 'Close' : 'Menu'}
      >
        <svg viewBox="0 0 40 40">
          <line x1="8" y1="12" x2="32" y2="12" />
          <line x1="8" y1="20" x2="32" y2="20" />
          <line x1="8" y1="28" x2="32" y2="28" />
        </svg>
      </button>

     
      
      <aside className='menu-container' ref={mainMenuContainer}>
        <FloatingCircles containerRef={mainMenuContainer} isParentVisible={isOpen}></FloatingCircles>
        <div className='h-screen fixed flex flex-col justify-center align-middle max-w-auto top-0 right-0'>
          <div className='flex flex-col items-end h-auto justify-center social-media-header'>
           
            <span className='flex items-center   leading-none mb-0.5 px-1 py-1 w-[55px] max-sm:w-[55px] max-sm:text-[0px] lg:hover:w-[150px] md:w-[60px] header-flaticon-facebook  text-white'>
              <Image  src={"/images/main/media/facebook.svg"} alt='facebook' width={40} height={40} /> <span className="font-bold ml-3">Facebook</span>
            </span>
            
            
            <span className='flex items-center  leading-none mb-0.5 px-1 py-1 w-[55px] max-sm:w-[55px] max-sm:text-[0px] lg:hover:w-[150px] md:w-[60px]  header-flaticon-instagram  text-white'>
              <Image src={"/images/main/media/instagram.svg"} alt='instagram' width={40} height={40} /> <span className="font-bold ml-3">Instagram</span>
            </span>
            
            <span className='flex items-center  leading-none mb-0.5 px-1 py-1 w-[55px] max-sm:w-[55px] max-sm:text-[0px] lg:hover:w-[150px] md:w-[60px]  header-flaticon-youtube text-white'>
              <Image  src={"/images/main/media/youtube.svg"} alt='youtube' width={40} height={40} /> <span className="font-bold ml-3">Youtube</span>
            </span>
           
            <span className='flex items-center  leading-none mb-0.5 px-1 py-1 w-[55px] max-sm:w-[55px] max-sm:text-[0px] lg:hover:w-[150px] md:w-[60px]  header-flaticon-x text-white'>
              <Image  src={"/images/main/media/x.svg"} alt='x' width={40} height={40} /> <span className="font-bold ml-3"> X</span>
            </span>
           
            
            
          </div> 
        </div>
        <div className='menu-items-wrapper'>

          <div className='container'>
            <div className='scroll-gradient scroll-gradient-top'></div>
            <ul className='menu-items-list '  ref={menuItemsList}>
              {
                menuItems.map((menu, menuIndex) => {
                  return (
                    <li key={`menu-item-${menuIndex}`}>
                      <div className={`menu-wrap ${openMenus[menuIndex] ? 'isSubmenuOpen' : ''}`}>
                         {(menu.link != "") ? <Link href={menu.link} className="nav-link flex"> {(menu.icone != "") ? <span className={`menu-icone ${menu.title}`}> <Image width={20} height={20} src={menu.icone} alt={menu.title} />  </span>:"" } {menu.title}</Link> :
                            <div role="button" onClick={() => toggleMenu(menuIndex)} className="nav-link ">{(menu.icone != "") ? <span className={`menu-icone ${menu.title}`}> <Image width={25} height={25} src={menu.icone} alt={menu.title} />  </span>:"" } {menu.title}</div>}
                        {(menu.subItems.length > 0) && <span className="flaticon-down-arrow text-black submenu-toggle" onClick={() => toggleMenu(menuIndex)}></span>}
                      </div>
                      {
                        (menu.subItems.length > 0) && <div ref={(el) => (subMenuRefs.current[menuIndex] = el)} className="sub-menu-wrap">
                          <ul>
                            {
                              menu.subItems.map((submenu, submenuindex) => {
                                return <li key={`submenu-${menuIndex}'-'${submenuindex}`}>
                                  <Link href={submenu.link} className="nav-link ">{submenu.title}</Link>
                                </li>
                              })
                            }
                          </ul>
                        </div>
                      }
                    </li>
                  )
                })
              }
              {/* {user !== null ? <>
                  <li key="login">
                    <div className="menu-wrap">
                      <button type="button" onClick={logout} className="nav-link text-start">Logout</button>
                    </div>
                  </li>
                </> : ""} */}
            </ul>
            <div className='scroll-gradient scroll-gradient-bottom'></div>
          </div>
        </div>
        

      </aside>

    </>
  );
}

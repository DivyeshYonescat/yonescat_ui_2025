
// import { ReservedRights } from "@/components/elements/ReservedRights";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";


export default function Footer() {
    const currentYear = (new Date()).getFullYear();
    const socialMedia = [
        { link: "https://www.facebook.com/yonescatpro", icon:"flaticon-facebook", name:"Facebook" },
        // { link: "https://twitter.com/yonescat", icon:"flaticon-twitter", name:"x" },
        { link: "https://www.instagram.com/yonescat", icon:"flaticon-instagram", name:"Instagram" },
        { link: "https://www.youtube.com/@yonescat", icon:"flaticon-youtube", name:"Youtube" }
    ];

   
    const footerMenu = [
        {
        heading:"Solutions",
        items:[
            { title:"Software Development", link:" /solutions/software-development " },
            { title:"Product Design", link:" /solutions/product-design " },
            { title:"Ai & Machine Learning", link: "/solutions/ai-and-machine-learning " },
            { title:"Mobile Applications", link:" /solutions/mobile-applications " },
            { title:"Web & Cloud Portals", link:" /solutions/web-and-cloud-portals " },
            { title:"E-Commerce", link:" /solutions/e-commerce " },
            { title:"Data Analytics", link:" /solutions/data-analytics " },
            { title:"Virtual Reality", link:" /solutions/virtual-reality " },
            { title:"Decentralized Systems", link:" /solutions/decentralized-systems "},
            { title:"IoT", link:" /solutions/iot " },
        ]
        },
        {
        heading: "Infrastructure",
        items: [
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
        heading: "Hosting",
        items: [
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
        // {
        // heading: "Company",
        // items: [
        //     { title: "About Us", link: "/about" },
        //     { title: "Contact us", link: "/contact" },
        //     { title: "Terms & Conditions", link: "/terms" },
        //     { title: "Privacy Policy", link: "/privacy" },
        //     { title: "GDPR", link: "/gdpr" },
        // ]
        // },
    ];

    const [openMenus, setOpenMenus] = useState({});
    const toggleMenu = (index) => {
        setOpenMenus((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
        }));
    };

    return (<>
        <footer className="footer w-full">
        <div className="container">
            <div className="footer-inner flex flex-row justify-around md:justify-between w-full flex-wrap pt-[50px] pb-[35px] max-sm:pb-[20px]"> 
                <div className="compnay w-[50%]  md:w-[250px]  lg:w-[350px] pr-2.5">
                    <div className="w-full float-start">
                        <Image src="/images/logo.webp" className="w-[170px]" priority={true} alt="Yonescat" width={256} height={48} />
                    </div>
                    <p className="w-full float-left mt-3.5 mr-2.5 ">Lorem ipsum is a placeholder or dummy text used in typesetting layouts. </p>
                    <ul className="w-full float-left flex mt-3.5">
                        <li className="inline-block  font-bold"><Link className="" href="about">About Us</Link></li>
                        <li><Link className=" mx-2.5 font-bold max-sm:mx-1.5 max-sm:text-[13px]" href="contact">Contact Us</Link></li>
                        <li><Link className=" mx-2.5 font-bold max-sm:mx-1.5 max-sm:text-[13px]" href="contact">GDPR</Link></li>
                    </ul>
                    <ul className="flex w-full mt-3.5 float-start items-center">
                        <li className="px-[5px] pl-0">
                            <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                                <Image  src={"/images/main/media/facebook.svg"} alt="facebook" width={30} height={30} />
                            </Link>
                        </li>
                        <li className="px-[5px]">
                            <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                                <Image  src={"/images/main/media/instagram.svg"} alt="instagram" width={30} height={30} />
                            </Link>
                        </li>
                        <li className="px-[5px] pr-0">
                            <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                                <Image  src={"/images/main/media/youtube.svg"} alt="youtune" width={30} height={30} />
                            </Link>
                        </li>
                        <li className="px-[5px]">
                            <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                                <Image  src={"/images/main/media/x.svg"}  alt="x" width={30} height={30} />
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                { footerMenu.map((menu,menuIndex) => <> 
                    <div className="footer-links w-[50%] md:w-auto fl-2" key={menu.heading}>
                        <h5 className="font-bold mb-[25px] max-sm:mb-[15px]">{menu.heading}</h5>
                        <ul className={`foo-links clearfix ${!openMenus[menuIndex] && 'collapsed'}`}>
                            {
                            menu.items.map((item,itemIndex)=><li  key={`clearfix-${item.title}`}><Link className="" href={item.link}>{item.title}</Link></li>)
                            }
                        </ul>
                        { (menu.items && menu.items.length > 5) && <b className="toggle-f-menu font-bold text-[12px]" onClick={() => toggleMenu(menuIndex)}>{openMenus[menuIndex] ? 'Show less' : 'Show more'}</b>}
                    </div>
                </>) }
            </div>
            <hr /> 
            <div className="bottom-footer my-5 md:my-5 lg:my-8 flex max-sm:flex-col justify-between w-full items-center">
                <p className="p-sm w-full max-sm:text-center max-sm:mb-1.5">© {currentYear} Yonescat. <span>All Rights Reserved</span></p>
                <ul className="w-full flex justify-end max-sm:justify-center">
                    <li className="inline-block "><Link className="" href="about">Terms & Conditions</Link></li>
                    <li><Link className=" ml-9.5 " href="contact">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
        </footer>
        
    </>)
}

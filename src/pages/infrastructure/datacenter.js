import { useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Layout from "@/layout/Layout";
import ContactSection from "@/components/sections/contact";

export default function DataCenter() {
  const pageUrl = usePathname();


  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return(<>
    <Layout>
      <div className="section-main">
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title">What Is a Data Center?</h3>
            <p className="sub-page-discretion">In a nutshell, a data center is a vast physical facility that companies use to secure their data and applications, which are of critical importance to them. It stores, processes, and disseminates the data and applications. Data centers are crucial for an organization to continue with their daily operations as they house their vital propriety assets and data.</p>
            <p className="sub-page-discretion">In the world of business, data centers are created to support various interactive activities and business applications. These include artificial intelligence, machine learning, productivity applications, file sharing, virtual desktops, collaboration services, and CRM.</p>

            <div className=" mx-auto mt-[50px] grid grid-cols-2 max-sm:grid-cols-1 gap-10">
              <div className="database-block">
                <div className="img-database-block">
                  <Image priority={true} width={400} height={330} className="img-fluid rounded-sm" src={"/images/main/section_image/datacenter02.webp"} alt="content-image" />
                </div>
                <div className=" box-database-text">
                  <h5 className="font-bold my-3.5 min-h-[50px]">Yonecat’s Data Center</h5>
                  <div className={`box-descriton ${isExpanded == true ? "isActvie" : "truncate"}`} ref={contentRef}> 
                    <p>We are a software-based creative agency that has been making a mark in the world of Information Technology since 2004. Our experience in this sector has built a great client base, and we are more than proud to serve our users with nothing but the best. We have our markets across Europe and the Middle East, where we prepare the professionals for a digital future.</p>
                    <p>Yonescat considers its data center as an integral part of our enterprise. Our data center services are deployed to secure the integrity and performance of our key data center components.</p>
                  </div>
                  {!isExpanded === true ? <>
                      <b className=" inline-block mb-4 mt-3" onClick={() => toggleDescription(true)}>Read More</b>
                    </> : <>
                      <b className="inline-block mb-4" onClick={() => toggleDescription(false)}>Lass More</b>
                    </> }
                </div>
              </div>
              <div className="database-block">
                <div className="img-database-block">
                  <Image priority={true} width={400} height={330} className="img-fluid rounded-sm" src={"/images/main/section_image/datacenter03.webp"} alt="content-image" />
                </div>
                <div className=" box-database-text">
                  <h5 className="font-bold my-3.5 min-h-[50px]">Different tiers of Data Center and global options</h5>
                  <div className={`box-descriton ${isExpanded == true ? "isActvie" : "truncate"}`} ref={contentRef}> 
                    <p>Understanding the difference between different levels of data centers is as significant as choosing a server for web hosting. Choosing an appropriate server for the wrong location results in lousy performance. We at Yonescat focuses on selecting the data center tier which prioritizes an efficient user experience for our customers. Among the four widely accepted data center tiers, we opt for the one that fits perfectly with the nature of our business. We always go for the highest uptime percentage and one that ensures the functionality of our equipment, preventing them for dangerous spikes.</p>
                  </div>
                  {!isExpanded === true ? <>
                      <b className=" inline-block mb-4 mt-3" onClick={() => toggleDescription(true)}>Read More</b>
                    </> : <>
                      <b className="inline-block mb-4" onClick={() => toggleDescription(false)}>Lass More</b>
                    </> }
                </div>
              </div>
              <div className="database-block">
                <div className="img-database-block">
                  <Image priority={true} width={400} height={330} className="img-fluid rounded-sm" src={"/images/main/section_image/datacenter04.webp"} alt="content-image" />
                </div>
                <div className=" box-database-text">
                  <h5 className="font-bold my-3.5 min-h-[50px]">PCI DDS compliance for eCommerce</h5>
                  <div className={`box-descriton ${isExpanded == true ? "isActvie" : "truncate"}`} ref={contentRef}> 
                    <p>Payment Card Industry Data Security Standard (PCI DSS) is a set of regulations that every business should follow. PCI DSS compliance defines the best standards for eCommerce companies to create a secured environment for the storing, processing, and transmission of cardholders’ details.</p>
                            <p>Since our objective is to prevent credit card fraud that happens when sensitive data is leaked, Yonescat has proudly achieved PCI DSS compliance. With this remarkable accomplishment, we aspire to grow our business by ensuring our customers that their sensitive data is well secured.</p>
                  </div>
                  {!isExpanded === true ? <>
                      <b className=" inline-block mb-4 mt-3" onClick={() => toggleDescription(true)}>Read More</b>
                    </> : <>
                      <b className="inline-block mb-4" onClick={() => toggleDescription(false)}>Lass More</b>
                    </> }
                </div>
              </div>
              <div className="database-block">
                <div className="img-database-block">
                  <Image priority={true} width={400} height={330} className="img-fluid rounded-sm" src={"/images/main/section_image/datacenter05.webp"} alt="content-image" />
                </div>
                <div className=" box-database-text">
                  <h5 className="font-bold my-3.5 min-h-[50px]">Importance of backup, redundancies, and CDNs</h5>
                  <div className={`box-descriton ${isExpanded == true ? "isActvie" : "truncate"}`} ref={contentRef}> 
                    <p>Yonescat acknowledges the trust that our clients have in us. And this is why we lay emphasis on data backup. Knowing that data recovery and backup are important for running our business, there is no room for slacking when it comes to data protection.</p>
                    <p> Human errors, random disasters, and computer crash often result in data loss, which is why we have taken big measures to ensure data protection.</p>
                    <p>Content Delivery Networks (CDNs) are deployed in our data centers through the internet. CDNs effectively speed up the delivery of media content like videos to the users. Through CDNS, Yonescat aims to offer high-quality services to all its customers. This way, our users&apos; demand for over-the-top (OTT) content and the option to access that content at any time, from anywhere, on any device, is covered.</p>
                  </div>
                  {!isExpanded === true ? <>
                      <b className=" inline-block mb-4 mt-3" onClick={() => toggleDescription(true)}>Read More</b>
                    </> : <>
                      <b className="inline-block mb-4" onClick={() => toggleDescription(false)}>Lass More</b>
                    </> }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="datacenterBG relative" style={{background:"url(/images/main/section_image/2151637760.webp)"}}>
        <div className="container">
          <h3 className="text-stone-900 mb-3">GDPR and encrypted client personal information</h3>
            <p className="sub-page-discretion">General Data Protection Regulation (GDPR) is a law that imposes the required security measures. It’s a regulatory body that secures the personal information of users.</p>
            <p className="sub-page-discretion"> Yonescat, here again, wants to ensure its vast client-base of reliable data encryption, which stores information that can only be accessed via a “decryption key”. This way, we protect data by preventing the data from hack attacks and unauthorized access. GDPR also maintains data integrity and eliminates exposure to data breaches. This allows secured data exchange through unsecured channels.</p>
            <p className="sub-page-discretion">Yonescat strongly aligns itself with GDPR compliance. It follows its legal frameworks for processing and collecting the personal information of customers living within the European Union. It meets the following essential requirements as outlined by the GDPR:</p>
            <ul className="list-disc mb-[15px] pl-[15px]">
              <li><p className="sub-page-discretion">Meeting all the requirements of complaint consent</p></li>
              <li><p className="sub-page-discretion">Safely handling the cross birder data transmission</p> </li>
              <li><p className="sub-page-discretion">Ensuring privacy</p></li>
            </ul>
            <p>GDPR has not yet made data encryption a necessary method for assuring data security. But Yonescat goes out of its way to encrypt personal information for its customers.</p>
        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
import ListBox from "@/components/listBox";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import { useState } from "react";


export default function DdosProtections() {
  const [showMore, setShowMore] = useState(false);
  const toggleText = () => {
    setShowMore(prev => !prev);
  };

  const ListArray = [
    {"id":"1","listimg":"/images/main/section_image/Icon_Img/ddos01.webp","title":"DDoS protection"},
    {"id":"2","listimg":"/images/main/section_image/Icon_Img/ddos02.webp","title":"SSL integration"},
    {"id":"3","listimg":"/images/main/section_image/Icon_Img/ddos03.webp","title":"Intelligent caching"},
    {"id":"4","listimg":"/images/main/section_image/Icon_Img/ddos04.webp","title":"Customer support"},
    {"id":"5","listimg":"/images/main/section_image/Icon_Img/ddos05.webp","title":"Global network"},
    {"id":"6","listimg":"/images/main/section_image/Icon_Img/ddos06.webp","title":"Customization"},
  ]  
  return(<>
    <Layout>
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Understanding what a DDoS Attack Means </h3>
          <p className="sub-page-discretion">A Distributed Denial of Service (DDoS) attack targets a website by blasting the servers with “fake” traffic. Depending on the size of the attack, this traffic can impact the website's servers and cause an obstruction in service. Consequently, the authentic users of the site may have problems in getting access to the website until the attack is dealt with properly.</p>
          <p className="sub-page-discretion">DDoS attacks vary in severity and size, ranging from a few gigabytes per second to hundred gigabytes. The bigger the attack, the more complicated it would be to counter it. These attacks are becoming more powerful than before. Major websites can be taken down with such an attack as they are becoming more unpredictable and common gradually.</p>
        </div>      
      </div>
      <div className="section-main">
        <div className="container">
          <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
            <BoxSection rightImage={true} ImageUrl={"/images/main/ddos-protection-teaser.webp"} BgColor={""} order="order-2">
              {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">  
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What is DDoS Protection and Why Yonescat Stresses its Need</h3>
                  {showMore && (<>
                  <p className="leading-[20px] mb-[15px]">Yonescat is a creative agency that provides its software development services to clients across the Middle East and Europe. Established in 2004, Yonescat has made remarkable achievements in the rapidly progressing world of IT. We are refining the way businesses run and connect with each other, offering intellectual and technology-based solutions to our customers.</p>
                  <p className="leading-[20px] mb-[15px]">With years of expertise and experience in digitalization, we assist businesses and private firms to be a part of this digital transformation on a global level. To prevent any sort of inconvenience to our customers, we ensure strong DDoS protection.</p>
                  <p>We offer DDoS protection as an option to guard websites from such kinds of attacks. DDoS protection, specifically, works by using advanced software and algorithms to monitor the incoming traffic on the website. Any traffic that does not seem legitimate is denied access. On the contrary, legitimate traffic continues to pour in on the website.</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>

            <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/rb_529.webp"} BgColor={""} order="order-1">
              {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">  
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Cloud DDoS Protection Services</h3>
                  <p className="leading-[20px] mb-[15px]">Cloud DDoS Protection Services is one the most preferred options worldwide to combat a DDoS attack. Also called Cloud Anti-DDoS, the inherently distributed nature of this service aims to protect servers against malicious traffic.</p>
                  {showMore && (<>
                  <p className="leading-[20px] mb-[15px]">Yonescat recognizes this service to have the potential of guarding the websites fiercely. With the help of Cloud DDoS, Yonescat mitigates the largest DDoS attacks in the cloud, with no limit on the mitigation number. It also helps in protecting the infrastructure of IDC/ISP/Hosting Service Providers.</p>
                  <p>Through Cloud DDoS protection, we avail of its services 7T+Capacity, Multi-Vector DDoS Attack Mitigation, and DNS diversion for companies and customers.</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>
          </div>  
        </div>
      </div>  
      <div className="">
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title"> CDN-based DDoS scrubbing and DNS component </h3>
            <p className="sub-page-discretion">How can a CDN counter a DDoS attack? Before we discuss this, let’s first understand what a CDN actually is.</p>
            <p className="sub-page-discretion">A CDN stands for Content Delivery Network. It’s a group of multiple servers that are distributed around the globe. When you spot a CDN, know that the content of the website isn’t just stored on the server where the website is hosted, but its copies are also stored (cashed) across the servers. Yonescat uses a CDN based service that has the following features</p>
            <div className="grid grid-cols-6 gap-4  max-lg:grid-cols-3 max-sm:grid-cols-2">
              <ListBox ListArray={ListArray} />
            </div>
          </div>    
        </div>
      </div>

      <div className="datacenterBG relative">
        <div className="container">
          <h3 className="text-stone-900 mb-3">Comprehensive DDoS Protection</h3>
            <p className="sub-page-discretion">Yonescat DDoS protection offers various benefits such as:</p>
            
            <ul className="list-disc mb-[15px] pl-[15px]">
              <li><p className="sub-page-discretion font-bold">High levels of performance and accuracy</p></li>
              <li><p className="sub-page-discretion font-bold">Ease of use</p> </li>
              <li><p className="sub-page-discretion font-bold">Top-tier infrastructure</p></li>
              <li><p className="sub-page-discretion font-bold">Autoscaling</p> </li>
              <li><p className="sub-page-discretion font-bold">Full scope protection</p></li>
            </ul>
            <p className="sub-page-discretion">Our DDoS protection is effective on all scales. It’s defensive against the full spectrum of vector attacks, reflection and amplification attacks, resource depletion, malicious inputs, volumetric flooding, and others. Apart from using approved DDoS mitigation methods, Yonescat takes a step ahead and uses learning and adaptive mechanism to enhance the accuracy of traffic analysis.</p>
            <p className="sub-page-discretion">Unlike common security solutions, Yonescat, decision-making process is not restricted to the ongoing resources in the traffic stream. Our platform uses an automated process to constantly adapt to the variations and to the ever-evolving threat environment of the internet.</p>
        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)  
}
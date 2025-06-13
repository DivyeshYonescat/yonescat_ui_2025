import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import { useState } from "react";

export default function CloudVPS() {
  const [showMore, setShowMore] = useState(false);
  
    const toggleText = () => {
      setShowMore(prev => !prev);
    };
  return(<>
    <Layout>
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Cloud VPS Hosting</h3>
          <p className="sub-page-discretion">Cloud VPS hosting is an effective and performance-driven platform for all websites, from small to medium to large business websites – and even for e-commerce marketplaces.</p>
          <p className="sub-page-discretion">We at Yonescat, provide highly effective Cloud VPS to help you get the most possible increased flexibility and scalability quickly and efficiently.</p>          
        </div>   
      </div> 
      <div className="section-main pb-0">
        <div className="container">
          <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
            <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/freepik__expand__25904.webp"} BgColor={""} order="order-2">
              {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What Benefits You Will Get Buying Our Cloud VPS System?</h3>
                  <p className="sub-page-discretion">The Cloud VPS hosting platform is a rapidly growing proprietary cloud computing solution responsible for providing highly effective business IT solutions to the business. The Cloud VPS offers reliability, scalability and transparency to the website or businesses.</p>
                  {showMore && (<>
                  <p className="sub-page-discretion">A Cloud VPS is often known as the Virtual Private Server that is used to host your website, pre-production environment or production environment. The Cloud VPS offers hardware availability and business-level requirements. Unlike shared hosting, the Cloud VPS offers you full control and coverage over your VPS’s entire configuration to make you able to configure it according to your business unique needs.</p>
                  <p>There are numerous reasons why Cloud VPS is getting popular day by day and is adopted at a faster pace globally. Some of the major and common reasons include economic advantage, speed, agility, greater uptime, scalability, greater collaboration, independence of location, and others…</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>

            <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/rb_27012.webp"} BgColor={""} order="order-1">
              {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What Benefits You Will Get Buying Our Cloud VPS System?</h3>
                  <p className="sub-page-discretion">You should first recognize how a Cloud VPS differs from other hosting options to better understand the ultimate benefits of this hosting server. Coming to the point, shared hosting is like living in a complicated and compound apartment.</p>
                  {showMore && (<>
                  <p>This means that all the residents use to live in the same place and have to share all available resources with everyone. Hence, in shared hosting you will have a part of the server and all the resources will be common which can negatively impact your website or business – because of other websites located on the same server.</p>
                  <p className="sub-page-discretion">Whereas, in the case of a Cloud VPS, you will still have to share your server with other participants, but you will get a guaranteed amount of CMU and RAM limits as well – which will be dedicated for your account solely.</p>
                  <p>Cloud VPS hosting allows several machines to act as a single unit enabling you to achieve the best possible level of website performance. Furthermore, it will enable you to pay only for those that will be dedicated to you.</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>
          </div>  
        </div>    
      </div>  

      <div className="section-main pb-0">
        <div className="container">
          <h3 className="mb-[30px]">Ultimate Benefits That You Will Enjoy Buying Cloud VPS From Yonescat!</h3>
          <p>If you are thinking to expand your business a bit more and want to gain advanced monitoring, security and data controlling features then, our Cloud VPS hosting would definitely be your go-to option.</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Increase Security</h3>
                <p>Businesses seeking advanced monitoring capabilities, increased security features, improved website reliability, more backup space, or plan on taking any form of online payment, are recommended to choose a Cloud VPS. With the Cloud VPS, you will get credible and reliable resources and can count on top-notch security features.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Costs Savings</h3>
                <p>One of the amazing appeals of a Cloud VPS is the cost-effectiveness of functioning a server in the cloud. Cloud VPS hosting isn’t only a credible and reliable option but also an affordable or low cost one.</p>
                <p>In addition, if you get the VPS from reliable providers then they will also let you choose exactly the resources you want. Whether you want to increase your hard disk space for a particular amount in a day or required a more influential server only for an hour, you will have to pay only for resources you will going to use – also, all of them will be precisely figured out by a system.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Scalability</h3>
                <p>The Cloud VPS infrastructure enables users to modify or alter the setting or available options to help you present your website more appropriately and attractively. Furthermore, it will make you able to easily add more storage to your VPS, scale your CPU performance, enlarge allowable RAM, and no downtime will occur.</p>
              </div>
            </div>
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">4</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Accessibility</h3>
                <p>Businesses who want to monitor, manage and control their data anytime they want will be benefitted from having the Cloud VPS hosting network. It enables businesses to have easy access to their data anytime from anywhere without any obstacles.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">5</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Speed</h3>
                <p>Another major benefit of having Cloud VPS for your website is that it will run quickly and smoothly and this will help you attract and engage masses of website visitors that will eventually turn out to be your potential customers.</p>
              </div>
            </div>  
          </div>
        </div>
      </div>  
      <ContactSection/>
    </Layout>
  </>)
}
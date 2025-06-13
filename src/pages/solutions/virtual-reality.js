import ListBox from "@/components/listBox";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { useState } from "react";

export default function virtualReality() {
  const ListArray = [
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Easier_upgrades.webp","title":"Easier upgrades"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Scalability.webp","title":"Scalability"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Saving_software_costs.webp","title":"Saving software costs"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Resource_sharing.webp","title":"Resource sharing"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Recovery.webp","title":"Fault-tolerance"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Fault-tolerance.webp","title":"Fault-tolerance"},
  ];
  
  const ListArray2 = [
    {"id":"","listimg":"/images/main/section_image/Icon_Img/IT_Cost_Reduction.webp","title":"IT Cost Reduction"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Recovery_Situations.webp","title":"Reduced Downtime and Restoring Forces in Disaster Recovery Situations"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Productivity.webp","title":"Increased Efficiency and Productivity"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/DevOps.webp","title":"Independence Control and DevOps"},
    {"id":"","listimg":"/images/main/section_image/Icon_Img/Organizational.webp","title":"Environmentally Friendly"},
  ]  

  const [showMore, setShowMore] = useState(false);
  
    const toggleText = () => {
      setShowMore(prev => !prev);
    };
  return(<>
  <Layout>
    <div className="">
      <div className="container">
        <div className="sub-page-textbox">
          <p className="sub-page-discretion">Unleash the tremendous potential of VR by combining adventure-advertising expertise with video design on the products of your enterprises to generate more sales. Whether you are looking for a CG virtual reality experience, 360 videos, or a unique virtual experience of your products, Yonescat Virtual Reality offerings will bring your products vision to life.</p>
        </div>
      </div>
    </div>
    <div className="section-main">
      <div className="container">
        <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
          <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/virtual-reality-01.webp"} BgColor={""} order="order-1">
            {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
            <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center"> 
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Yonescat changes the way you experience video design</h3>
                <p className="leading-[20px] mb-[15px]">As viewers move from passive observers to active explorers, there is increasing pressure to create visual experiences that enable deeper levels of interaction, immersiveness, and imagination in order to generate leads and sales.</p>
                {showMore && (<>
                <p>As a VR expert, Yonescat sees your work as an opportunity to create a very personal experience and help you take your brand to a place never imagined before. Whether it is a photorealistic reproduction of Times Square or the very real and rugged coastline of the EU, we can make revenue generation dreams come true with personalized experiences.</p>
                </>)}
                <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>

          <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/virtual-reality-02.avif"} BgColor={""} order="order-2">
            {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
            <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center"> 
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Yonescat - Produce Groundbreaking Immersive VR Experiences</h3>
                <p className="leading-[20px] mb-[15px]">Do you want Top-Notch Virtual Reality (VR) applications in iOS and Android both native and hybrid to exhilarate your business? Meet Yonescat professionals.</p>
                {showMore && (<>
                <p className="leading-[20px] mb-[15px]">To make your viewer's journey as smooth and exciting as possible, we will create individual VR apps according to your experience.</p>
                <p className="leading-[20px] mb-[15px]">The dedicated Yonescat VR services help distribute content on relevant platforms and ensure that all remarks are achieved.</p>
                <p>Guides the manufacturing process from start to finish, helping you choose from a variety of devices available on the market. We have developed special apps for iOS, Android, Samsung Gear VR, Oculus Rift and HTC Vive.</p>
                </>)}
                <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>
    </div>  
    
    <div className="container">
      <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/virtual-reality-03.avif"} BgColor={""} order="order-1">
        <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
          <div className="">
            <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Social VR and Metaverse is not a big deal for Yonescat</h3>
            <p className="leading-[20px] mb-[15px]">Meta (formerly Facebook) introduces Horizon Home VR, Messenger VR calls, and fitness VR as part of its metaverse push. The metaverse, a shared online space where people interact as avatars, was first coined by Neal Stephenson in his 1992 novel Snow Crash. It blends virtual and augmented reality with the physical world.</p>
            <p>Platforms like Roblox and Fortnite already feature metaverse elements, enabling users to move between virtual and physical spaces with VR headsets and AR glasses. Meta aims to be seen as a metaverse company, shifting away from its social media roots.</p>
          </div>
        </div>  
      </BoxSection>
    </div>
    <div className="">
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Virtualization with Yonescat</h3>
          <p className="sub-page-discretion">This may all seem unavoidable, but with virtualization, it is a lot easier than without it. With Yonescat virtualization services, you can get hands-on:</p>
          <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            <ListBox ListArray={ListArray} />
          </div>
          <p className="sub-page-discretion mt-5">Our Virtualization and cloud computing services comprises On-Demand, Self-Managed, and Broad network access!</p>
        </div>  
      </div>
    </div>
    <div className="section-main">
      <div className="container">
        <div className="sub-page-textbox mt-0">
          <h3 className="sub-page-title">With Yonescat, Virtualize before Build and Rollout</h3>
          <p className="sub-page-discretion">Get on to the journey of Virtualization before it is too late!</p>
          <p className="sub-page-discretion">Many IT organizations often dedicate physical servers to specific applications, so they deploy servers that use only a small portion of their capacity. This is an inefficient mechanism because it usually has excess on unconsumed capacity, which increases operating and IT costs. Virtualization was created to achieve higher capacity utilization and reduce costs. With Yonescat businesses' solutions, anyone can benefit from virtualization.</p>
          <div className=" grid grid-cols-5 gap-4  max-lg:grid-cols-2">
            <ListBox ListArray={ListArray2} />
          </div>
        </div>  
      </div>
    </div>
    <div className="">
      <div className="container">
        <div className="">
          <h3 className="mb-3">Engaging Content for Training & PDP with Yonescat</h3>
          <p>Yonescat offers the UK's most compelling and prestigious professional compliance and content, as well as training and PDP. If you need a leading video game accessory company to develop high-performance products that enhance your gaming experience, we provide you with knowledge and understanding of the legal requirements that apply to key areas of your day-to-day operations. The services of Yonescat are:</p>
          <div className="txt-block mt-10 grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="cbox-2 process-step items-center mb-[10px]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">1</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className="">LinkedIn conversion tracking (LinkedIn Insight Tag)</p>
              </div>
            </div>

            <div className="cbox-2 process-step items-center mb-[10px]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">2</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className="">Excellence criteria to meet your niche</p>
              </div>
            </div>

            <div className="cbox-2 process-step items-center mb-[10px]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">3</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className="">Quality venues</p>
              </div>
            </div>

             <div className="cbox-2 process-step items-center mb-[10px]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">4</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className="">Comprehensive training materia</p>
              </div>
            </div>

             <div className="cbox-2 process-step items-center mb-[10px]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">5</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className="">VR Interaction</p>
              </div>
            </div>

            <div className="cbox-2 process-step items-center mb-[10px]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">6</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className="">Fully up-to-date</p>
              </div>
            </div>

            <div className="cbox-2 process-step items-center mb-[10p]">
              <div className="ico-wrap !mr-4">
                <div className="cbox-2-ico">7</div>
              </div>
              <div className="cbox-2-txt !mb-0 flex items-center">
                <p className=""> In-house model training</p>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
    <ContactSection/>
  </Layout>
  </>)
}
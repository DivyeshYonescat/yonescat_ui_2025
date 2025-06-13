import ContactSection from "@/components/sections/contact";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function CloudReseller() {
  return(<>
    <Layout>
      <div className="container">
        <div className="sub-page-textbox">
          <p className="sub-page-discretion">Yonescat offers you the best reseller cloud hosting services that are swift and smooth. From reseller hosting to web hosting, servers, and WordPress Hosting, Yonescat does it all for you.</p>
          <p className="sub-page-discretion">We are a leading cloud computing service provider where we buy cloud computing products and services from well-known providers like Google and sell them to you at affordable rates!</p>
        </div>   
      </div> 
      <div className="">
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title"> Choose Cloud Computing Services by Yonescat </h3>
            <p className="sub-page-discretion">Whatever services you avail the fact here is that data with large quantity will be moving back and forth towards the service providers and end-users over the internet.</p>
            <p className="sub-page-discretion">And that is precisely why whichever type of service you use, yonescat will impeccably help you and your business and organization to have a cloud computing experience that is well maintained, organized, and swift.</p>
            <p className="sub-page-discretion">We will help you reap humungous benefits and with your cloud services investments, we will help in skyrocketing your organizations’ growth from your cloud services investments.</p>
            <p className="sub-page-discretion">We have a diverse and widely spread cloud network comprising 237,600 + application acceleration servers.</p>
            <p className="sub-page-discretion">Yonescat ensures a consistently efficient performance from the PaaS, IaaS, and SaaS services that every customer uses. Consequently, boosting overall productivity as well as adoption rates.</p>
          </div>    
        </div>     
      </div>  

      <div className="section-main pb-0">
        <div className="container">
          <h3>Become A Reseller Without Contracts and One Monthly Bill with Yonescat</h3>
          <p>You can smoothly become a hosting reseller by purchasing hosting products and services from us and reselling them to your direct customers. You will be able to set limitations that you see fit on email usage, bandwidth, disk space, and other features. You can even sell them on a per-site or per-packet basis, whatever brings you more profit or suits you. Providing you a fully managed and organized service from hosting ones to server space, we are available round the clock so you can reach out to us whenever you want.</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">What Is Cloud Reseller</h3>
                <p>A Cloud reseller is an intermediary party who purchases cloud hosting products and services from well-known platforms like Google and AWS and resells those resources to their own customer base.</p>
                <p>A cloud reseller is a system integrator who manages cloud computing services bought from a value-added reseller who services, maintains, installs, and sells cloud resources to customers.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Cloud Computing Services</h3>
                <p>Evolving the world of information technology for companies and businesses, cloud computing services are now a second away to meet all IT-related needs.</p>
                <p>Although the field is diverse and wide, there are common benefits and key features that can be categorized into three basic cloud computing services types.</p>
                <ul className="list-disc pl-[15px]">
                  <li className="mb-[10px]">
                    <h5 className="font-bold">PaaS (Platform as a Service)</h5>
                    <p>Turning towards software development teams, under this category comes to the services of providing computing and storage infrastructure. Not only this but a development layer covering services such as database management systems, web servers, and (SDKs) software development kits for multiple programming languages.</p>
                  </li>
                  <li className="mb-[10px]">
                    <h5 className="font-bold">SaaS (Software as a Service)</h5>
                    <p>SaaS providers are limited to application-related services drawn to cater to maximum business needs. For example, CRM (Customer Relationship Management), business analytics, and marketing automation.</p>
                  </li>
                  <li className="mb-[10px]">
                    <h5 className="font-bold">IaaS (Infrastructure as a Service)</h5>
                    <p>Providing access to users in raw computing resources like data storage capacity, networking, and processing power on the subject of secure data centers.</p>
                  </li>
                </ul>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Cloud Computing Services Advantages and Key Features</h3>
                <p>Let's have a look at some of the core features and benefits of cloud computing from a service user's perspective.</p>
                <div className="text-center legal-info">
                  <Image width={700} height={350}  priority={true} src={'/images/main/svg/CCS-Advantages.svg'} alt="list Image" />
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
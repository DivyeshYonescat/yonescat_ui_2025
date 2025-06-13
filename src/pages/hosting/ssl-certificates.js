import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function SslCertificates() {
  return(<>
    <Layout>
      <div className="section-main pb-0">
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/sslcertificate.webp"} BgColor={""} order="order-1">
            <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What are SSL Certificates?</h3>
                <p className="sub-page-discretion"> SSL stands for Secure Sockets Layer and is a digital certificate that authenticates a website’s identity. It further enables the website for an encrypted connection. SSL certificate creates an encrypted link between a web browser and a web server. In simpler terms, SSL keeps attackers/hackers away from intercepting your organization’s personal information. A padlock beside the web address on the top bar is an indication of an SSL-certified website. </p>
                <p className="sub-page-discretion"> The question is, is it necessary to obtain SSL Certificates for your website? Well, in the digital world, it is vital. SSL Certificate is important for an organization to secure their online transactions while also keeping their client's information secured. </p>    
              </div>
            </div>  
          </BoxSection>
        </div>  
      </div>    

      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> How Yonescat Protects Your Data?</h3>
          <p className="sub-page-discretion">Using our premium services, we make use of SSL to protect data that is sent between users and websites, or between two systems, by making it nearly impossible to encrypt it. It scrambles data in transit using encryption methods, preventing hackers from accessing it as it travels across the network. Names, addresses, credit card numbers, and other financial details are among the data that might be considered sensitive and SSL protects such valuable data.</p>
          <p className="sub-page-discretion">The process of SSL Certificate in action that we follow include the below steps:</p>
          <div className="text-center my-[30px]">
            <Image priority={true} src={"/images/main/section_image/SSL-Certificate.svg" } className="img-fluid m-auto" width={600} height={400} alt="Certificate" />
          </div>
          <p className="sub-page-discretion">Finally, the encrypted data is shared between the website and the webserver</p>
        </div>    
      </div>  

      <div className="section-main pb-0">
        <div className="container">
          <h3 className="mb-[15px]">Types of SSL Certificates Yonescat Offers</h3>
          <p>Numerous SSL Certificates are on different validation levels. The six main types of SSL Certificates are:</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Wildcard SSL certificates</h3>
                <p>The best thing about this SSL certificate is that it allows its user to secure unlimited domains on a single certificate. This is a great and popular SSL certificate for those organizations that have multiple sub-domains to secure.</p>
              </div>
            </div>  

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Organization Validated certificates (OV SSL)</h3>
                <p>This type of SSL certificate is quite similar to EV SSL as the website owner needs to go through a validation process after obtaining it. It is the second most expensive type of SSL Certificate with the primary function of encrypting users’ information during online transactions.</p>
              </div>
            </div>  

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Multi-Domain SSL certificates (MDC)</h3>
                <p>MDC is also used for securing multiple sub-domains but the special feature that MDC has is that it also allows its user to secure a combination of unique domains and sub-domains.</p>
              </div>
            </div>  

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">4</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Domain Validated certificates (DV SSL)</h3>
                <p>To obtain DV SSL, the validation process is quite minimal which makes this SSL certificate provide a low level of assurance.</p>
              </div>
            </div>  

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">5</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Unified Communications Certificates (UCC)</h3>
                <p>UCC is also considered to be multi-domain SSL certificated that are used for securing multiple domains and sub-domains on just one certificate with some different key features.</p>
              </div>
            </div>  

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">6</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Extended Validation certificates (EV SSL)</h3>
                <p>The most expensive and highest-ranking type of SSL Certificate is EV SSL. It is mainly used for a high-profile website that are involved in online transactions.</p>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Best SSL Certification Service Provider - Yonescat </h3>
          <p className="sub-page-discretion">It is important to be aware of different SSL Certificates before purchasing one for your organization but what service provider to trust with these certificates? Well, this is where we come in.</p>
          <p className="sub-page-discretion">Yonescat’s SSL Certificates are available to all individuals from single traders, enterprises, organizations, to government agencies. With our services, there is no paperwork to supply or callbacks to process. All you have to do is pass domain ownership verification using a simple and easy method. With Yonescat’s SSL Certification services you can protect your websites, corporate portals, and e-commerce enterprises without a worry.</p>
          <p className="sub-page-discretion">We have crafted various plans for our customers to pick from that suit their needs best. Our SSL certificates are known to be one of the most well-known, and cost-effective in the world. Yonescat's SSL Certificates encrypt an unlimited number of subdomains across an endless number of servers with the right purchased SSL Certificate.</p>
        </div>    
      </div>      
      <ContactSection/>
    </Layout>
  </>)
}
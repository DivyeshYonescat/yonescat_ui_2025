import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import { useState } from "react";

export default function DomainName() {
  const [showMore, setShowMore] = useState(false);
    
  const toggleText = () => {
    setShowMore(prev => !prev);
  };
  return(<>
    <Layout>
      <div className="section-main">
      <div className="container">
        <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
          <BoxSection rightImage={true} ImageUrl={"/images/main/domain-name-2.webp"} BgColor={""} order="order-1">
            {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
            <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What Is Domain Name?</h3>
                <p className="sub-page-discretion">A domain name is typically referred to as your site’s name and the address internet users will access your website by which. A domain name is used for identifying and finding companies or businesses on the Internet.</p>
                {showMore && (<>
                <p>Previously there were IP addresses by which internet users were able to find the business or the company. However, it was way difficult for humans to remember those IP strings containing numbers. To ease this, domain names were developed by which internet users now can easily identify anyone on the internet.</p>
                <p>Yonescat being the leading IT solutions provider, will help you choose from thousands of extensions and display your website effectively. Why delay anymore? Get the perfect solution to your unique business needs now by contacting us!</p>
                </>)}
                 <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>
          <BoxSection rightImage={true} ImageUrl={"/images/main/what-is-domain.webp"} BgColor={""} order="order-2">
            {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
            <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">How to Choose a Domain Name?</h3>
                <p className="sub-page-discretion">To make your domain name your brand, it is essential to choose the right, easy to type and pronounce, and captivating name for your website. Make sure:</p>
                {showMore && (<>
                <ul className="list-disc pl-[15px]">
                  <li className="mb-[10px]"> <p>To choose a name that’s simple and easy to type and pronounce so internet users can easily type and pronounce it and it can be memorable for everyone.</p> </li>
                  <li className="mb-[10px]"> <p>Always pick a domain name that you are sure would be turned into a brand.</p> </li>
                  <li className="mb-[10px]"> <p>Keep it simple yet classic and unique. However, don’t try to use hyphens or numbers in your domain name as they will make it difficult for people to pronounce and remember it.</p> </li>
                  <li className="mb-[10px]"> <p>Keep your domain name short. Long and complicated domains run a risk of being misspelled and mistyped. In addition, users may get frustrated typing your complex and long domain name. Thus, it will make you lose your potential client eventually.</p> </li>
                  <li className="mb-[10px]"> <p>Opt a name that clearly indicates what is your business and what are your services. It is suggested to get an appealing and clever domain name that can help internet users understand what they can expect once they visit your website.</p> </li>
                </ul>
                </>)}
                 <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>    
      </div>
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Benefits Of Having A Strong Domain Name that Yonescat Takes Pride To Offer You!</h3>
          <p className="sub-page-discretion">Choosing and registering a strong domain name is quite tricky, also if you do this in rush you may end up getting an inappropriate and non-attractive domain name. That’s why you should not do it in haste.</p>
          <p className="sub-page-discretion">A domain name is of utmost importance irrespective of the type, size and nature of the business. whether you have a small, medium or large scale enterprise, your website’s domain name would be the first step towards either making your business prominent or may fail in it.</p>          
          <p className="sub-page-discretion">It is one of the most essential marketing and search tools that can help you attract and engage a wider audience. Make sure to conduct proper online research before deciding on a domain name for your website.</p>
          <p>Here at Yonescat, we offer you the strongest, unique and captivating domain names for your business to grow exceptionally. Contact us today and let us help you with your distinct needs.</p>
        </div>   
      </div>
      <div className="section-main pb-0">
      <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title">Getting Your Domain Name Form Yonescat Will Help You in Various Ways!</h3>
            <p className="sub-page-discretion">Since your domain name acts as a search tool, it must be strong and captivating enough. Getting your domain name from Yonescat will help you in various ways!</p>
            <div className="txt-block mt-10 grid grid-cols-1">
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">1</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Add professional credibility and reliability to your online business as well as separate you from the countless website out there.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">2</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Provide enhanced visibility to your brand and boost the brand value eventually.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">3</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Help establish your business as a forward-thinking and more tech-savvy among all.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">4</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">An attractive and unique domain name will help you stand out from the market competitors and help you get a competitive edge against them.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">5</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">A good and engaging domain name will help you enhance your reputation and recognize it as a credible and authentic business.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">6</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">It helps create mobility in terms of internet presence. This means whether you decide to alter or modify your web hosting services, shift to utilizing your own server, or relocate to a different region or country, your domain will remain with you everywhere. This will allow you to continue operating your business or brand without having to start all over again.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">7</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Will help you present your business all nationally, internationally and globally without any obstacles. This will help enhance your brand’s marketability around the world.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">8</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Unlike traditional marketing, your domain name will not expire — as long as you keep current with the low annual fees.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">9</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Help boost and increase your search engine ranking once you start building your website with quality engaging content. Constant content posting on your site will make your domain name turn more visible and recognizable in the most popular search engines such as Google. This will help you get more customers eventually.</p>
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
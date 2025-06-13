import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";

export default function SharedHosting() {
  return(<>
    <Layout>
      <div className="section-main pb-0">
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/shared-hosting-1-1.webp"} BgColor={""} order="order-1">
            <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What is Shared Hosting?</h3>
                <p className="sub-page-discretion">Shared hosting simply means allowing multiple websites to coexist on a single server. All users sharing the server have a specified limit of the number of server services they can use. Your allotted usage is usually determined by the hosting package you choose.</p>
                <p className="sub-page-discretion">Shared web hosting is ideal for beginners who have newly built their website. It&apos;s no wonder these shared hosting plans are so popular among newbies, given the small monetary investments. Furthermore, you don&apos;t have to fret about the hassle of web maintenance either. </p>
                <p className="sub-page-discretion">Without question, it is the cheapest and undoubtedly an intriguing option for your needs. Indeed, most companies will offer you the same amount of resources for a similar price. Hence, it&apos;s imperative that you put your faith in a company you can&apos;t trust.</p>
                <p className="sub-page-discretion">That&apos;s where Yonescat comes in! We are the most reliable web hosting server you can get. We will also provide you with countless benefits that you possibly can&apos;t get elsewhere for that price.</p>
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>    

      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> How Does Yonescat Provide Shared Hosting Services? </h3>
          <p className="sub-page-discretion">With us, shared web hosting is an uncomplicated task. Simply put, shared web hosting is like using public transport. So just like how a bus is more environmentally-friendly and cost-effective, shared web hosting also has its benefits.</p>
          <p className="sub-page-discretion">Similarly, on some days, the bus might be packed or take more steps between point A to point B; shared web hosting can also experience a troubling day. Nonetheless, it doesn’t overpower the benefits of low cost, convenience, and reliability of shared hosting.</p>
          <p className="sub-page-discretion">Book an appointment with our consultant and we’ll answer all your queri</p>
        </div>    
      </div>  

      <div className="section-main pb-0">
        <div className="container">
          <h3>Why Choose Yonescat for Shared Web Hosting?</h3>
          <p>When we talk about shared web hosting, security and reliability cannot be compromised. Yonescat offers you the best shared web hosting with plenty of benefits, such as:</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Daily Backups</h3>
                <p className="sub-page-discretion">Unexpected data loss can affect your business in ways you can’t even imagine. These losses can happen to anyone at any time. Hence, we ensure regular data backups to keep everything safe. With our backup and recovery services for your web hosting plans, you can protect your online assets around the clock.</p>
                <p className="sub-page-discretion">With us, you can restore all files, folders, and databases. Our backup and restoration tools make it easily accessible to save all your data. Our daily backups ensure that your data stays safe and sound. So, you need not fret about losing your data and having to start from rock bottom.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">cPanel</h3>
                <p className="sub-page-discretion">cPanel is a Linux-based control panel to make website management convenient. The system operates just like a desktop application. It allows you to perform all actions from a user-friendly dashboard instead of having to run complicated commands. cPanel dashboard also provides several web files, stats, data tracking, and remarkable SEO features. These features make cPanel one of the best control panels, and that’s what you get with Yonescat.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Setup in seconds</h3>
                <p className="sub-page-discretion">Your web page can easily be set up within seconds when you get your hosting rights from us. However, it can take up to 72 hours for your domain to become accessible. Our quick services and support are what make our services distinguishable from others. Dealing with us will not involve days of waiting before you get your hosting rights. We can assure you that the whole process will be done in the blink of an eye.</p>
                <h4 className="mb-4 font-bold">Benefits of Shared Web Hosting with Yonescat</h4>
                <ul className="list-disc pl-[15px]">
                  <li className="mb-[10px]"><p>It’s the cheapest available hosting option</p></li>
                  <li className="mb-[10px]"><p>You have the choice of upgrading your package over time</p></li>
                  <li className="mb-[10px]"><p>You get a built-in cPanel that can truly make it easy to manage the site</p></li>
                  <li className="mb-[10px]"><p>There is no need to worry about technical maintenance</p></li>
                </ul>
                <p className="mt-[30px]">All in all shared hosting is a fabulous option for newbie website owners tight on a budget. As your business expands, you can upgrade your website, one step at a time. This feature ensures that your web hosting isn’t stuck on the same level forever.</p>
              </div>
            </div>
          </div>
        </div>
      </div>        
      <ContactSection/>
    </Layout>
  </>)
}
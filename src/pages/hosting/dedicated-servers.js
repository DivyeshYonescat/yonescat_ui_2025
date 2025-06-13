import ListBox from "@/components/listBox";
import ContactSection from "@/components/sections/contact";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function DedicatedServers() {
  const ListArray = [
    {"id":"1","listimg":"/images/main/section_image/Icon_Img/single-tenant.webp","title":"It is a single-tenant hosting environment"},
    {"id":"2","listimg":"/images/main/section_image/Icon_Img/Extremely-flexible.webp","title":"Extremely flexible and credible server."},
    {"id":"3","listimg":"/images/main/section_image/Icon_Img/Exclusively-independent.webp","title":"Exclusively independent"},
    {"id":"4","listimg":"/images/main/section_image/Icon_Img/Higher-security.webp","title":"Higher security and transparency"},
    {"id":"5","listimg":"/images/main/section_image/Icon_Img/Rock-solid-website.webp","title":"Business-oriented hosting server"},
    {"id":"6","listimg":"/images/main/section_image/Icon_Img/oriented-hosting-server.webp","title":"Rock-solid website foundation"},
  ];
  return(<>
    <Layout>
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Dedicated Servers</h3>
          <p className="sub-page-discretion">You may often come across a wide range of hosting types like Cloud, Hybrid Servers, VPS but in this article, we will explore dedicated servers in detail.</p>
          <p className="sub-page-discretion">A dedicated server can be defined as “an enterprise-grade physical server that is utilized to host the websites or web applications of a single hosting client”. A dedicated server is commonly used to host high traffic web services and other hosting setups where performance is way considerable.</p>
          <p className="sub-page-discretion">We at Yonescat, provide High performance dedicated servers with cloud flexibility and scalability to all medium and large scale businesses to keep your data safe and secure seamlessly.</p>          
        </div>   
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">What Core Features Yonescat&apos;s Dedicated Servers Offer?</h3>
          <p className="sub-page-discretion">Dedicated server hosting basically means that your website will have its own independent server all to itself - and that&apos;s what makes the dedicated servers the most powerful and influential infrastructure hosting option among all. Unlike other hosting options which empowers multiple sites, the dedicated server will enable you to have your own exclusive server. The server will provide immense flexibility and power as well as ensure higher security and credibility in terms of data management.</p>
          <p className="sub-page-discretion">The major features of a dedicated server include:</p>
          <div className="grid grid-cols-6 gap-4- max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <ListBox ListArray={ListArray} />
          </div>
        </div>   
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Crucial Benefits Of Choosing A Dedicated Server From Yonescat!</h3>
          <p className="sub-page-discretion">Want to facilitate your business with result-oriented dedicated servers? You landed the right place! Yonescat’s effective dedicated server enable you to get:</p>
          <ul className="list-disc pl-[15px]">
            <li className="mb-[10px]"><p className="font-bold">Power</p></li>
            <li className="mb-[10px]"><p className="font-bold">Privacy</p></li>
          </ul>
          <p className="sub-page-discretion">Dedicated servers undoubtedly facilitate websites with better and result-driven performance as compared to other hosting options – most significantly all of that power is at the disposal of a single user. Nevertheless, if you still are unsure whether you need it or not, let’s review the crucial reasons you should consider opting for the one.</p>
        </div>   
      </div>
      <div className="section-main pb-0">
        <div className="container">
          <h3>Why You Should Get a Dedicated Server by Yonescat?</h3>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Security Is of Utmost Importance</h3>
                <p>Privacy and security are what a business consider first and foremost – and especially those who are handling the way sensitive and crucial information. This may include credit card numbers, confidential emails, or sensitive clients’ information or perhaps stakeholders’ personal data and information as well as business data and records that needed to be kept all safe, secure and private. Thus, it is significant to keep all the information and data secure as well as protect your website from outside viruses, hackers and other security challenges and risks. With a dedicated hosting server, you are exclusively the caretaker of your website and entirely solely responsible for managing and controlling all the data.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Server Resources Are Not Shared</h3>
                <p>With a dedicated hosting server, you solely get the whole resources of a single server. Hence, you will be tension-free about other websites clogging up the server’s RAM and CPU. This not only help limit the outside involvement but you will be sure that your server won’t be slow down.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Boost Performance</h3>
                <p>Businesses often struggle with making ways that can help them boost their performance. That’s what a dedicated server can do for you. Choosing a dedicated server guarantees the possible maximum uptime for your website, especially for those business or website that receives a lot of traffic. In such a case, opting for a dedicated hosting server would be your obvious choice and a win-win for your website since it will provide you with higher stability, smooth processing and reliability as compared to other shared hosting servers</p>
              </div>
            </div>
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">4</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Enhance Website Page Loading</h3>
                <p>Your website’s page loading times may have greeters impacts on practically every aspect of your website and business eventually. Website visitors often get frustrated when they see a website page loading slow, thus, they often switch to other sites – which may turn out to be your competitors. In addition, slow page loading may lead to high bounce rates and low engagement metrics eventually. A dedicated hosting server guarantee you have the bandwidth that can help you boost your website page loading which ultimately results in getting higher website visitors and most importantly may lead to conversion.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">5</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Increase Productivity</h3>
                <p>Irrespective of the nature and type of the business, companies whose ultimate priority involves increasing their productivity or getting much work done and many targets achieved in a limited and less time period would likely opt for a dedicated hosting server. None of the server resources will be shared with any other website or business, thus, the processing happens faster and more efficiently.</p>
              </div>
            </div>  
          </div>
        </div>
      </div>      
      <ContactSection/>
    </Layout>
  </>)
}
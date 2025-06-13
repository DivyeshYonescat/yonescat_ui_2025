import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";

export default function IPtvServices() {
  return(<>
    <Layout>
      <div className="section-main pb-0">
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/iptv-b-1.webp"} BgColor={""} order="order-2">
            <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What is IPTV?</h3>
                <p className="sub-page-discretion">IPTV, Internet Protocol Television, is a system using an internet protocol suite to deliver TV services. There is no involvement of cable television, conventional terrestrial, or satellite signal. IPTV ensures secure and reliable streaming of entertainment videos or live streams across an IP data network.</p>
                <p className="sub-page-discretion"> At Yonescat, IPTV services include broadcast TV, interactive TV, encoded streams, and VOD (Videos On Demand). The services are provided across a network with an IP protocol to deliver audio, video, and control signals.</p>
                <p className="sub-page-discretion"> Contrary to videos available on the public internet, IPTV deployments ensure strict network security and performance. This allows the users an uninterrupted experience, ensuring an excellent environment for providers and consumers alike.</p>
                <p className="sub-page-discretion"> Yonescat takes pride in being one of the best IPTV providers in the UK. If you have been thinking about getting an IPTV service, think no more. Contact us today, and we will take you through everything that you need to know.</p>
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>    

      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> How Does Yonescat Provide IPTV Services? </h3>
          <p className="sub-page-discretion">With us, you can be assured to receive premium IPTV content services. We have a dedicated network of DSL (Digital Subscriber Line). A private network that allows us more control over the video traffic and ensures service quality, reliability, uptime, and bandwidth. These features make it superior to a public network</p>
          <p className="sub-page-discretion">IPTV uses IP multicasting alongside Internet Group Management Protocol. It uses IPv4-bases, live TV broadcasts, and a Real-Time Streaming Protocol for on-demand programs. At the same time, IPv6 networks use Multicast Listener Discovery. Some other protocols include Hypertext Transfer Protocol and Real-Time Messaging Protocol.</p>
          <p className="sub-page-discretion">At Yonescat, we can assist you with setting up your IPTV at amazing rates. So without any further ado, get started today!</p>
        </div>    
      </div>  

      <div className="section-main pb-0">
        <div className="container">
          <h3>Why Choose Yonescat for IPTV Services?</h3>
          <p>Yonescat&apos;s IPTV services are remarkably designed for users. You can watch your desired entertainment videos in excellent quality without any interruption. We ensure unrivaled flexibility, added security and encryption, and unparalleled scalability.</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Custom Mobile, Desktop, and Smart TV Apps</h3>
                <p>With us, your choice is not limited to a particular device. You can watch your favorite videos with comfort on a mobile application, your PC, or smart TV. We capture and ingest content from extensive sources, enroll and redistribute them across an IP network to a desktop video app, mobile IPTV app, standalone TV feed, or an interactive IPTV portal.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">30k+ TV Channels</h3>
                <p>The best thing about choosing Yonescat for IPTV is that you will never run out of options. There’s so much content available with over 30,000 TV channels. All users are sure to find something suitable for their choice and enjoy an endless supply of entertainment. Unlike your cable, you don’t have to worry about a limited number of channels. With our IPTV, the options to watch will be endless!</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Video On Demand</h3>
                <p>VoD is another great feature that comes with choosing our IPTV services. You can watch digital TV over the internet with an additional “on-demand” factor. Just like Netflix, Hulu, Disney+, you can select and enjoy videos or audio content on demand. It allows you to watch a program according to your desire.</p>
              </div>
            </div>
          </div>
        </div>
      </div>        

      <ContactSection/>
    </Layout>
  </>)
}
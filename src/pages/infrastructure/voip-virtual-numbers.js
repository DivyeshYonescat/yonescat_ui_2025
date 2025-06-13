import Card from "@/components/card";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function VopiVirtualNumbers() {
  const FeaturesList = [
    { id:"1", icone:"Unlimited-Calling.webp", title:"Unlimited Calling",
      discription:'Unlimited calling with a VOIP system, you can call anyone as much as you want – there is no time limit for calls.'
    },
    { id:"2", icone:"Online-Faxing.webp", title:"Online Faxing",
      discription:'you can send and receive unlimited faxes just like emails. No need for wires or hardware. Faxing now becomes simple and straightforward.'
    },
    { id:"3", icone:"Call-Queues.png", title:"Call Queues",
      discription:'you can now handle and manage calls when your team is busy. The business processing will be in progress without any obstacles.'
    },
    { id:"4", icone:"Auto-Attendant.png", title:"Auto Attendant",
      discription:'impressively greet your callers and direct them to the right person instantly. Give your organization a great first impression from the very initial moment they call.'
    },
    { id:"5", icone:"Conference-Lines.png", title:"Conference Lines",
      discription:'there is an option of using a dedicated conference line for discussions and meetings with up to nine participants. Meet and record in HD.'
    },
    { id:"6", icone:"Voice-Quality.webp", title:"Voice Quality",
      discription:'get great and superior phone calls with HD voice quality.'
    },
    { id:"7", icone:"Voicemail-to-Email.webp", title:"Voicemail-to-Emai",
      discription:'the VOIP phone system features an option by which you can get voicemail messages delivered to your inbox. You can listen to voicemails and respond instantly.'
    },
    { id:"8", icone:"Real-Time-Presence.webp", title:"Real-Time Presence",
      discription:'You can see who is available to chat messages and receive calls. In addition, live status updates will be straightforward and accurate.'
    },
    { id:"9", icone:"Smartphone-App.webp", title:"Smartphone App",
      discription:'with this feature, you will be able to instantly answer business calls. No important calls will be missed now. Also, it is available free for both Android and iOS.'
    },
    { id:"10", icone:"SMS.webp", title:"Text Messaging or SMS",
      discription:'you can send and receive messages easily. VOIP features the quick and the best appointment reminders features for you.'
    },
    { id:"11", icone:"Team-Collaboration.webp", title:"Team Collaboration",
      discription:'no business can run without good and effective team collaboration. VOIP phone system presents the option to chat with your team via a single system flawless screen sharing and HD video enables you to process business functions faster.'
    },
    { id:"12", icone:"CRM-Integration.webp", title:"CRM Integration",
      discription:'enhance your productivity with a highly integrated workflow with CRM integration presented by VOIP.'
    },]
  return(<>
    <Layout>
      <div className="section-main">
        <div className="container">
          <div className="sub-page-textbox mt-0">
            <h3 className="sub-page-title"> What Is VOIP? </h3>
            <p className="sub-page-discretion"> A VOIP – Voice Over Internet Protocol, launched on the internet in 1995, has transformed the way we communicate. It is referred to the standards that typically serve – using an internet connection, voice-based phone calls effectively. </p>
            <p className="sub-page-discretion"> A VOIP is a certain number that will be allotted to you once you sign up for a VOIP service. This number is the certain strings of digits that you will enter on a dial pad to make a call. However, unlike its counterpart, a VOIP phone number can also be used to make calls from any device that can be connected to the internet such as laptops, desktop computers, smartphones, tablets, and obviously a VoIP phone.</p>
            <p>In addition, if you also want to get your VOIP phone system, the Yonescat would obviously be your go-to service provider. Get connected with us and let us help you with your complications. </p>
          </div>
        </div>   
      </div>     
      <div className="">
        <div className="container">
          <div className="sub-page-textbox mt-0 mb-[50px]">
            <h3 className="sub-page-title"> Our VOIP Phone offers Features! </h3>
            <p className="sub-page-discretion"> The VOIP phone system has so much to offer to all individuals and businesses and organizations. In addition, its extensive and effective features are another essential factor that makes it the most in-demand phone system.</p>
            <p>Below are a few of the top features you will be benefitted by getting our VOIP system:</p>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-6">
            {FeaturesList.map((item) => (<>
              <Card>
                <div  className="card-bg"></div>
                <div className="card-header">
                  <div className="flex flex-row items-center">
                    {/* <div className=" max-sm:min-w-[55px] max-sm:w-[55px] max-sm:h-[55px] md:min-w-[55px] lg:min-w-[55px] w-[55px] h-[55px]  bg-[#2a2c34]  rounded-full flex flex-row justify-center items-center"> */}
                        <Image className=" w-[50px] h-[50px] max-sm:w-[30px] max-sm:h-[30px]" src={`/images/main/section_image/Icon_Img/${item.icone}`} width={25} height={25} alt="solution.png" />
                    {/* </div> */}
                    <h5 className=" font-bold mx-[15px] max-sm:mr-0 max-sm:ml-[10px] sm:mr-0 md:ml-[10px] md:mr-0  ">{item.title}</h5>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <p className="sub-title min-h-[150px] max-sm:min-h-auto group:hover  ">{item.discription}</p>
                </div>
              </Card>
            </>))}
          </div>
        </div>
      </div>      
      {/* <div className="section-main"> */}
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/voip-teaser.webp"} BgColor={""} order="order-2">
            <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Why You Should Get Your VoIP Form Yonescat?</h3>
                <p className="sub-page-discretion">A VoIP phone system is a technology to make phone calls through your internet connection instead of a regular landline or a mobile network. A VoIP system over your broadband connection. A VoIP server is used to connect calls to other telephone networks.</p>
                <p className="sub-page-discretion">A VOIP system is a technological infrastructure that converts analog voice signals into digital signals over a broadband connection. It is used to make phone calls via your internet connection rather than a mobile network or a regular landline.</p>
                <p className="sub-page-discretion">As far as you have a good speed internet connection, which includes a modem and a router, you can go with a VOIP and enjoy its unlimited benefits. The VOIP configuration typically involves a SIP server and a desk phone – that is usually a VoIP service provider.</p>
              </div>
            </div>  
          </BoxSection> 
        </div>
      {/* </div>  */}
     
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title">A Few Of Major Benefits Of Using Yonescat VOPI Phone System </h3>
            <p className="sub-page-discretion">Switching from a traditional telephonic system to the advanced and influential VOIP has many benefits to offer including:</p>
            
            <ul className="flex max-xl:flex-col my-8 max-xl:my-0 max-xl:ml-3.5 list-disc">
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>Lower cost</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>Higher flexibility</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>More scalability</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>More accessible</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>Better voice quality</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>Multiple devices</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>Number portability</p></li>
              <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>Toll-free numbers</p></li>
            </ul>  
            <p>All these databases are easily and conveniently accessible to service users. If you want to get your database system for your business, Yonescat is the leading IT solutions provider that can help you achieve your goals efficiently.</p>
          </div> 
        </div>
       
      <ContactSection/>
    </Layout>
  </>)
}
import Card from "@/components/card";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { useState } from "react";

export default function GoogleGSuite() {
  const FeaturesList = [
    { id:"1", icone:"Gmail_Logo.svg", title:"Gmail",
      discription:'Gmail, launched in 2004, is the G Suite email application with over 1 billion users worldwide. A G Suite plan offers businesses unlimited Google Group email addresses, custom company email addresses, 24/7 support, compatible add-ons, and 30GB of storage space.'
    },
    { id:"2", icone:"Google_Drive_Logo.svg", title:"Drive",
        discription:'Google Drive, launched in 2012, is a cloud storage platform for managing organizational content, data, and records. It enables team collaboration with features like file viewing, editing, commenting, templates, built-in chat, and unlimited revision history. Storage options include 30GB, 1TB, or unlimited storage depending on the subscription plan, along with reporting and audit insights for Drive content.'
      },
    { id:"3", icone:"Google_Docs_Logo.svg", title:"Docs, Sheets, and Slides",
        discription:'Google Docs, Google Slides and Google Sheets are considered as the G Suite word processor, presentation programs, and spreadsheet - added to the platform in 2006. Such tools in the G Suit enable real-time collaboration, track revision history and save changes automatically. In addition, users can modify files, insert comments, create templates, and communicate through a built-in chat as well as enjoy endless revision history - a win-win for you.'
      },
    { id:"4", icone:"Google-calendar.svg", title:"Calendar",
        discription:'Google Calendar, launched in 2006, is the G Suit online calendar that integrates with Gmail to manage meetings, appointments, schedules, and tasks via Google Tasks. G Suite plan enables businesses to enjoy smart scheduling, manage calendars for meeting rooms, calendars for Google Groups, and shared resources, easy migration from external calendars, and public calendars so company service users can view company events and remain up-to-date.'
    },
    { id:"5", icone:"google-plus.svg", title:"Google+",
        discription:'Google+ was launched in 2011, refer to the G Suite social network. G Suit plan helps businesses enjoy the secure and protected IT infrastructure environment as well as restricted outside entities and communities to improve the security standards.'
  }]

  const [showMore, setShowMore] = useState(false);
  const toggleText = () => {
    setShowMore(prev => !prev);
  };

  return(<>
    <Layout>
      <div className="">
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title">What Is Google G Suit?</h3>
            <p className="sub-page-discretion">Google G suite  formerly known as “Google Apps”, is a collection of collaboration tools, productivity, and education software designed and powered by Google for all small to medium to large businesses. The G Suite primary tools include Docs, Drive, Gmail, Slides, Forms, Google+, Calendar, Hangouts, Sites, and Sheets. </p>
            <p className="sub-page-discretion"> You will be able to get access to your Gmail - on your preferred certain domain name and 30GB of Google Storage per user. In addition, through G Suite, you will have access to several influential and effective Google applications that you can use for all academic, organizational and businesses purposes.</p>
            <p>Yonescat, being the market-leading IT solution provider, offers highly effective and influential software “ G Suit”, that you can get at relatively affordable rates.</p>
          </div>
        </div>
      </div>
      <div className="section-main">
        <div className="container">
          <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
            <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/unnamed-768x867.webp"} BgColor={""} order="order-1">
              {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What Does Our Google G Suite Offer You?</h3>
                  <p className="leading-[20px] mb-[15px]">Ideally suited for startups, small and medium businesses, our G Suite will facilitate you with some valuable tools to help you function your business activities properly and accelerate your business.</p>
                  {showMore && (<>
                  <p className="leading-[20px] mb-[15px]">All of the G Suit Apps are available on smartphones and tablets (Android and iOS), as well as Mac, Windows, or Linux computers. In addition, G Suit provides professional email, shared calendars, online storage, video meetings, and much more - already convinced about getting your own google G Suit from Yonescat?</p>
                  <p className="leading-[20px] mb-[15px]">Why wait anymore? Contact us today!</p>
                  <p>Google Applications in G Suit make collaboration easy and simple - enabling you to share and manage documents and spreadsheets, use instant messaging and create video conferences with Hangouts. Furthermore, organizations can also share calendars with their employees and making meetings easy and convenient to plan.</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>
            
            <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/rb_618.png"} BgColor={""} order="order-2">
              {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">How To Setup Your G Suit Account?</h3>
                  <p className="leading-[20px] mb-[15px]">Creating your own G Suit account is simple. Learn here:</p>
                  {showMore && (<>
                  <ul className="list-disc mb-[15px] pl-[15px]">
                    <li><p className="sub-page-discretion">Enter your company name and specify the number of workers in your company. You can always modify this as per your business dynamic needs.</p></li>
                    <li><p className="sub-page-discretion">Enter your contact information or contact details (information of the person who will be managing the G Suit account). A confirmation email would be sent to the certain email address mentioned in the account.</p></li>
                    <li><p className="sub-page-discretion">Now is the step to insert your business’ domain name (if you have already). And if not, then you can get your domain name from any credible IT solutions provider.</p></li>
                    <li><p className="sub-page-discretion">Enter your business details and essential information.</p></li>
                    <li><p className="sub-page-discretion">Last, choose a certain username and password for your G Suit account.</p></li>
                  </ul>
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
          <div className="sub-page-textbox mt-0 mb-[50px]">
            <h3 className="sub-page-title text-center"> Tools Available with Our G Suit! </h3>
            <p className="sub-page-discretion text-center">Below mentioned are a few effective tools that you will be able to utilize to maximize efficiency</p>
          </div>    

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-6">
            {FeaturesList.map((item) => (<>
              <Card>
                <div  className="card-bg"></div>
                <div className="card-header">
                  <div className="flex flex-row items-center">
                    {/* <div className=" max-sm:min-w-[55px] max-sm:w-[55px] max-sm:h-[55px] md:min-w-[55px] lg:min-w-[55px] w-[55px] h-[55px]  bg-[#2a2c34]  rounded-full flex flex-row justify-center items-center"> */}
                        <Image className=" w-[50px] h-[50px] max-sm:w-[30px] max-sm:h-[30px]" src={`/images/main/section_image/${item.icone}`} width={25} height={25} alt="solution.png" />
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
      <ContactSection/>
    </Layout>
  </>)
}
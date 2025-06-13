import Card from "@/components/card";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { useState } from "react";

export default function MicrosoftOffice365() {
 
  const FeaturesList = [
    { id:"1", icone:"word.webp", title:"Microsoft Word",
      discription:"Microsoft - also known as 'MS Word', is typically a word-processing application, enabling users to design and manage numerous documents. Anyone from students to small businesses can use Word to create content, keep a record of data and manage worksheets. This application is one of the most renowned and versatile word processors available in the market."
    },
    { id:"2", icone:"excel.webp", title:"Microsoft Excel",
      discription:"Microsoft Excel is a vibrant and useful spreadsheet program. It enables users to store, track, and control all small and large datasets. Excel can be used for all academic, business and organizational purposes. Businesses can use Microsoft Excel to manage and control their bookkeeping or perhaps track monthly sales numbers."
    },
    { id:"", icone:"outlook.webp", title:"Microsoft Outlook",
      discription:"Microsoft Outlook is a contact management and email application. Outlook users can send and receive emails from their Microsoft account within Outlook, as well as businesses can also use the Calendar Application within the application in order to schedule and manage meetings."
    },
    { id:"", icone:"powerpoint.webp", title:"Microsoft PowerPoint",
      discription:"PowerPoint is an easy-to-use “presentation program” enabling users to create and share multiple slideshows and presentations. Furthermore, businesses can also use Microsoft PowerPoint to create effective and influential presentations for sales meetings and public speaking events and design and manage marketing materials efficiently."
    },
    { id:"", icone:"publisher.webp", title:"Microsoft Publisher",
      discription:"Microsoft Publisher is a user-friendly graphic design application. Users can customize designs and create and design layouts for all traditional, digital or print media. Businesses and organizations can use Publisher to create and design logos, newsletters, business cards, or perhaps coupons."
    },
    { id:"", icone:"sharepoint.webp", title:"Microsoft SharePoint",
      discription:"SharePoint - as the name implies, is a collaborative document-sharing application. It is commonly used by small businesses or organizations, to share business documents and reports. The major purpose of using SharePoint is to communicate important information and share documentation within the organization."
    }]
  return(<>
    <Layout>
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> What is Microsoft 365? </h3>
          <p className="sub-page-discretion">Microsoft Office 365 is a hosted productivity cloud created to help you perform your tasks seamlessly. This is the updated online version that replaced the traditional installed version of previously named “Microsoft Office software”. Unlike apps like PowerPoint, Excel, Word, Microsoft 365 brings together the best productivity apps with effective and influential cloud services, advanced security in one, device management, data management and connected experience as a whole. Microsoft Office 365 is subscription-based including SharePoint Online, Exchange Online, Office, Microsoft Office Web Apps and Lync Online. </p>
          <p className="sub-page-discretion"> Yonescat, being the leading IT solution provider, provides effective and viable IT services. Our services range from Product Design services to Software Development to Cloud Software like Microsoft Office 365. </p>
          <p>Considering getting your Microsoft 365 to manage your business records and documents efficiently? No worries! Dive into the article to explore more what applications Yonescat’s Microsoft 365 offers.</p>
        </div>    
      </div>
      <div className="">
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/microsoft-teaser.webp"} BgColor={""} order="order-2">
            <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Crucial Features That Our Microsoft Office 365 Offers</h3>
                <p>The major features of the Microsoft Office 365 vary depending upon the subscription plan of the service user. Below mentioned are a few of the crucial and common features of Microsoft 365 that you will be benefitted with:</p>
                <ul className="flex-col my-8 max-md:my-0 list-disc">
                  <li><p className="sub-page-discretion"><b>Office Suite</b> including Outlook, PowerPoint, Excel, Word, Publisher, OneNote, Skype for Business, and others.</p></li>
                  <li><p className="sub-page-discretion"><b>SharePoint Online</b> used for collaboration between employees and the management of the company.</p></li>
                  <li><p className="sub-page-discretion"><b>Yammer</b> refers to enterprise social networking.</p></li>
                  <li><p className="sub-page-discretion"><b>Exchange Online</b> tasks, calendar, and email.</p></li>
                  <li><p className="sub-page-discretion"><b>Power BI</b> Business Intelligence.</p></li>
                  <li><p className="sub-page-discretion"><b>Planner</b> Project Management.</p></li>
                  <li><p className="sub-page-discretion"><b>Delve</b> the social document discovery.</p></li>
                  <li><p className="sub-page-discretion"><b>Video</b> a private customized video library.</p></li>
                  <li><p className="sub-page-discretion"><b>OneDrive for Business</b> file storage.</p></li>
                  <li><p><b>Sway</b> effective tool for creating and designing reports, newsletters and presentations.</p></li>
                </ul>
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>
      

      <div className="">
        <div className="container">
          <div className="sub-page-textbox mb-[50px]">
            <h3 className="sub-page-title text-center"> Yonescat Has a Number of Applications Available of Microsoft 365 </h3>
            <p className="sub-page-discretion text-center">The available applications and services depend on the Microsoft 365 small business plan you will likely choose. Below mentioned are a few of the current applications available with Microsoft 365.</p>
          </div>    

          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-6">
            {FeaturesList.map((item) => (<>
              <Card>
                <div  className="card-bg"></div>
                <div className="card-header">
                  <div className="flex flex-row items-center">
                    {/* <div className=" max-sm:min-w-[55px] max-sm:w-[55px] max-sm:h-[55px] md:min-w-[55px] lg:min-w-[55px] w-[55px] h-[55px]  bg-[#2a2c34]  rounded-full flex flex-row justify-center items-center"> */}
                        <Image className=" w-[50px] h-[50px] max-sm:w-[30px] max-sm:h-[30px]" src={`/images/main/${item.icone}`} width={25} height={25} alt="solution.png" />
                    {/* </div> */}
                    <h5 className=" font-bold mx-[15px] max-sm:mr-0 max-sm:ml-[10px] sm:mr-0 md:ml-[10px] md:mr-0  ">{item.title}</h5>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <p className="sub-title min-h-[150px] max-sm:min-h-auto group:hover  ">{item.discription}</p>
                </div>
                {/* <div className="card-footer">
                  <Link href={`/${item.link}`} className="subtitle inline-block font-bold">View More</Link>
                </div> */}  
              </Card>
            </>))}

          </div>
          <p className="sub-page-discretion text-center mt-[50px]">Already waited enough to get your Microsoft 365 for your business? don&apos;t fret anymore! We at Yonescat, aspire to provide you with every solution possible for your business. Get in touch with us and let us help you get the most effective and result-driven IT solutions for your business.</p>
        </div>  
      </div>
      <div className="section-main integrations-section">
        <div className="container">
          <div className="integrations-section-inmner">
            <div className="sub-page-textbox my-0  max-w-[1000px] m-auto">
              <h3 className="sub-page-title text-center  mb-[50px]"> Other Valuable Applications That Our Microsoft 365 Offers - Contact Us Now to Get Microsoft 365 in Most Affordable Rates! </h3>
              <div className="in-tool-main grid grid-cols-4 max-md:grid-cols-2 gap-6 max-lg:gap-6">
                <div className="in-tool text-center">
                  <div className="in_tool_logo ">
                    <Image priority={true} width={65} height={65} className="img-fluid m-auto" src="/images/main/ms-teams.webp" alt="brand-logo"/>
                  </div>
                  <b className="">Microsoft Teams</b>
                </div>
                <div className="in-tool text-center">
                  <div className="in_tool_logo">
                    <Image priority={true} width={65} height={65} className="img-fluid m-auto" src="/images/main/ms-booking.webp" alt="brand-logo"/>
                  </div>
                  <b>Microsoft Bookings</b>
                </div>
                <div className="in-tool text-center">
                  <div className="in_tool_logo">
                    <Image priority={true} width={65} height={65} className="img-fluid m-auto" src="/images/main/ms-invoice.webp" alt="brand-logo"/>
                  </div>
                  <b>Microsoft Invoicing</b>
                </div>
                <div className="in-tool ">
                  <div className="in_tool_logo">
                    <Image priority={true} width={65} height={65} className="img-fluid m-auto" src="/images/main/outlook.webp" alt="brand-logo"/>
                  </div>
                  <b>Outlook Customer Manager</b>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="sub-page-textbox my-0">
            <h3 className="sub-page-title"> Crucial Features That Our Microsoft Office 365 Offers </h3>
            <p className="sub-page-discretion">The major features of the Microsoft Office 365 vary depending upon the subscription plan of the service user. Below mentioned are a few of the crucial and common features of Microsoft 365 that you will be benefitted with:</p>
            <ul className="list-disc mb-[15px] pl-[15px]">
              <li><p className="sub-page-discretion"><b>Office Suite</b> including Outlook, PowerPoint, Excel, Word, Publisher, OneNote, Skype for Business, and others.</p></li>
              <li><p className="sub-page-discretion"><b>SharePoint Online</b> used for collaboration between employees and the management of the company.</p></li>
              <li><p className="sub-page-discretion"><b>Yammer</b> refers to enterprise social networking.</p></li>
              <li><p className="sub-page-discretion"><b>Exchange Online</b> tasks, calendar, and email.</p></li>
              <li><p className="sub-page-discretion"><b>Power BI</b> Business Intelligence.</p></li>
              <li><p className="sub-page-discretion"><b>Planner</b> Project Management.</p></li>
              <li><p className="sub-page-discretion"><b>Delve</b> the social document discovery.</p></li>
              <li><p className="sub-page-discretion"><b>Video</b> a private customized video library.</p></li>
              <li><p className="sub-page-discretion"><b>OneDrive for Business</b> file storage.</p></li>
              <li><p className="sub-page-discretion"><b>Sway</b> effective tool for creating and designing reports, newsletters and presentations.</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-main pb-0">
        <div className="container">
          <h3>Major Benefits of Using Our Microsoft Office 365</h3>
          <p>Want to get a wholesome solution for your business? Microsoft Office 365 available at Yonescat, is wholesome for businesses and organizations who want a highly effective organized software system to create, design, manage and control data as well as to keep track of that data and use it effectively. Some of the crucial benefits of using Microsoft 365 are as below</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Access Files Anywhere</h3>
                <p>Office 365 enables businesses or organisations to keep and store all the documents and files in the cloud. Which makes it possible for them to access those files on any device, from any location and anytime – you only need a good internet connection.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Secure Cloud Storage </h3>
                <p>Office 365 offers a highly protected and secure environment with vigorous security measures including two-factor authentication. Such measures make sure that your files and all the stored data are protected from outside cyber-attacks and malware. Hence, only authorized people can access your data and files.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Centralized Collaboration</h3>
                <p>Office 365 offers a highly protected and secure environment with vigorous security measures including two-factor authentication. Such measures make sure that your files and all the stored data are protected from outside cyber-attacks and malware. Hence, only authorized people can access your data and files.</p>
                <p>Sharing calendars will help determine who is available so you can schedule a meeting easily.</p>
                <p>Shared mailboxes enable multiple users to access the same mailbox for better and effective communication.</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
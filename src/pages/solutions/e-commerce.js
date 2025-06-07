import Card from "@/components/card";
import ContactSection from "@/components/sections/contact";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function ECommerce() {
  const FeaturesList = [
    { id:"1", icone:"Grow your sales.webp", title:"State of the art e-commerce solutions",
      discription:"Yonescat specializes in designing and developing hybrid and premium cloud, iOS, and Android applications. Drawing inspiration from the western genre and space exploration, Yonescat aims to meet the demand for groundbreaking technology. The company is focused on creating e-commerce solutions to help businesses thrive in the fast-paced future."
    },
    { id:"2", icone:"Multi-Vendor-Marketplace.webp", title:"Get Multi Vendor Marketplace",
      discription:"A multivendor market is an e-trade platform that empowers a couple of carriers to promote their merchandise from one storefront. Multivendor save offers buyers a big catalogue to pick from and gives dealers a larger base of ready-to-purchase customers."
    },
    { id:"3", icone:"the Digital Market.webp", title:"Get Success in the Digital Market",
      discription:"Yonescat is suitable for a variety of industries, use cases and enterprise sizes, regardless of where they are sold. Supporting out-of-the-box solutions, state-of-the-art content management systems, and unmatched performance benefits with 100% real-time SAP-powered ERP integration purchasing."
    },
    { id:"4", icone:"B2B partaker.png", title:"Become B2B partaker",
      discription:"B2B is full of complex processes due to difficult navigations than other types of sales. Yonescat understands this and offers options to meet your B2B needs. Whether you want to provide customers with custom discounts, bulk pricing, or proper inventory tracking for bulk orders, Yonescat can help."
    },
    { id:"5", icone:"Global.webp", title:"Get Global with Yonescat!",
      discription:"Easy to extend with Yonescat. ERP E-Commerce facilitates internationalization, growth and scalability without influencing your customer relationships. You can sell them in multiple web shops, localize your website, and support multiple regions such as UK, Europe or the Middle East."
    },
    { id:"6", icone:"D2C.webp", title:"Drive into D2C with Yonescat!",
      discription:"More and more b2b providers are taking their own path and selling directly to consumers. With Yonescat, enterprises can easily adapt to this business strategy. Operate D2C with our solutions and leverage highly personalized marketing and design capabilities to build your brand and serve new target groups."
    }
  ];
  return(<>
    <Layout>
      <div className="textsection">
        <div className="container">
          <h3 className="">There could be 2.15 billion worldwide virtual shoppers throughout the globe in 2022.</h3>
          <p>Companies that are serious about e-commerce have their website. Of course, marketplaces like amazon, Walmart, Etsy, eBay, etc., are good sales channels for many merchants, but with many limitations.</p>
        </div>
      </div>
      <div className="e-commerce-section-main section-main pb-0">
        <div className="container">
          <div className="e-commerce-inner">
            <h3 className="">Ecommerce timeline – Where Yonescat Stands?</h3>
            <div className="m-auto h-auto">
              <object type="image/svg+xml" data="/images/main/ecommerce-timeline-verticle-02.svg" className="max-w-full block m-auto w-full"></object>
            </div>
            <p className="mb-[30px]">With usual and new business drivers, we at Yonescat come into stability to help businesses discover their sales in Covid-19 and afterwards with our state-of-the-art e-commerce multi-vendor solutions. But wait, did you read it right? Read it again!</p>

            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-6">
              {FeaturesList.map((item) => (
                <>
                <Card>
                  <div  className="card-bg"></div>
                    <div className="card-header">
                      <div className="flex flex-row items-center">
                          <div className=" max-sm:min-w-[55px] max-sm:w-[55px] max-sm:h-[55px] md:min-w-[55px] lg:min-w-[55px] w-[55px] h-[55px]  bg-[#2a2c34]  rounded-full flex flex-row justify-center items-center">
                              <Image className=" w-[25px] h-[25px] max-sm:w-[30px] max-sm:h-[30px]" src={`/images/main/section_image/Icon_Img/${item.icone}`} width={25} height={25} alt="solution.png" />
                          </div>
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
                </>
              ))}

            </div>
            
            <h3 className="mb-[15px] mt-[50px] ">Yonescat - User-Centered, Secure and GDPR Compliant</h3>
            <p className="mb-[15px]">Take a step towards a user-centric internet with Yonescat GDPR.</p>
            <p className="mb-[15px]">Developed as a collaborative research project and conceived as a decentralized network of networks, the internet was based on the principles of openness, transparency, indiscrimination, and user-centered. General data protection regulation (GDPR) prohibits companies from hiding behind unreadable and confusing terms and conditions. Instead, to be GDPR compliant, businesses need to have our well-defined privacy policy for easy access.</p>

            <div className="grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-6">
              <p className="p-8 mb-[15px] shadow-xl">Yonescat guarantees the protection of personal data in the UK or EU from a legal point of view.</p>
              <p className="p-8 mb-[15px] shadow-xl">We ensure the legal actions that may lead to deviations regarding the effectiveness of the GDPR.</p>
              <p className="p-8 mb-[15px] shadow-xl">We provide the clear concept of data protection with technology design and default settings – suitable for your data protection</p>
              <p className="p-8 mb-[15px] shadow-xl">Yonescat GDPR implementation enhances the user's right to data processing and data alteration.</p>
            </div>

            <p className="my-[30px] text-center">Our automated processing, including profiling, is to deny online loan applications or brokerage operations without human intervention through DDS and PCI hosting.</p>

            <h3 className="mb-[15px] mt-[50px] ">Yonescat - PCI and DDS Hosting</h3>
            <p className="mb-[15px]">Our PCI compliant hosting helps merchants comply with the payment card industry over data security standard. Yonescat hosting services designated as PCI compliant meet all context of compliant audits or other assessments.</p>

            <h3 className="mb-[15px] mt-[50px] ">The DDS hosting service offers webmasters everywhere a number of options.</h3>
            <p className="mb-[15px]">Our shared hosting plans range from personal hosting plans to business plans using static IP.</p>
            


          </div>    
        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
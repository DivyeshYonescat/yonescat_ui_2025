import ContactSection from "@/components/sections/contact";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function DatabaseAsService() {
  return(<>
    <Layout>
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Database as A Service </h3>
          <p className="sub-page-discretion">Database as a service usually titled “DBaaS” is a cloud computing service. This database technology provides the same functionality as a standard relational or non-relational database. This cloud computing database as a service is useful for businesses that are trying to make ways to avoid maintaining, configuring and upgrading their own databases.</p>
          <p className="sub-page-discretion">Database as a managed or hosted infrastructure, users don’t have to struggle with setting up hardware or installing and managing software. Everything related to handling and managing the database is controlled by the service provider. In addition, Database hosting options are obtainable for every database type which includes:</p>
          <ul className="flex max-sm:flex-col my-8 max-sm:my-0 max-sm:ml-3.5 list-disc">
            <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>NoSQL</p></li>
            <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>MySQL</p></li>
            <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>PostgreSQL</p></li>
            <li className="mr-5 font-bold ml-5 max-sm:mx-0 max-sm:my-1.5"><p>MongoDB Atlas</p></li>
          </ul>  
          <p>All these databases are easily and conveniently accessible to service users. If you want to get your database system for your business, Yonescat is the leading IT solutions provider that can help you achieve your goals efficiently.</p>
        </div>      

        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> How Does DBaaS Work That You Will Get From Yonescat? </h3>
          <p className="sub-page-discretion">The database engine itself runs – once the data has been uploaded, in almost the same manner as an on-premises installation runs. In fact, the very same computing infrastructure is installed in the managed data center.</p>
          <p className="sub-page-discretion">However, the only major difference would be the physical infrastructure on which a hosted cloud computing database runs. In a public infrastructure as a service cloud environment such as Amazon Web Services (AWS), Microsoft Azure, MongoDB Atlas, Google Cloud Platform (GCP), and the database engine usually run on a shared hardware network.</p>
          <p>Furthermore, this adds the resource elasticity, compute power, reliability, and scalability required to support and facilitate your growing data stores and further processing needs.</p>
        </div> 

        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Features & Capabilities of a Database As A Service Available At Yonescat! </h3>
          <p className="sub-page-discretion">DBaaS ultimate features may vary depending on the software. However, below mentioned are a few of the ultimate features that our Database software offers:</p>
          <ul className="flex max-lg:flex-col my-8 max-xl:my-0 list-disc">
            <li className="mr-5 font-bold ml-5 max-xl:mb-3.5"><p>Scalable Storage</p></li>
            <li className="mr-5 font-bold ml-5 max-xl:mb-3.5"><p>Data Security</p></li>
            <li className="mr-5 font-bold ml-5 max-xl:mb-3.5"><p>Data Collaboration</p></li>
            <li className="mr-5 font-bold ml-5 max-xl:mb-3.5"><p>Usage-based pricing</p></li>
            <li className="mr-5 font-bold ml-5"><p>Data Management and Administration</p></li>
          </ul>  
        </div> 

        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Database as a Service Comparison </h3>  
          <p className="sub-page-discretion">When considering Database as a service option, you are suggested to consider the underneath aspects of each service offering:</p>
          <div className="text-center mt-10">
            <Image width={700} height={350} className="m-auto"  priority={true} src={'/images/main/svg/database_protection.svg'} alt="list Image" />
          </div>
        </div>

        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Why Database Cloud Computing From Yonescat Is Worth It?</h3>
          <p className="sub-page-discretion">Database as a service that you will get from Yonescat, is of utmost importance and significance. Underneath are a few key values of the Database for which you can use it:</p>
          <ul className=" my-8 ml-5 list-disc">
            <li><p className="sub-page-discretion font-bold">TCO benefits</p></li>
            <li><p className="sub-page-discretion font-bold">Quick Agility for application teams</p></li>
            <li><p className="sub-page-discretion font-bold">Managed Database Service</p></li>
            <li><p className="sub-page-discretion font-bold">Reduce and simplify the lifecycle management</p></li>
            <li><p className="sub-page-discretion font-bold">Minimize database management overhead</p></li>
          </ul>  
        </div>

        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> Ultimate Benefits Of Using A DBaaS from Yonescat! </h3>  
          <p className="sub-page-discretion">Whether you are a small scale or a large scale business looking for perfect database management solutions for your business, we at Yonescat offers you whatever your needs - contact us for any queries!</p>
          <p className="sub-page-discretion">Database as a service offers businesses a comprehensive database solution that is easy and simple to use and convenient to update. Using a database as a service system, the business will be able to perform record keeping and managing functions effectively and efficiently.</p>
          <p className="sub-page-discretion">Some of the major advantages of using our database as a service system are as follows:</p>
          <div className="text-center mt-10">
            <Image width={700} height={350} className="m-auto"  priority={true} src={'/images/main/svg/database_service_system.svg'} alt="list Image" />
          </div>
        </div>

        <div className="sub-page-textbox">
          <h3 className="sub-page-title"> The DBaaS subscription - Yonescat!</h3>
          <p className="sub-page-discretion">The DBaaS subscription usually includes every essential thing that is needed to run a database cloud computing including:</p>
          <ul className="flex max-md:flex-col my-8 max-md:my-0 list-disc">
            <li className="mr-5 font-bold ml-5 max-md:mx-0 max-md:my-1.5"><p>Database provisioning</p></li>
            <li className="mr-5 font-bold ml-5 max-md:mx-0 max-md:my-1.5"><p>Licenses</p></li>
            <li className="mr-5 font-bold ml-5 max-md:mx-0 max-md:my-1.5"><p>Support and maintenance</p></li>
          </ul>  
        </div>    
          
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
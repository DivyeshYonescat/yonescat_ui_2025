import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import BoxSection from "@/components/sections/section";
import ContactSection from "@/components/sections/contact";

export default function DataAnalytics() {

  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(prev => !prev);
  };

  return(<>
    <Layout>
      <div className="">
        <div className="container">
          <div className="sub-page-textbox">
            <p className="sub-page-discretion">Data analytics is analyzing raw data to find courses and answers to the questions. It covers a wide variety of techniques that have diverse objectives. It basically helps businesses and individuals to organize and make sense of data.
            With the help of different tools and techniques, data analytics helps establishments succeed and make productive outcomes.</p>
            <p className="sub-page-discretion">Yonescat is an IT-based company that covers all domains of data analytics. From Financial analytics to customer and sales & product analytics along with many more.</p>
            <p className="sub-page-discretion">We at Yonescat manage, analyze and implement data along with providing data analytics consultation for beginners to take the quintessential data analytics strategy. Our services cover every aspect of data analytics and we help your business make successful decisions.</p>
          </div>
          <div className="sub-page-textbox">
            <h3 className="sub-page-title">Obtain, Organize and Understand Your Data In The Most Innovative Ways</h3>
            <p className="sub-page-discretion">In a fast-paced digital world, organizing data is extremely essential and should be the first and foremost priority of every company falling under the IT domains.</p>
            <p className="sub-page-discretion">Getting insights into your data can help boost your business growth immensely. Here is how then data is managed, organized and can be helpful,</p>
          </div>  
        </div>
      </div>
      <div className="section-main">
        <div className="container">
          <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
            <BoxSection rightImage={true} ImageUrl={"/images/dashboard-01.webp"} BgColor={"bg-fuchsia-100/100"} order="order-1">
              {/* <div className="card-main-box-img-text director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">  
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">From Data Lakes To Meaningful Dashboards & Reporting</h3>
                  <p className="leading-[20px] mb-[15px]">It is a centralized repository when all the data is collected in an unorganized manner. All the unstructured, as well as structured data, is stored in one place.</p>
                  {showMore && (<>
                  <p className="leading-[20px] mb-[15px]">However for organizations to store all their miscellaneous data in one place is easy but taking out that one particular set of data from years back is an impossible task when searching for it in a data lake.</p>
                  <p className="leading-[20px] mb-[15px]">The data lake is important but what's more important than that is organizing the data so that end users can access or reach a specific set of data in a short time, avoiding the hassle.</p>
                  <p>Developing dashboards and further categorizing and reporting will help organizations to make their data organized and accessible all the time</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>

            <BoxSection rightImage={true} ImageUrl={"/images/f-02.webp"} BgColor={"bg-fuchsia-100/100"} order="order-1">
              {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Both Internal And External Data</h3>
                  <p className="leading-[20px] mb-[15px]">Information on trends and statistics that businesses discover through their campaigns and strategic operation is Internal Data while external is the information that is provided outside the organization that has been processed.</p>
                  {showMore && (<>
                  <p>According to research, data generated internally is useful for most data analysts. Internal data is supposed to optimize and enhance the efficiency of your business’s operations while external data lets you understand the needs and requirements of your customer base.</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>
            
            <BoxSection rightImage={true} ImageUrl={"/images/img-18.webp"} BgColor={"bg-fuchsia-100/100"} order="order-1">
              {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Data Consultation, Analytics, and Business Insights</h3>
                  <p className="leading-[20px] mb-[15px]">Data analytics can generate insights that can help in driving considerably great benefits. But when a website collects data, it is not organized and segmented.</p>
                  {showMore && (<>
                    <p className="leading-[20px] mb-[15px]">Once through data analytics the data is classified, businesses use that data to analyze which strategy had how much impact on the sales or the outcomes. By knowing which marketing strategy worked the best through the collection of data, organizations analyze and implement accordingly.</p>
                    <p>This is how data analytics leads to an organization’s success. The more efficiently your data is collected, the more success your organization gains.</p>
                  </>)}  
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>

            <BoxSection rightImage={true} ImageUrl={"/images/hero-13-img.webp"} BgColor={"bg-fuchsia-100/100"} order="order-1">
              {/* <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
              <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
                <div className="">
                  <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Putting Data To Work</h3>
                  <p className="leading-[20px] mb-[15px]">Once the data is collected, you as a business, define business aims, understand the source of data, prepare and analyze it. You implement and alter your operations accordingly and then put on a result report that helps you with what lies in the company's favor and which data indicates the most sales.</p>
                  {showMore && (<>
                    <p>A data analyst analyzes data, cleans it first and understands it, and then interprets what the data says about certain campaigns or operations. Therefore, businesses alter and make informed decisions accordingly.</p>
                  </>)}
                  <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>  
            </BoxSection>
          </div>  
        </div>
      </div>
      <div className="container">
        <BoxSection rightImage={true} ImageUrl={"/images/img-04.webp"} BgColor={"bg-fuchsia-100/100"} order="order-1">
            <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Data Best Practices Built-In</h3>
                <p className="leading-[20px] mb-[15px]">When you understand what your target audience expects from you and the requirements, you can launch marketing campaigns and market your products accordingly.</p>
                {showMore && (<>
                  <p className="leading-[20px] mb-[15px]">Data analytics provides you thorough insights into your customer base which brings a great opportunity to customize and alter your customer services according to your targeted customers.</p>
                  <p className="leading-[20px] mb-[15px]">You as a business are able to design and execute operations efficiently. It helps put your operations in a streamline and boosts your business growth by also effectively cutting down additional costs.</p>
                  <p>When you understand your audience and know what they want or need, less time is wasted on bringing up marketing techniques, promoting products that your audience has zero interest in.</p>
                </>)}
                <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
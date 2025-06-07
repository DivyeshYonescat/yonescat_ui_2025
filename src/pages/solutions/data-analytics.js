import ContactSection from "@/components/sections/contact";
import Layout from "@/layout/Layout";

export default function DataAnalytics() {

  return(<>
    <Layout>
      <div className="">
        <div className="container">
          <p className="mb-30px">Data analytics is analyzing raw data to find courses and answers to the questions. It covers a wide variety of techniques that have diverse objectives. It basically helps businesses and individuals to organize and make sense of data.
          With the help of different tools and techniques, data analytics helps establishments succeed and make productive outcomes.</p>
          <p className="mt-[15px] mb-[15px]">Yonescat is an IT-based company that covers all domains of data analytics. From Financial analytics to customer and sales & product analytics along with many more.</p>
          <p>We at Yonescat manage, analyze and implement data along with providing data analytics consultation for beginners to take the quintessential data analytics strategy. Our services cover every aspect of data analytics and we help your business make successful decisions.</p>

          <div className="">
            <h3 className="mt-[30px] mb-[15px]">Obtain, Organize and Understand Your Data In The Most Innovative Ways</h3>
            <p>In a fast-paced digital world, organizing data is extremely essential and should be the first and foremost priority of every company falling under the IT domains.</p>
            <p>Getting insights into your data can help boost your business growth immensely. Here is how then data is managed, organized and can be helpful,</p>
          </div>  

        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
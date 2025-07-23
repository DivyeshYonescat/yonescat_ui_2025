import Layout from "@/layout/Layout";
import InnerHero from "@/layout/hero2";
import ContactSection from "@/components/sections/contact";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WebAndCloudPortals() {
  const pageUrl = usePathname();
  return(<>
    <Layout
      headTitle="Web & Cloud Portals Solutions | Scalable, Secure Platforms for Modern Business"
        metaDescription="Build powerful web and cloud portal solutions tailored for seamless access, real-time collaboration, and secure data management—empowering your digital transformation."
        keywords={"Solutions, Web & Cloud Portals, Cloud-based platforms, Web portal development, Scalable digital solutions"} url={pageUrl}
    >
      <InnerHero imgScr={"/images/animation/solutions/Web-Cloud-Portals.json"} bgImg={"/images/inner-page/web-cloud-bg.webp"}
        title="Web & Cloud Portals" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Creative London based agency will help you to reduce costs and increase productivity</p>}
      />
       <div className="textsection">
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title">What are Web and Cloud Portals?</h3>
            <p className="sub-page-discretion">A web portal, as the term implies, is a website-based platform that offers its customers, suppliers, and employees, with a single source point to information. A web-based portal is created to provide companies with the ability to personalize and streamline their interactions with customers and businesses alike. Web platforms and portals are like web-based getaways that only grant the authorized people access to an organization&apos;s central data, with the aim to carry out effective, management, collaboration, and communication, and data sharing. Cloud systems further continue to provide organizations to work remotely, while carrying out critical business processes.</p> 
          </div>
        </div>
      </div>

      <div className="  pb-0">
        <div className="container">
          <h3>Yonescat Web and Cloud Portals</h3>
          <p>We are in the business for more than 17 years now, and our contributions to the IT sector have been progressing ever since. We’re a software company that aims to provide ease to people in their professional realms. With the rapidly evolving technology sector, we understand the needs of people who want to keep up with the latest advances and up-gradation in information technology. And hence, our well-tailored online availability allows people to customize their businesses as per their targeted clients.</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="sub-page-title">How Web Portals Are Transforming Across Multiple IT platforms</h3>
                <p className="sub-page-discretion">In the past decades, we have seen a substantial evolution of web portals. These have redefined the relationship between the customers and the organizations that serve them. With the power of Microsoft Dynamics and the cloud, web portals are starting to enhance the experiences that partners, customers, and employees get. And we at Yonescat, have kept ourselves in line with this.</p>
                <p>Portals are now being used for numerous purposes within companies across many sectors. “Research portals” allow subscribers to access information safely while their real value in sectors like financial technology or fintech. “Partnership portals” offer better communication by sharing the company’s information, scheduling events, and networking tools. SMEs are rapidly heading towards web portals. In the past years, this technology was limited to big companies to help make their investments profitable. The rise in new portal technologies is promoting smaller companies and their stakeholders to undergo and benefit from these digital transformations and Yonescat shares the same objective.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="sub-page-title">Secure robust infrastructure</h3>
                <p>For professional deployment, Yonescat offers efficient web solutions. Owing to our extensive experience in developing web portals and business solutions for various application areas, we know truly matters. Our expert teams never fail to deliver robust solutions that surpass technological implementations.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="sub-page-title">Unified codebase Edge-to-Cloud Platform</h3>
                <p className="sub-page-discretion">The outburst of data creates a highly increasing number of connected devices that give an opportunity to build innovative applications. To make the most of this opportunity, Yonescat uses a unified data platform with modern architecture to deliver fast-moving data.</p>
                <p className="sub-page-title font-bold">How is a unified data platform architecture advantageous?</p>
                <p className="sub-page-discretion">Yonescat’s consistent data platform that ranges from the edge to the data center helps in appropriate cleaning, filtering, enrichment, analytics, and processing at the layer of computing. Through this, we focus on better efficiency, improved responsiveness, high agility, and manageability.</p>
              </div>
            </div>

             <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">4</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="sub-page-title">Next-Generation Customer Web Portal</h3>
                <p>Yonescat is all set to launch its Next Generation Customer Portal. It provides a comprehensive customer experience that greatly differs from the usual, transactional portal approach. The utilization of such a web portal assures a new and innovative solution that assists the interactions for our customers on a single web-based platform.</p>
                <Image  width={900} height={500}  priority={true} src={"/images/main/svg/napkin-selection.svg"} alt="list Image" />
              </div>
            </div>
          </div>
        </div>
      </div>   
      <ContactSection/>
    </Layout>
  </>)
}
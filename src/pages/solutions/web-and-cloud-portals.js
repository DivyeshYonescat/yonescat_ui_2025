import Layout from "@/layout/Layout";
import InnerHero from "@/layout/hero2";
import ContactSection from "@/components/sections/contact";

export default function WebAndCloudPortals() {
  return(<>
    <Layout>
      <InnerHero imgScr={"/images/animation/solutions/Web-Cloud-Portals.json"} 
        title="Web & Cloud Portals" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Creative London based agency will help you to reduce costs and increase productivity</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
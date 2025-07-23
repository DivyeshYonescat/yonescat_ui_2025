import Layout from "@/layout/Layout";
import ContactSection from "@/components/sections/contact";
import InnerHero from "@/layout/hero2";
import { usePathname } from "next/navigation";


export default function SoftwareDevelopment() {
  const pageUrl = usePathname();
  return(<>
    <Layout
       headTitle="Software Development Solutions | Build Secure, Scalable & Custom Applications"
        metaDescription=" Accelerate innovation with tailored software development solutions—full-cycle services to design, develop, and deploy secure, high-performance applications that meet your business goals."
        keywords={"Solutions, Software Development, Custom software, Scalable applications, End-to-end "} url={pageUrl}
    >
      <InnerHero imgScr={"/images/animation/solutions/Software-Development.json"} bgImg={"/images/inner-page/software-bg.webp"} 
        title="Software Development" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Unify, streamline your business with custom applications</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
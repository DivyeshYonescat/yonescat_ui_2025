import Layout from "@/layout/Layout";
import ContactSection from "@/components/sections/contact";
import InnerHero from "@/layout/hero2";
import { usePathname } from "next/navigation";


export default function SoftwareDevelopment() {
  const pageUrl = usePathname();
  return(<>
    <Layout
       headTitle="Yonescat Services in Software Development | Yonescat"
        metaDescription="Innovative and user-centered applications that support easy access and streamlined business processes. "
        keywords={"Solutions, Software Development"} url={pageUrl}
    >
      <InnerHero imgScr={"/images/animation/solutions/Software-Development.json"} bgImg={"/images/inner-page/software-bg.webp"} 
        title="Software Development" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Unify, streamline your business with custom applications</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
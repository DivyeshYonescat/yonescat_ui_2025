import Layout from "@/layout/Layout";
import ContactSection from "@/components/sections/contact";
import InnerHero from "@/layout/hero2";


export default function SoftwareDevelopment() {
  return(<>
    <Layout>
      <InnerHero imgScr={"/images/animation/solutions/Software-Development.json"} bgImg={"/images/inner-page/software-bg.webp"} 
        title="Software Development" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Unify, streamline your business with custom applications</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
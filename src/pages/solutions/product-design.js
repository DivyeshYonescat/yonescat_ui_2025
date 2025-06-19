import Layout from "@/layout/Layout";
import InnerHero from "@/layout/hero2";
import ContactSection from "@/components/sections/contact";

export default function ProductDesign() {
  return(<>
    <Layout>
      <InnerHero imgScr={"/images/animation/solutions/Product-Design1.json"} 
        title="Product Design" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Build the next product with environmentally sensitive design in mind</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
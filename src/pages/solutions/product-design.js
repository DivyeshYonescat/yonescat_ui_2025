import Layout from "@/layout/Layout";
import InnerHero from "@/layout/hero2";
import ContactSection from "@/components/sections/contact";

export default function ProductDesign() {
  return(<>
    <Layout> 
      <InnerHero imgScr={"/images/animation/solutions/Product-Design1.json"} bgColor={"rgba(199, 213, 254, 0.40)"}  
        title="Product Design" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Build the next product with environmentally sensitive design in mind</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
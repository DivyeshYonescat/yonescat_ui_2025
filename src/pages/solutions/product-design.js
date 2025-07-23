import Layout from "@/layout/Layout";
import InnerHero from "@/layout/hero2";
import ContactSection from "@/components/sections/contact";
import { usePathname } from "next/navigation";

export default function ProductDesign() {
  const pageUrl = usePathname();
  return(<>
    <Layout
       headTitle="Product Design Solutions | Transform Ideas into Intuitive, Scalable Products"
        metaDescription="Bring your vision to life with expert product design solutions—focused on user experience, functionality, and innovation to build products that truly resonate and perform."
        keywords={"Solutions, Product Design, UX/UI design, User-centered design, Digital product development"} url={pageUrl}
    > 
      <InnerHero imgScr={"/images/animation/solutions/Product-Design1.json"} bgImg={"/images/inner-page/product-design-bg.webp"}  
        title="Product Design" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Build the next product with environmentally sensitive design in mind</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
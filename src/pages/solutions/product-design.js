import Layout from "@/layout/Layout";
import InnerHero from "@/layout/hero2";
import ContactSection from "@/components/sections/contact";
import { usePathname } from "next/navigation";

export default function ProductDesign() {
  const pageUrl = usePathname();
  return(<>
    <Layout
       headTitle="Yonescat Services in Product Design | Yonescat"
        metaDescription="Innovative and user-centered applications that support easy access and streamlined business processes. "
        keywords={"Solutions, Product Design"} url={pageUrl}
    > 
      <InnerHero imgScr={"/images/animation/solutions/Product-Design1.json"} bgImg={"/images/inner-page/product-design-bg.webp"}  
        title="Product Design" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">Build the next product with environmentally sensitive design in mind</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
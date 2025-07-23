import ContactSection from "@/components/sections/contact";
import InnerHero from "@/layout/hero2";
import Layout from "@/layout/Layout";
import { usePathname } from "next/navigation";

export default function AIAndMachineLearning() {
  const pageUrl = usePathname();
  return(<>
    <Layout headTitle={"Yonescat Services in Ai & Machine Learning | Yonescat"} 
        metaDescription={"Yonescat - We Design Solutions"} 
        keywords={"Solutions, Ai & Machine Learning"} url={pageUrl}>
      <InnerHero imgScr={"/images/animation/solutions/Ai-Machine-Learning.json"} bgImg={"/images/inner-page/ai-bg.webp"} 
        title="Ai & Machine Learning" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        brncolor={"whitebtn"} subtitle={<p className="sub-page-discretion">The things to consider when building an AI or ML algorithm</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
import ContactSection from "@/components/sections/contact";
import InnerHero from "@/layout/hero2";
import Layout from "@/layout/Layout";
import { usePathname } from "next/navigation";

export default function AIAndMachineLearning() {
  const pageUrl = usePathname();
  return(<>
    <Layout headTitle={"AI & Machine Learning Solutions | Drive Innovation with Expert Technologies"} 
        metaDescription={"Harness the power of AI & Machine Learning with our tailored solutions that boost efficiency, automate processes, and unlock new business opportunities—partner with us today."} 
        keywords={"Solutions, AI & Machine Learning, Artificial Intelligence services, Machine Learning solutions"} url={pageUrl}>
      <InnerHero imgScr={"/images/animation/solutions/Ai-Machine-Learning.json"} bgImg={"/images/inner-page/ai-bg.webp"} 
        title="Ai & Machine Learning" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        brncolor={"whitebtn"} subtitle={<p className="sub-page-discretion">The things to consider when building an AI or ML algorithm</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
import ContactSection from "@/components/sections/contact";
import InnerHero from "@/layout/hero2";
import Layout from "@/layout/Layout";

export default function AIAndMachineLearning() {
  return(<>
    <Layout>
      <InnerHero imgScr={"/images/animation/solutions/Ai-Machine-Learning.json"} 
        title="Ai & Machine Learning" note="Feel free to contact us. Happy to help" cta="Get in touch" link="/contact"
        subtitle={<p className="sub-page-discretion">The things to consider when building an AI or ML algorithm</p>}
      />
      <ContactSection/>
    </Layout>
  </>)
}
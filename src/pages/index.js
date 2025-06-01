import dynamic from "next/dynamic";
import HomeHero from "@/components/hero/HomeHero"
import FlotingGrid from "@/components/sections/FlotingGrid";
import Layout from "@/layout/Layout";
import CompanyAchievementsSection from "@/components/sections/companyAchievementsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutUs from "@/components/sections/aboutUs";


const DynamicClients = dynamic(() => import('@/components/sections/Client'),{ssr:true});
const ParallaxVideoReveal = dynamic(()=> import('@/components/sections/VideoExtendSection'),{ssr:true});

export default function Home() {
  return (
    <>
      <Layout>
        <HomeHero></HomeHero>
        <FeaturesSection />
        {/* <ParallaxVideoReveal></ParallaxVideoReveal> */}
        <AboutUs />
        <CompanyAchievementsSection />
        <DynamicClients title={"Loved And Trusted By Client"} />

        {/* <FlotingGrid></FlotingGrid> */}
        {/* <section className="h-[100vh] w-full"></section> */}
         
      </Layout>
    </>
  );
}
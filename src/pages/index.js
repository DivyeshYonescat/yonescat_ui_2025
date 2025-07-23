import dynamic from "next/dynamic";
import Head from "next/head";
import HomeHero from "@/components/hero/HomeHero"
import FlotingGrid from "@/components/sections/FlotingGrid";
import Layout from "@/layout/Layout";
import CompanyAchievementsSection from "@/components/sections/companyAchievementsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutUs from "@/components/sections/aboutUs";


// import CanvasWrapper from "@/components/animators/demo//canvaswrapper";
// import UiOverlay from "@/components/animators/demo/UiOverlay";


const DynamicClients = dynamic(() => import('@/components/sections/Client'),{ssr:true});
const ParallaxVideoReveal = dynamic(()=> import('@/components/sections/VideoExtendSection'),{ssr:true});

export default function Home() {
  return (
    <>
      {/* <main className="relative h-screen w-screen overflow-hidden bg-[#1E1A28]">
        <CanvasWrapper />
        <UiOverlay />
      </main> */}

      <Head>
        <title>Home | Yonescat</title>
        <meta name="description" content="Welcome to Your Website Name. Explore our services and offerings." />
        <meta name="keywords" content="website, services, home, explore" />
        <meta property="og:title" content="Home | Your Website Name" />
        <meta property="og:description" content="Welcome to Your Website Name. Explore our services and offerings." />
        <meta property="og:url" content="https://yonescat.com" />
        <meta property="og:image" content="https://yonescat.com/og-image.jpg" />
        <link rel="icon" href={"/images/main/favicon.ico"} type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href={"/images/main/favicon-16x16.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={"/images/main/favicon-32x32.png"} />
      </Head> 

      <Layout>
        <HomeHero></HomeHero>
        <FeaturesSection />
        <AboutUs />
        {/* <ParallaxVideoReveal /> */}
        <CompanyAchievementsSection />
        <DynamicClients title={"Loved And Trusted By Client"} />

        {/* <FlotingGrid></FlotingGrid> */}
        {/* <section className="h-[100vh] w-full"></section> */}
         
      </Layout>
    </>
  );
}
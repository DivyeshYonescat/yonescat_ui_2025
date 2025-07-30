import Link from "next/link";
import dynamic from "next/dynamic";
import { Button, buttonVariants } from "@/components/ui/button"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


// Lazy load the CylinderScene component
// const Background = dynamic(() => import("@/components/Background"), { ssr: false });

const HomeHero = function () {
  return (
    <section className="hero-main relative">
      <div className="hero-main-inner absolute top-0 bottom-0 left-0 right-0 z-0 flex justify-center itme bg-center bg-no-repeat" style={{backgroundImage:`url(/images/hero-animation/Hero-2.png)` }}>
        {/* <DotLottieReact className="max-w-[1000px] w-full max-lg:w-[600px] max-sm:w-[400px] h-auto m-auto" src={"/images/hero-animation/07-Background-animation.json"} loop autoplay /> */}
      </div>
      <div className="container relative">
        <div className="grid items-center gap-7 hero-inner">
          <div className="grid-textbox hero-text" >
            <h1 className="" style={{lineHeight:"1.1"}} >Innovative Design & Development Solutions for Your Business</h1>
            <p className="mb-8">Invest in outstanding startups, find investments for your business, involve the best in your ideas.</p>
            <Link className={buttonVariants({ variant: "", size:"lg"})} href={"/infrastructure"}>Explore Our Services</Link>
          </div>
          <div className="hero-image flex items-center relative" >
            {/* <CylinderScene/> */}
              <DotLottieReact className="w-full max-w-[500px] max-lg:w-[600px] max-sm:w-[400px] h-auto m-auto" src={"/images/hero-animation/TEchnology.json"} loop autoplay />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
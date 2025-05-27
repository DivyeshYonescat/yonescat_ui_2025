import Link from "next/link";
import dynamic from "next/dynamic";
import { Button, buttonVariants } from "@/components/ui/button"


// Lazy load the CylinderScene component
// const Background = dynamic(() => import("@/components/Background"), { ssr: false });

const HomeHero = function () {
  return (
    <section className="hero-main relative">
      {/* <Background></Background> */}
      <div className="container relative z-10">
        <div className="grid items-center gap-7 hero-inner">
          <div className="grid-textbox hero-text" >
            <h1 className="" style={{lineHeight:"1.1"}} >Innovative Design & Development Solutions for Your Business</h1>
            <p className="mb-8">Invest in outstanding startups, find investments for your business, involve the best in your ideas.</p>
            <Link className={buttonVariants({ variant: "outline", className:'bg-gray-900 text-white border-black hover:bg-transparent hover:text-gray-900 hover:border-gray-900 px-8  py-5'})} href={"/services"}>Explore Our Services</Link>
          </div>
          {/* <div className="h-[700px] hero-image" >
            <CylinderScene/>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
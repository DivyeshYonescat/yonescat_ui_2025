import Link from "next/link";
import dynamic from "next/dynamic";


// Lazy load the CylinderScene component
// const Background = dynamic(() => import("@/components/Background"), { ssr: false });

const HomeHero = function () {
  return (
    <section className="hero-main relative">
      {/* <Background></Background> */}
      <div className="container relative z-10">
        <div className="grid items-center gap-7 hero-inner">
          <div className="grid-textbox hero-text" >
            <h1 className="" >Innovative Design & Development Solutions for Your Business</h1>
            <p>Invest in outstanding startups, find investments for your business, involve the best in your ideas.</p>
            <Link className="btn" href={"/services"}>Explore Our Services</Link>
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
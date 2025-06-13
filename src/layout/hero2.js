import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function InnerHero({imgScr,}) {
  return(<>
    <section className="hero-main hero-main-subpage relative !bg-[#61b398]">
      <div className="container">
        <div className="grid items-center gap-7">
          <div className="grid-textbox hero-text" >
            <h1 className="!text-stone-100" style={{lineHeight:"1.1"}} >Innovative Design & Development Solutions for Your Business</h1>
            <p className="mb-8 text-stone-100">Invest in outstanding startups, find investments for your business, involve the best in your ideas.</p>
            <Link className={buttonVariants({ variant: "outline", className:'bg-stone-900 text-stone-100 border-stone-900 hover:bg-transparent hover:text-stone-900 hover:border-stone-900 px-8  py-5'})} href={"/services"}>Explore Our Services</Link>
          </div>
          <div className="">
            <Image src={"/images/main/ai-image.webp"} width={723} height={1066} alt={"Hero Section inenr page"} />
          </div>
        </div>
      </div>
    </section>
  </>)
}
"use client";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import Lottie from 'lottie-react';
 import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function InnerHero({imgScr,title,  subtitle,  cta,  link,  note}) {
  return(<>
    <section className="hero-subpage relative bg-[#61b398]">
      <div className="container">
        <div className="grid grid-cols-[40%_60%] max-lg:grid-cols-1 min-h-[400px]">
          <div className="grid-textbox  hero-text flex items-center py-0 max-lg:py-[30px_20px]" >
            <div>
              {title && <h2 className="sub-page-title">{title}</h2>}

              {subtitle && <div>{subtitle}</div>}

             <Link className={buttonVariants({ variant: "outline", className:'mt-[30px] max-lg:mt-[15px] bg-stone-900 text-stone-100 border-stone-900 hover:bg-transparent hover:text-stone-900 hover:border-stone-900 px-8  py-5'})} href={link}>{cta}</Link>
            </div>  
          </div>
          <div className="flex items-center">
            {imgScr != null && <>
              <DotLottieReact className="w-full  max-lg:w-[600px] max-sm:w-[400px] h-auto m-auto" src={imgScr} loop autoplay />
            </>}
          </div>
        </div>
      </div>
    </section>
  </>)
}
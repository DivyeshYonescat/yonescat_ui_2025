"use client";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import Lottie from 'lottie-react';
 import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Background from "@/components/Background";


export default function InnerHero({bgImg, imgScr,title,  subtitle,  cta,  link, brncolor,  note}) {
  return(<>
    <section className={`hero-subpage relative`} style={{backgroundImage:`url(${bgImg})` }}>
      <div className="container">
        <div className="grid grid-cols-[40%_60%] max-lg:grid-cols-1 min-h-[400px]">
          <div className="grid-textbox  hero-text flex items-center py-0 max-lg:py-[30px_20px]" >
            <div>
              {title && <h2 className="sub-page-title">{title}</h2>}

              {subtitle && <div className="mb-[30px] max-lg:mb-[15px] max-xl:mb-[15px]">{subtitle}</div>}

             <Link className={buttonVariants({ variant: "outline", size:"lg" ,className:`${brncolor}`})} href={link}>{cta}</Link>
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
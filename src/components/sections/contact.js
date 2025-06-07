
import React from "react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import Link from "next/link";


export default function ContactSection() {
  return(<>
    <div className="section-main contact-main">
      <div className="container">
        <div className="contact-inner flex justify-center items-center max-md:flex-col max-md:">
          <div className="containt-img w-[40%] max-lg:w-[50%] text-center">
            <div className="w-[400px] h-[400px] max-lg:w-[100%] max-lg:h-[100%]  m-auto border-4 border-stone-900"> 
              <Image className="p-2.5 mt-[-25px] ml-[-25px]" src={"/images/receiverspace.jpg"} width={400} height={400} alt="contact-Iametg"/>
            </div>
          </div>
          <div className="containt-text w-[60%] max-lg:w-[50%] max-md:w-full p-[30px]">
            <h3 className="mb-[20px]">High consideration of support maintenance and upkeep</h3>
            <p className="mb-[10px]">Yonescat understands the need for timely maintenance of mobile apps and is aware of finely investing in support services. Our upkeep of the mobile app ensures that it performs seamlessly with a bug-free operation of our live mobile apps</p>
            <p className="mb-[30px]">From refining, fixing, monitoring to updating our features, we focus to build a successful mobile app. Our objective is to not only aim for the highest rate of downloads but also an ever-increasing rate of active users with a high retention rate as well</p>
            <Link href={'/about'} className={buttonVariants({ variant: "outline", className:'hover:bg-gray-900 hover:text-stone-100 border-stone-900 px-8  py-5 font-bold'})}>Contact Us</Link>
         </div>
        </div>  
      </div>
    </div>

  </>)
}
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CounterUp from "../counterUp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button, buttonVariants } from "@/components/ui/button"
gsap.registerPlugin(ScrollTrigger);

const CompanyAchievementsSection = () => {

  const copmAchievment = [
    { icone:"client.svg", title:"Satisfied Client", count:"50"},
    { icone:"project.svg", title:"Successful Projects", count:"1050"},
    { icone:"group.svg", title:"Motivated Staff", count:"75"},
    { icone:"quality.svg", title:"Years Of experience", count:"15"}
  ]

  return (<>
    <div className=" section-main  bg-gradient-to-tr from-yellow-50 to-yellow-50 bg-[radial-gradient(circle, rgba(235, 232, 221, 0.98) 0%, rgba(229, 237, 228, 1) 100%)] ">
      <div className="container">
        <div className=" w-full flex flex-wrap justify-between items-center">
          <div className=" w-[100%] md:w-[60%] lg:w-[60%] text-center">
            <div className="md:max-w-[350px] lg:max-w-[500px] xl:max-w-[600px] m-auto">
              <h2 className="font-bold leading-none">Lorem Ipsum is simply dummy text  </h2>
              <p className=" py-[30px]">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
              <Link href={"/aboutus"} className={buttonVariants({ variant: "outline", className:'bg-transparent hover:bg-gray-900 hover:text-stone-100 border-stone-900 px-8  py-5'})}>About More</Link>
              {/* <button className="btn">About More</button> */}
            </div>
          </div>
          <div className="comp-achieve-list w-[100%] md:w-[40%] lg:w-[40%] mt-0 sm:mt-8 md:mt-0">
            {copmAchievment.map((item) => (
              <div key={item.icone} className="flex flex-row justify-between items-center w-full border-b border-stone-900 border-solid py-[25px] max-sm:py-[15px] sm:py-[15px] lg:py-[25px]">
                <div className="flex flex-row justify-start items-center">
                  <Image src={`/images/main/svg/${item.icone}`} alt="client" width={50} height={50} />
                  <p className="mx-5 text-lg font-bold">{item.title}</p>
                </div>
                <div className="text-4xl max-sm:text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                  <CounterUp end={item.count} />
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default CompanyAchievementsSection;
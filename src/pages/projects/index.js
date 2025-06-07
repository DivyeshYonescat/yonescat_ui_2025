import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import use from "@/lib/use";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Layout from "@/layout/Layout";
import { Button, buttonVariants } from "@/components/ui/button"
import { getTags , getProjectList , getProjectListFilter } from "@/api/projects";
const DynamicClients = dynamic(() => import('@/components/sections/Client'),{ssr:true});
export default function Home() {
  const ProjectsType=[
    {image:"robot_solid.svg",title:"AI and Machine Learning"},{image:"magnifying_glass.svg",title:"Data Analytics"},{image:"screwdriver_wrench.svg",title:"Decentralized Systems"},{image:"store_solid.svg",title:"E-commerce"},{image:"screwdriver_wrench.svg",title:"IoT"},
    {image:"mobile_button.svg",title:"Mobile Applications"},{image:"product_hunt.svg",title:"Product Design"},{image:"dev_brands.svg",title:"Software Development"},{image:"vr_cardboard_.svg",title:"Virtual Reality"},{image:"cloud_solid.svg",title:"Web & Cloud Portals"},
  ]
  const list=[
    {image:"",title:"RAS (Royal Astronomical Society)",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"Circulation Foundation",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"Eco Active",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"IQ Group",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"AR TIfication",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"RAS (Royal Astronomical Society)",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"Circulation Foundation",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"Eco Active",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"IQ Group",type:"AI and Machine Learning", year:"2024"},
    {image:"",title:"AR TIfication",type:"AI and Machine Learning", year:"2024"},
  ]
  return (<>
    <Layout> 
      <div className="section-main project">
        <div className="container">
          <div className="about_title w-[75%] py-[50px_50px]">
            <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
            <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 19 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
          </div>
          
          <div className="project_type grid grid-cols-[25%_75%]">
            <div className="">
              <div className="project-type-list sticky top-[80px]">
                <Button variant="outline" className="hover:bg-gray-900 hover:text-stone-100 border-stone-900 flex px-2 py-5 font-bold">
                  <Image src={"/images/project_icone/all.svg"} width={20} height={20} alt="type-icone" />
                  All Projects
                  </Button>
                {ProjectsType.map((item) => (<>
                    <Button variant="outline" className="hover:bg-gray-900 hover:text-stone-100 border-stone-900 px-2 py-5 font-bold m-1">
                      <Image src={`/images/project_icone/${item.image}`} width={20} height={20} alt="type-icone" />
                      {item.title}
                    </Button>
                </>))}
              </div> 
            </div>
            <div className="project-list grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3">
              {list.map((item,index)=>(<>
              <div key={"project_"+index} className="project-box bg-stone-200/100 shadow-2xs p-5 rounded-2xl relative max-lg:p-2.5 ">
                <span className="text-stone-800 font-semibold text-[14px]">|| {item.year}</span>
                <h6 className="text-stone-800 mt-[10px] mb-[15px] font-semibold ">{item.title}</h6>
                <Image className="rounded-md m-auto" src="/images/image_1.webp" alt="dmeousr" width={400} height={400}/>
                <span className="text-[12px] absolute bottom-9 right-9 px-2 py-1 font-semibold bg-stone-200 rounded-lg">{item.type}</span>
              </div>
              </>))}    

            </div>
          </div>  
        </div>
      </div> 
      <DynamicClients title={"Loved And Trusted By Client"} />
    </Layout>              
  </>)
}
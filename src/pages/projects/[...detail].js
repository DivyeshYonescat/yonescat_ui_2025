'use client';
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import { getProjectByid } from "@/api/projects";
import use from "@/lib/use";
//import ProjectDetailLoader from "@/components/contentLoaders/ProjectDetailLoader";



export default function Home(){
  const router = useRouter();
  const pageUrl = usePathname();
  const projectParams = useParams();
  
  const projectId =  projectParams?.detail.length > 0 ? projectParams?.detail[1] : null;

  //Project Details List
  const [projectDetails, setProjectDetails] = useState(null);
  const [projectDetailserror, setProjectDetailsError] = useState(null);

  // function call all data
  useEffect(() => {
    
    const getProject = async () => {
      if(projectId !== null){
        const result = await getProjectByid(projectId);
        if (result.success) {
          setProjectDetails(result.data.data);
        }else{
          if(result.errors.status === 404){
          router.replace('/404')
          }
        }
      }  
    }  
    getProject(projectId);
  }, [projectId, router]);
  return(<>
    <Layout url={pageUrl} headTitle={"Project Details | In-Depth Case Studies Showcasing Our Expertise"} metaDescription={"Explore comprehensive Project Details that highlight our process, challenges, and successful outcomes—see how we bring client visions to life with innovation and precision."}  keywords={"Project Details, Case study, Project overview, Client solutions"} >
      <div className="section-main project pb-0">
        <div className="container">
            <div className="about_title w-[75%] py-[30px_50px] max-xl:w-full ">
              <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
              <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 19 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
            </div>
            {projectDetails !== null && projectDetails !== undefined ? <>
              <div className="project-description">
                {/* PROJECT TITLE */}
                {/* Title */}
                <h2 className="project-title">{projectDetails.Title}</h2>
                {/* Project Data */}
                <div className="grid grid-cols-1 sm:grid-cols-3 my-4.5 sm:my-8 text-center">
                  <p className="p-lg"><b>Category: </b> Development</p>
                  <p className="p-lg max-sm:my-2 my-0"><b>Start Date: </b>  {use.setDateFormet(projectDetails.updatedAt)}</p>
                  {/* <p className="p-lg"><b>Handover:</b> {use.setDateFormet(projectDetails.updatedAt)}</p> */}
                  {projectDetails.ProjectUrl !== "" && projectDetails.ProjectUrl !== null && projectDetails.ProjectUrl !== undefined &&
                    <p className="p-lg"><b>Website URl: </b><Link href={projectDetails.ProjectUrl} className="color--theme">www.website.com</Link></p>
                  }
                </div>
                {/* PROJECT PREVIEW IMAGE  */}
                <div className="project-priview-img">
                  <Image className="img-fluid r-16 max-h-96 m-auto w-!auto" priority={true}  alt="Description of the image" 
                    src={use.getImagePath(projectDetails.Screenshots[0])} height={projectDetails.Screenshots[0].height} 
                    width={projectDetails.Screenshots[0].width}  
                  />
                </div>
                {/* PROJECT TEXT */}
                <div className="project-txt">
                  <p className="mt-12">{projectDetails.Description}</p>
                  {/* Small Title */}
                  <h3 className="max-xl:mt-8 xl:mt-12 mb-4">Overview &amp; Challenge</h3>
                  {/* Text */}
                  <p>{projectDetails.Overview} </p>
                  {/* Small Title */}
                  <h3 className="max-xl:mt-8 xl:mt-12 mb-4">Project Summary</h3>
                  <p>{projectDetails.ProjectSummary ?  projectDetails.ProjectSummary : "No Summary"} </p>
                  {/* Small Title */}
                  <h3 className="max-xl:mt-8 xl:mt-12 mb-4">Solution &amp; Results</h3>
                  {/* Text */}
                  <p> {projectDetails.SolutionResults} </p>
                  {/* List */}
                </div>
                {/* MORE PROJECTS BUTTON */}
                
                <h4 className="w-full text-end my-8">
                  <Link className="d-inherit" href="/projects">
                    More Projects <span className="flaticon-next mt-[-8px]" />
                  </Link>
                </h4>
                
              </div>  
            </>:""}
        </div>
      </div>
    </Layout>
  
  </>)
}
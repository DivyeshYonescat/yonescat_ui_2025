import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import { getProjectByid } from "@/api/projects";
//import ProjectDetailLoader from "@/components/contentLoaders/ProjectDetailLoader";



export default function Home(){
  const router = useRouter();
  const pageUrl = usePathname();
  // const projectParams = useParams();
  // const projectId =  projectParams.projectDetail.length > 0 ? projectParams.projectDetail[1] : null;
  //Project Details List
  const [projectDetails, setProjectDetails] = useState({
  Title:"RAS (Royal Astronomical Society)",
  Screenshots:[],
  ProjectUrl:"https://yonescat.com/_next/image?url=https%3A%2F%2Fadmin.yonescat.com%2Fuploads%2Fimage_1_69c7f5ae3f.png&w=1920&q=75",

  Description:"This is Description",
  ProjectSummary:"This is Project Summary",
  SolutionResults:"This is Solution Results"
  });
  const [projectDetailserror, setProjectDetailsError] = useState(null);

  // function call all data
  // useEffect(() => {
  //   const getProject = async () => {
  //     if(!projectId) { 
  //       router.replace('/404');
  //       return;
  //     }
  //     const result = await getProjectByid(projectId);
  //     if (result.success) {
  //       setProjectDetails(result.data.data);
  //     }else{
  //       if(result.errors.status === 404){
  //         router.replace('/404')
  //       }
  //     }
  //   }
  //   getProject(projectId);
  // }, [projectId, router]);
  return(<>
    <Layout>
      <div className="section-main">
        <div className="container">
          <div className="project">
            {projectDetails !== null && projectDetails !== undefined ? <>
              <div className="project-description">
                {/* PROJECT TITLE */}
                <div className="project-title">
                  {/* Title */}
                  <h2 className="mb-[35px] pb-10 border-b-[#ddd] border-b border-solid;">{projectDetails.Title}</h2>
                  {/* Project Data */}
                  <div className="project-data">
                    <div className="grid grid-cols-3">
                      <p className="p-lg"><span>Category:</span> Development</p>
                      <p className="p-lg"><span>Category:</span> Development</p>
                      
                      
                      {/* <div className="col">
                        <p className="p-lg"><span>Start Date:</span> {use.setDateFormet(projectDetails.updatedAt)} </p>
                      </div>
                      <div className="col">
                        <p className="p-lg"><span>Handover:</span> {use.setDateFormet(projectDetails.updatedAt)} </p>
                      </div> */}
                      {projectDetails.ProjectUrl !== "" && projectDetails.ProjectUrl !== null && projectDetails.ProjectUrl !== undefined ?
                        <div className="col">
                          <p className="p-lg"><Link href={projectDetails.ProjectUrl} className="color--theme">www.website.com</Link></p>
                        </div>
                      : ""}
                    </div>
                  </div>
                </div>
                {/* PROJECT PREVIEW IMAGE  */}
                
                {/* <div className="project-priview-img mb-50">
                  <Image className="img-fluid r-16" priority={true} 
                    width={projectDetails.Screenshots[0].width} height={projectDetails.Screenshots[0].height} alt="Description of the image" 
                    src={use.getImagePath(projectDetails.Screenshots[0])}
                  />
                </div> */}
                {/* PROJECT TEXT */}
                <div className="project-txt">
                  <p>{projectDetails.Description}</p>
                  {/* Small Title */}
                  <h3 className="s-24 w-700 mt-35 mb-35">Overview &amp; Challenge</h3>
                  {/* Text */}
                  <p>{projectDetails.Overview} </p>

                  {/* Small Title */}
                  <h3 className="s-24 w-700 mt-50 mb-35">Project Summary</h3>
                  
                  <p>{projectDetails.ProjectSummary ?  projectDetails.ProjectSummary : "No Summary"} </p>
                    
                  {/* Small Title */}
                  <h3 className="s-24 w-700 mt-50 mb-35">Solution &amp; Results</h3>
                  {/* Text */}
                  <p> {projectDetails.SolutionResults} </p>
                  {/* List */}
                  
                </div>
                {/* MORE PROJECTS BUTTON */}
                <div className="more-projects ico-25 text-end pb-100 d-flex align-items-center justify-content-end">
                  <Link className="d-inherit" href="/projects">
                    <h4 className="s-35 w-700">More Projects <span className="flaticon-next" /></h4>
                  </Link>
                </div>
              </div>  
            </>:""}
          </div>  
        </div>
      </div>
    </Layout>
  
  </>)
}
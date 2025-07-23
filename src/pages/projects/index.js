import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import use from "@/lib/use";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Layout from "@/layout/Layout";
import { Button, buttonVariants } from "@/components/ui/button"
import { getTags , getProjectList , getProjectListFilter } from "@/api/projects";
import Pagination from "@/components/Pagination";

const DynamicClients = dynamic(() => import('@/components/sections/Client'),{ssr:true});

export default function Home() {
  const pageUrl = usePathname();
  const pageSize = 10;

  const [activeTab, setActiveTab] = useState("all");
  
  //Get tag fetch data
  const [listTag, setListTag] = useState([]);
  //Get Project fetch data
  const [listProject, setListProject] = useState(null);
  const [tagListProjectLoding, setListProjectLoding] = useState(false);

  //Get Project Tag list fetch data
  const getTegList = async () => {
    const tags = await getTags();
    if (tags.success) {
      setListTag(tags.data.data);
    }
  };

  //Get Project list fetch data
  const getProjectListData = async () => {
    setListProjectLoding(true);
    // Project list
    const projectList= await getProjectList({pageSize:pageSize});
    if (projectList.success) {
      setListProjectLoding(false);
      // Project list
      setListProject(projectList.data.data);
      // set page 
      setTotalCount(projectList.data.meta.pagination.total);
      setCurrentPage(projectList.data.meta.pagination.page);
      setPageCount(projectList.data.meta.pagination.pageCount);
      setActiveTab("all")
    }else{
      setListProjectLoding(false);
    }
  };

  // function call all data
  useEffect(() => {
    getTegList();
    getProjectListData();
  }, []);

  //function call to data by tag
  const getProjectbyFilter = async (type) => {
    setListProjectLoding(true);
    const projectList = await getProjectListFilter({page:1,tag:type,pageSize:pageSize});
    if (projectList.success) {
      setListProjectLoding(false);
      // Project list
      setListProject(projectList.data.data);
      // Pagination list
      setTotalCount(projectList.data.meta.pagination.total);
      setCurrentPage(projectList.data.meta.pagination.page);
      setPageCount(projectList.data.meta.pagination.pageCount);
      setActiveTab(type);
    }else{
      setListProjectLoding(false);
    }
  };

  //function call for pagination
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  
  const handlePageChange = async (page) => {
    setListProjectLoding(true);
    const result = await getProjectList({page : page,pageSize:pageSize});
    if (result.success) {
      setListProjectLoding(false);
      // Project list
      setListProject(result.data.data);
      // Pagination list
      setTotalCount(result.data.meta.pagination.total);
      setCurrentPage(result.data.meta.pagination.page);
      setPageCount(result.data.meta.pagination.pageCount);
    }else{setListProjectLoding(false);}
  };

  return (<>
    <Layout headTitle={"Projects | Explore Our Innovative Portfolio and Success Stories"} metaDescription={"Discover how we deliver impactful solutions through our diverse projects. View detailed case studies showcasing creativity, strategy, and measurable results."} keywords={"Projects, Portfolio, Case studies, Client work"} url={pageUrl}> 
      <div className="section-main project pb-0">
        <div className="container">
          <div className="about_title w-[75%] py-[30px_50px] max-xl:w-full ">
            <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
            <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 19 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
          </div>
          
          <div className="project_type grid grid-cols-[20%_80%] max-lg:flex max-lg:flex-col">
            {listTag && listTag.length > 0 && (
              <div className="max-lg:mb-[30px]">
                <div className="project-type-list flex max-lg:flex flex-wrap items-center sticky top-[80px]">
                  <Button variant="outline" className="text-deepsea hover:bg-deepsea hover:text-white flex px-2 py-5" onClick={() => getProjectListData()}>
                    <Image src={"/images/project_icone/all.svg"} width={20} height={20} alt="type-icone" />
                    All Projects
                  </Button>
                  {listTag.map((item) => (<>
                      <Button key={item.Name} variant="outline" className="text-deepsea hover:bg-deepsea hover:text-white px-2 py-5 m-1" onClick={() => getProjectbyFilter(item.Name)}>
                        <Image width={20} height={20} alt="type-icone"  src={use.getImagePath(item.SvgIcon)}  />
                        {item.Name}
                      </Button>
                  </>))}
                </div> 
              </div>
            )}

            {tagListProjectLoding && ( <> 
              <div className="load-project is-loading grid-container">
                <div className="image grid-item"><div></div></div>  
                <div className="image grid-item"><div></div></div>  
                <div className="image grid-item"><div></div></div>  
                <div className="image grid-item"><div></div></div>  
              </div> 
            </> )}

            {tagListProjectLoding === false && ( <>
                {listProject !== null && listProject.length > 0  ? <>
                  <div className="project-list grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3">
                    {listProject.map((item,index)=>(<>
                    <div key={item.documentId} className="project-box bg-stone-200/100 shadow-2xs p-5 rounded-2xl relative max-lg:p-2.5 ">
                      <span className="text-stone-800 font-semibold text-[14px]">|| 2024</span>
                      <Link href={ "/projects/detail/" + item.documentId } aria-label="text-data">
                        <h5 className="text-stone-800 mt-[10px] mb-[15px] font-semibold ">{item.Title}</h5>
                      </Link>
                      <Image className="rounded-md m-auto" priority={true}  width={item.Screenshots[0].width} height={item.Screenshots[0].height}
                        src={use.getImagePath(item.Screenshots[0])} alt="Description of the image"
                      />
                      <span className="text-[12px] absolute bottom-9 right-9 px-2 py-1 font-semibold bg-stone-200 rounded-lg">{item.type}</span>
                    </div>
                    </>))} 
                  </div>
                </> : <> <h2 className="text-center"> No project available for this category </h2> </>} 
            </> )}  
          </div>  

          <div className="py-14 text-center">
            {pageCount > 1 && 
              <Pagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} pageCount={pageCount} onPageChange={handlePageChange} />
            }
          </div>

        </div>
      </div> 
      <DynamicClients title={"Loved And Trusted By Client"} />
    </Layout>              
  </>)
}
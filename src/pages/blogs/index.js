import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import use from "@/lib/use";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Layout from "@/layout/Layout";
import { getBlogsList } from "@/api/blogs";
import Pagination from "@/components/Pagination";

export default function Home() {
    const pageSize = 10;
    const pageUrl = usePathname();

    const [listBlog, setListBlog] = useState();
    //function call for pagination
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    //Get Blog list fetch data
    const getBlogListData = async () => {
      
        const BlogList= await getBlogsList({pageSize:pageSize});
        if (BlogList.success) {
            // Blog list
            setListBlog(BlogList.data.data);
            // set page 
            setTotalCount(BlogList.data.meta.pagination.total);
            setCurrentPage(BlogList.data.meta.pagination.page);
            setPageCount(BlogList.data.meta.pagination.pageCount);
        }
    };

    // function call all data
    useEffect(() => {
        getBlogListData();
    }, []);

    const handlePageChange = async (page) => {
        const result = await getBlogsList({page : page,pageSize:pageSize});
        if (result.success) {
            // Project list
            setListBlog(result.data.data);
            // Pagination list
            setTotalCount(result.data.meta.pagination.total);
            setCurrentPage(result.data.meta.pagination.page);
            setPageCount(result.data.meta.pagination.pageCount);
        }
    };

    return (<>
        <Layout 
          headTitle={"Blogs | Yonescat"} 
          metaDescription={"Yonescat - We Design Solutions"} 
          keywords={"Blogs"} url={pageUrl}
        >
        <section id="blog-page" className="section-main pb-14 inner-page-hero blog-page-section">
          <div className="container">
            <div className="about_title w-[75%] py-[30px_50px] max-xl:w-full ">
            <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
            <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 19 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
          </div>
            {/* POSTS WRAPPER */}
            <div className="posts-wrapper">
              <div className="grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
                {listBlog !== null && listBlog !== undefined && <>
                    {listBlog.map((item, index) => (
                      <div className="blog-post" key={index}>
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img mb-8">
                        {item.Screenshots !== null && item.Screenshots != undefined ? <>
                          <Image priority={true} alt="Description" className="img-fluid"
                            src={use.getImagePath(item.Screenshots[0])}
                            width={item.Screenshots[0].width} height={item.Screenshots[0].height}
                          />
                        </>
                              : 
                        <Image priority={true} className="img-fluid r-16"  width={964} height={600}
                          src="/images/main/blog_default.webp"  alt="Description of the image 001"
                        />
                        }  
                      </div>
                            {/* BLOG POST TEXT */}
                            <div className="blog-post-txt">
                                {/* Post Tag */}
                                <span className="post-tag color--red-400">{item.tag}</span>
                                {/* Post Link */}
                                <h5 className="text-stone-800 mt-[10px] mb-[15px] font-semibold ">
                                    <Link href={"/blogs/blogDetail/" + item.documentId}>{item.Title}</Link>
                                </h5>
                                <p className="truncate">{item.description}</p>
                                <div className="blog-post-meta mt-5 flex  items-center">
                                  <p className="text-sm">By Yonescat Team</p>
                                  <p className="meta-list-divider"><span className="flaticon-minus"></span></p>
                                  <p className="text-sm">{use.setDateFormet(item.updatedAt)}</p>
                                </div>
                            </div>	
                          </div>
                      
                      ))}
                  </>
                }
              </div>
              <div className="py-14 text-center">
                {pageCount > 1 && 
                  <Pagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} pageCount={pageCount} onPageChange={handlePageChange} />
                }
              </div>
            </div>	
          </div>
        </section>    
        </Layout>
    </>)
}
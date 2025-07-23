import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from 'next/router';
import Layout from "@/layout/Layout";
import use from "@/lib/use";
import { getBlogById } from "@/api/blogs";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const pageUrl = usePathname();
  const blogParams = useParams();

  const blogId = blogParams?.detail.length > 0 ? blogParams?.detail[1] : null;
  
  //Blog Details List
  const [blogDetails, setBlogDetails] = useState(null);
  const [blogDetailsError, setBlogDetailsError] = useState(null);
  //Get blogDetails list fetch data


  //function call all data
  useEffect(() => {
    const getBlog = async () => {
      if(blogId !== null){
        const result = await getBlogById(blogId);
        if (result.success) {
          setBlogDetails(result.data.data);
        } else {
          if (result.errors.status === 404) {
            router.replace('/404')
          }
        }
      }
    }

    getBlog(blogId);
  }, [blogId, router]);

  return (
    <>
      <Layout headTitle={"BlogsDetails | In-Depth Articles to Inspire and Inform"} metaDescription={"Dive into BlogsDetails for comprehensive insights and expert analysis on design, technology, and innovation. Get the full story behind every post—engage and discover more."} keywords={"BlogsDetails, Blog posts, Article insights, Detailed blog content"} url={pageUrl}>

        <div>
          <section className="section-main">
            <div className="container">
              <div className="about_title w-[75%] py-[30px_50px] max-xl:w-full ">
                <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
                <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 19 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
              </div>

              {blogDetails !== null && blogDetails !== undefined && <>
                <div className="post-content max-w-5xl m-auto">
                  {/*  SINGLE POST TITLE */}
                  <div className="single-post-title text-center">
                    <span className="post-tag">{blogDetails.tag}</span>
                    <h2>{blogDetails.Title}</h2>
                    <p className="mt-4 md:mt-9">{use.setDateFormet(blogDetails.updatedAt)}</p> 
                  </div>
                  {/* SINGLE POST IMAGE */}
                  {blogDetails.Screenshots !== null ?
                    <div className="blog-post-img py-5 md:py-8 lg:py-12">
                      <Image priority={true} className="img-fluid r-16" width={blogDetails.Screenshots[0].width} height={blogDetails.Screenshots[0].height} src={use.getImagePath(blogDetails.Screenshots[0])} alt={blogDetails.Screenshots[0].documentId} />
                    </div>
                    : ""}
                  {/* SINGLE POST TEXT */}
                  <div className="single-post-txt">
                    {blogDetails.description}
                  </div>

                  <h4 className="w-full text-end mt-8">
                    <Link className="d-inherit" href="/blogs">
                      More Blogs <span className="flaticon-next mt-[-8px]" />
                    </Link>
                  </h4>

                </div>
              </>}
              
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
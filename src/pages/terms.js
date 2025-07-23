import Layout from "@/layout/Layout";
import Terms from "@/components/sections/terms";

export default function Home() {
  return(<>
  <Layout headTitle={"Terms & Conditions | Yonescat"}  metaDescription={"Yonescat - We Design Solutions"}  keywords={"Terms"} >
  <div className="section-main">
    <div className="container">
      <div className="max-w-[1000px] m-auto">
        <Terms />
      </div>
    </div>  
  </div>  
  </Layout>
  </>)
}
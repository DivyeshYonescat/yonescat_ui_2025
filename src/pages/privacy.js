import Privacy from "@/components/sections/privacy";
import Layout from "@/layout/Layout";

export default function Home() {
  return(<>
    <Layout headTitle={"Privacy Policy | Yonescat"}  metaDescription={"Yonescat - We Design Solutions"}  keywords={"Privacy Policy"} >
    <div className="section-main">
      <div className="container">
        <div className="max-w-[1000px] m-auto">
        <Privacy />  
        </div>
      </div>  
    </div>  
    </Layout>
  </>)
}
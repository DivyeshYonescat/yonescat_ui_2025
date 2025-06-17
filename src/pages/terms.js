import Layout from "@/layout/Layout";
import Terms from "@/components/sections/terms";

export default function Home() {
  return(<>
  <Layout>
  <div className="section-main">
    <div className="container">
      <Terms />
    </div>  
  </div>  
  </Layout>
  </>)
}
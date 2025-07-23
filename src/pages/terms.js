import Layout from "@/layout/Layout";
import Terms from "@/components/sections/terms";

export default function Home() {
  return(<>
  <Layout headTitle={"Terms & Conditions | Clear Guidelines for Using Our Services"}  metaDescription={"Review our Terms & Conditions to understand your rights and responsibilities. Transparent, easy-to-read policies that protect both you and our services."}  keywords={"Terms & Conditions, User agreement, Service terms, Legal policy"} >
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
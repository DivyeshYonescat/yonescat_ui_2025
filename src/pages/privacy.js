import Privacy from "@/components/sections/privacy";
import Layout from "@/layout/Layout";

export default function Home() {
  return(<>
    <Layout headTitle={"Privacy Policy | How We Collect, Use & Protect Your Information"}  metaDescription={"Read our Privacy Policy to understand how we handle your data securely and transparently. Learn your rights and how we protect your personal information."}  keywords={"Privacy Policy, Data privacy, User information, Information security"} >
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
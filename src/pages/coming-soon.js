import { buttonVariants } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import Link from "next/link";

export default function Home() {
  return <>
    <Layout>
      <div className="section-main">
        <div className="container">
          <div className="w-full max-w-2xl mt-8 md:mt-6 h-full max-h-[600px] flex justify-center items-center m-auto shadow-xl/30 inset-shadow-stone-500">
            <div className="not-found-inner">
              <div className="flex flex-col items-center text-center p-6">
                <h1>Coming soon</h1>
                <p className="my-8 max-md:my-5"> We&apos;re currently working on creating this page. </p>
                <Link href="/" className={buttonVariants({ variant: "",className:""})}> Go To Home </Link>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </Layout>
  </>
}
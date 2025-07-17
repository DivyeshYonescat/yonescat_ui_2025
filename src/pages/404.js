import { buttonVariants } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function Home() {
  return <>
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="not-found-inner">
          <div className="flex flex-col items-center text-center">
            <DotLottieReact className="w-full max-xl:max-w-[350px] xl:max-w-[500px] 2xl:max-w-[700px] max-sm:w-[400px] h-auto m-auto"  src={"./images/animation/404.json"} loop autoplay />
            <h1>Page not found</h1>
            <p className="my-8 max-md:my-5">Sorry, We couldn&apos;t find the page you are looking for</p>
            <Link href="/" className={buttonVariants({ variant: "",className:""})}> Go To Home </Link>
          </div>
        </div> 
    </div>
  </>

}
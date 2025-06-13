import Image from "next/image";
import { Children } from "react";

export default function BoxSection({ImageUrl,BgColor,order,children}) {
  return <>
  {/* <div className="director-section relative" > */}
    {/* <div className="container"> */}
      <div className={`card-main-box  director-inner box-director-inner max-md:mt-[30px] w-full grid ${order == "order-1" ? `grid-cols-[35%_65%]`: `grid-cols-[65%_35%]` } max-md:order-1 max-md:grid-cols-1 ${BgColor} rounded-xl`}>
      {/* <div className={`card-main-box director-inner box-director-inner max-md:mt-[30px] w-full  max-md:order-1 ${BgColor} rounded-xl`}> */}
        <div className={`card-main-box-img flex items-center max-md:justify-center ${order}`}>
          <Image className="relative z-10 " src={`${ImageUrl}`} alt="director" width={400} height={700} />
        </div>
        {children}
      </div>    
    {/* </div> */}
  {/* </div>  */}
  </>
}
import Image from "next/image";
import { Children } from "react";

export default function BoxSection({Imagedata,rightImage,children}) {
  return <>
  <div className="director-section  relative" >
    <div className="container">
      <div className={`director-inner box-director-inner w-full grid grid-cols-[35%_65%] max-md:grid-cols-1 bg-fuchsia-100/100 rounded-xl`}>
        <div className="director-image flex items-center max-md:justify-center">
          <Image className="relative z-10 " src={`/images/main/${Imagedata}`} alt="director" width={400} height={700} />
        </div>
        {children}
        
      </div>    
    </div>
  </div> 
  </>
}
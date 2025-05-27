import Card from "@/components/card";
import Image from "next/image";
import Link from "next/link";

const Components  = ()=>{
    return (<>  
        <div className="section-main">
            <div className="container">
                <div className="grid grid-cols-3 gap-10 ">
                    <Card>
                        <div  className="card-bg"></div>
                        <div className="card-header">
                            <div className="flex flex-row items-center">
                                <div className=" min-w-[70px] h-[70px] bg-[#2a2c34] rounded-full flex flex-row justify-center items-center">
                                    {/* <span className="flaticon-graphics text-3xl text-white mt-[10px] list-none" /> */}
                                    <Image src={"/images/main/svg/solution.png"} width={40} height={40} alt="solution.png" />
                                </div>
                                <h3 className=" font-bold mx-[15px] ">Solutions</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="sub-title font-semibold my-[15px] capitalize  group:hover  ">For All Kind OF Businesses</p>
                            <ul className="fbox-list px-2.5">
                                <li> <p className="py-[2px] ">Software Development </p>  </li>
                                <li> <p className="py-[2px] ">Product Desing </p>  </li>
                                <li> <p className="py-[2px] ">Ai & Machine learning </p>  </li>
                                <li> <p className="py-[2px] ">Mobile Application </p>  </li>
                                <li> <p className="py-[2px] ">Web & Cloud </p>  </li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <Link href="/solutions" className="text-lg inline-block font-bold">View More</Link>
                        </div>
                    </Card>
                </div>   
            </div>
        </div>  
        <div className="section-main">
            <div className="container"> 
                <div className="card card-horizontal">
                    <div className="card-header">Header</div>
                    <div className="card-body">Body</div>
                    <div className="card-footer">Footer</div>
                </div>
                <button className="btn" type="">Click Me</button>
            </div> 
        </div>       
        <div className="section-main">
             <div className="container">     
                <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input className="form-input" type="" />
                </div>
            </div>    
        </div>
    </>);
}

export default Components;
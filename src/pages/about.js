"use client";
import dynamic from "next/dynamic";
import Layout from "@/layout/Layout";
import Image from "next/image";
import Card from "@/components/card";
const DynamicClients = dynamic(() => import("@/components/sections/Client"),{ssr:true});

export default function Home() {
  const FeaturesList = [{
    id:"1", icone:"infrastucture.svg", title:"Market Research",
    discription:"We conduct a comprehensive market study that allows businesses to become aware of changes in industries, tendencies of consumers, and competitiveness. This’s our expertise that assists in making decisions and developing strategies."},
    { id:"2", icone:"infrastucture.svg", title:"User Experience",
    discription:"Our UX services focus on making digital interfaces that are easy to navigate and pleasant to use. Our clients’ demands are centerstage, which calls for the design of effective and memorable user experiences."
    },
    { id:"3", icone:"infrastucture.svg", title:"Digital Marketing",
    discription:"We provide innovative digital marketing tactics to increase interaction, raise brand exposure, and create leads. Our experience includes content marketing, email campaigns, and sponsored adverts. We also offer social media marketing, SEO, and other digital marketing services."
    },
    { id:"4", icone:"infrastucture.svg", title:"Web Development",
    discription:"Our web development solutions are tailored to modern company requirements, resulting in robust, scalable, and visually appealing websites. We specialize in cutting-edge technologies and frameworks for a more effective online presence."
    },
    { id:"5", icone:"infrastucture.svg", title:"Brand Design Identity",
    discription:"We assist organizations in developing a strong brand identity through smart design, logo creation, and consistent visual storytelling that connects with target audiences."},
    { id:"6", icone:"infrastucture.svg", title:"SEO & SMM Services",
    discription:"Increase your online exposure and engagement with our Search Engine Optimization (SEO) and Social Media Marketing (SMM) services. We ensure that your business stands out in an increasingly competitive digital landscape."
    },
  ]
  return(<>
    <Layout>
      <div className="pt-[100px]">
        <div className="container">
          <div className="about_title w-[75%] py-[50px_20px]">
            <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
            <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 20 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
          </div>
          <div className="about-grid grid grid-cols-3 grid-rows-2 max-lg:grid-cols-2 gap-5 ">
            <div className=""><Image className="rounded-xl w-full h-full object-cover" src={"/images/main/about/2.jpg"} width={400} height={200} alt={"gridImage"} /></div>
            <div className=""><Image className="rounded-xl w-full h-full object-cover" src={"/images/main/about/1.jpg"} width={400} height={200} alt={"gridImage"} /></div>
            <div className="col-span-2 rounded-xl"><Image className="rounded-xl w-full h-full object-cover" src={"/images/main/about/4.jpg"} width={850} height={300} alt={"gridImage"} /></div>
            <div className="p-10 bg-stone-900 text-stone-100 rounded-xl col-start-3 row-start-1 row-span-2">
              <div className=" ">
                <p className="leading-[27px]">Hello, this is Heman Yones. In 2004, I founded Yonescat, motivated by a desire to create meaningful design. Over the last 20 years, we&apos;ve transformed the way creative businesses connect and collaborate.Our journey began with European projects and partnerships with schools to create innovative digital services. Today, our impressive clientele includes charities, local governments, corporations, and private organizations.Join us as we continue to shape the future of digital services by forging lasting connections and fostering impactful collaborations.</p>
                <p className="block mt-[30px] font-bold">Heman Yones</p>
                <p className="font-bold">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-main mission-main pb-0 ">
        <div className="container">
          <div className="mission-inner flex items-center max-w-[1000px] max-lg:flex-col max-lg:items-center m-auto">
            <Image className="rounded-xl" src={"/images/main/about/Mission.jpg"} width={500} height={500} alt="mission" />
            <div className="mission-box p-12 ml-[-40px] max-lg:p-5 max-lg:mt-[30px] max-lg:ml-0 bg-stone-100 shadow-xl rounded-xl">
              <h3>Our Mission</h3>
              <p className="mt-[20px] mb-[10px] text-[15px] leading-[20px] max-lg:leading-[25px] max-lg:mt-[30px]">Heman Yones is a committed leader whose work reflects both corporate excellence and social responsibility. With strengths in product design and active roles in EU initiatives and the MEED Foundation, he blends technical expertise with a passion for community development, making him a key figure in the entrepreneurial world.</p>
              <p className="leading-[20px]  max-lg:leading-[25px] text-[15px]">Yonescat focuses on driving innovative and impactful design to transform the digital landscape. By leveraging cutting-edge technology, the company helps forward-thinking firms overcome communication and collaboration barriers, delivering digital experiences that are both functional and inspiring.</p>
            </div>
          </div>      
        </div>
      </div> 
      <div className="section-main impact-main bg-[#f8f7f3]">
        <div className="container">
          <div className="impart-inner grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 max-lg:gap-4">
            <div className="impart-box-title ">
              <h3 className="mb-[15px]">Our Impact</h3>
              <p>Lorazepam is used to relieve anxiety. Lorazepam is also used to treat insomnia caused by anxiety or temporary situational stress.</p>
            </div>    
            <div className="impart-box">
              <h5>1. Empowering Education</h5>
              <p>In conjunction with schools, we developed digital services that enhance learning experiences and streamline administrative work.</p>
            </div>
            <div className="impart-box">
              <h5>2. Supporting Charities</h5>
              <p>We work together with NGOs to create platforms that expand their audience, increase donor participation, and enhance their entire mission.</p>
            </div>
            <div className="impart-box">
              <h5>3. Serving Private firms</h5>
              <p>To assist private firms in remaining competitive in a dynamic market, we provide customized digital solutions that are suited to their unique requirements.</p>
            </div>
            <div className="impart-box">
              <h5>4. Driving Corporate creativity</h5>
              <p>We collaborate with corporations to create unique digital solutions that boost productivity, creativity, and growth.</p>
            </div>
            <div className="impart-box">
              <h5>5. Enhancing Public Services</h5>
              <p>As part of our corporate client services, we design and build innovative digital solutions that drive efficiency, foster innovation, and support business growth.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="director-section  relative" >
        <div className="container">
          <div className="director-inner flex items-center h-[500px] max-md:h-full max-md:flex-col">
            <div className="director-image w-[45%] flex justify-end max-md:justify-center max-md:items-end max-md:h-[300px]">
              <Image className="director-inner-img absolute h-full max-md:h-[200px] w-[50vw] max-md:min-w-[200px] max-md:w-full ml-[-100px] max-md:ml-0  left-0 inset-y-0" src="/images/main/about/director-bg.jpg" width={1000} height={500} alt="sadfsdaf" />
              <Image className=" relative z-10 max-md:min-w-[200px]" src={"/images/main/about/heman-yones.webp"} alt="director" width={400} height={700} />
            </div>
            <div className="director-text w-[55%] max-md:w-full pl-[80px] lg:pl-[50px] max-lg:pl-[25px] py-[30px]">
              <span className="font-bold text-[14px]">Director of Yonescat Ltd</span>
              <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Heman Yones</h3>
              <p className="leading-[20px]">Heman Yones is a Kurdish-born British entrepreneur and director who has held senior positions in a variety of organisations, most notably in design and innovation. He is currently the CEO of iQ Labs, Director of Yonescat Ltd, and a board member of the MEED Foundation, which promotes economic development and empowerment.</p>
              <h5 className="mt-[10px] mb-[10px] font-bold">Early Life and Education</h5>
              <p className="leading-[20px]">Heman Yones was born in October 1978. He attended Brunel University, where he most likely laid the groundwork for his future profession in engineering and design.</p>
              <h5 className="mt-[10px] mb-[10px] font-bold">Career</h5>
              <p className="leading-[20px]">Heman has had a multifaceted career that combines entrepreneurship and community involvement. He supervises product design activities at iQ Labs, helping to develop new solutions in a variety of industries. His involvement at the MEED Foundation demonstrates his commitment to social impact, with a focus on programs that promote economic growth and assist underprivileged communities.</p>
            </div>  
          </div>    
        </div>
      </div>  

        <section className="section-main pb-0">
          <div className="container">
            <h2 className=" mb-[50px] text-center"> We make your business gain more revenue at a glance </h2>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-6">
              {FeaturesList.map((item) => (
                <>
                <Card>
                  <div  className="card-bg"></div>
                    <div className="card-header">
                      <div className="flex flex-row items-center">
                          <div className=" max-sm:min-w-[55px] max-sm:w-[55px] max-sm:h-[55px] md:min-w-[55px] lg:min-w-[55px] w-[55px] h-[55px]  bg-[#2a2c34]  rounded-full flex flex-row justify-center items-center">
                              <Image className="white-image w-[25px] h-[25px] max-sm:w-[30px] max-sm:h-[30px]" src={`/images/main/svg/${item.icone}`} width={25} height={25} alt="solution.png" />
                          </div>
                          <h5 className=" font-bold mx-[15px] max-sm:mr-0 max-sm:ml-[10px] sm:mr-0 md:ml-[10px] md:mr-0  ">{item.title}</h5>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <p className="sub-title min-h-[150px] max-sm:min-h-auto group:hover  ">{item.discription}</p>
                    </div>
                    {/* <div className="card-footer">
                      <Link href={`/${item.link}`} className="subtitle inline-block font-bold">View More</Link>
                    </div> */}
                </Card>
                </>
              ))}

            </div>
          </div>
        </section>
      <DynamicClients title={"Trusted and used by over 100 companies"}/>
    </Layout>
  </>)
}
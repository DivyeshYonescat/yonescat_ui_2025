"use client";
import dynamic from "next/dynamic";
import Layout from "@/layout/Layout";
import Image from "next/image";
const DynamicClients = dynamic(() => import("@/components/sections/Client"),{ssr:true});

export default function Home() {

  return(<>
    <Layout>
      <div className="pt-[100px]">
        <div className="container">
          <div className="about_title w-[75%] py-[50px_20px]">
            <h1 className="mb-[30px]">We Are Changing The Way Creative Companies Connect And Collaborate</h1>
            <p>Welcome to Yonescat. I am Heman Yones. We began our journey back in 2004 driven by a love and passion for meaningful design. working on European initiatives and with educational institutions to produce digital tools. Having started offering digital services more than 20 years ago, we have developed an amazing clientele. From municipal agencies and charity to corporate companies and private firms.</p>
          </div>
          <div className="grid grid-cols-3 gap-5 ">
            <div><Image className="rounded-xl" src={"/images/main/about/2.jpg"} width={400} height={200} alt={"gridImage"} /></div>
            <div ><Image className="rounded-xl" src={"/images/main/about/1.jpg"} width={400} height={200} alt={"gridImage"} /></div>
            <div className="col-span-2 rounded-xl"><Image className="rounded-xl" src={"/images/main/about/4.jpg"} width={850} height={300} alt={"gridImage"} /></div>
            <div className="row-start-1 row-end-3 col-start-3">
              <div className="p-10 bg-black text-white rounded-xl">
                <p className="leading-[27px]">Hello, this is Heman Yones. In 2004, I founded Yonescat, motivated by a desire to create meaningful design. Over the last 20 years, we&apos;ve transformed the way creative businesses connect and collaborate.Our journey began with European projects and partnerships with schools to create innovative digital services. Today, our impressive clientele includes charities, local governments, corporations, and private organizations.Join us as we continue to shape the future of digital services by forging lasting connections and fostering impactful collaborations.</p>
                <p className="block mt-[30px] font-bold">Heman Yones</p>
                <p className="font-bold">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-main mission-main ">
        <div className="container">
          <div className="mission-inner flex items-center max-w-[1000px] m-auto">
            <Image className="rounded-xl" src={"/images/main/about/Mission.jpg"} width={500} height={500} alt="mission" />
            <div className="mission-box p-12 -ml-[40px] bg-[#fff] shadow-xl rounded-xl">
              <h3>Our Mission</h3>
              <p className="mt-[20px] mb-[10px] text-[15px] leading-[20px]">Heman Yones is a committed leader whose work reflects both corporate excellence and social responsibility. With strengths in product design and active roles in EU initiatives and the MEED Foundation, he blends technical expertise with a passion for community development, making him a key figure in the entrepreneurial world.</p>
              <p className="leading-[20px] text-[15px]">Yonescat focuses on driving innovative and impactful design to transform the digital landscape. By leveraging cutting-edge technology, the company helps forward-thinking firms overcome communication and collaboration barriers, delivering digital experiences that are both functional and inspiring.</p>
            </div>
          </div>      
        </div>
      </div> 
      <div className="section-main impact-main bg-[#f8f7f3]">
        <div className="container">
          <div className="impart-inner ">
            <div className="impart-box-title ">
              <h3>Our Impact</h3>
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
      <div className="director-section " style={{backgroundImage:"url(/images/main/about/director-bg.jpg)"}}>
        <div className="container">
          <div className="director-inner flex items-center h-[500px]">
            <div className="director-image w-[45%] flex justify-end">
              <Image className="mr-[-25px]" src={"/images/main/about/heman-yones.webp"} alt="director" width={400} height={700} />
            </div>
            <div className="director-text w-[55%] pl-[80px] py-[30px]">
              <span className="font-bold text-[14px]">Director of Yonescat Ltd</span>
              <h3 className="mt-[15px] mb-[20px]">Heman Yones</h3>
              <p>Heman Yones is a Kurdish-born British entrepreneur and director who has held senior positions in a variety of organisations, most notably in design and innovation. He is currently the CEO of iQ Labs, Director of Yonescat Ltd, and a board member of the MEED Foundation, which promotes economic development and empowerment.</p>
              <h5 className="mt-[10px] mb-[10px] font-bold">Early Life and Education</h5>
              <p>Heman Yones was born in October 1978. He attended Brunel University, where he most likely laid the groundwork for his future profession in engineering and design.</p>
              <h5 className="mt-[10px] mb-[10px] font-bold">Career</h5>
              <p>Heman has had a multifaceted career that combines entrepreneurship and community involvement. He supervises product design activities at iQ Labs, helping to develop new solutions in a variety of industries. His involvement at the MEED Foundation demonstrates his commitment to social impact, with a focus on programs that promote economic growth and assist underprivileged communities.</p>
            </div>  
          </div>    
        </div>
      </div>  

      <DynamicClients title={"Trusted and used by over 100 companies"}/>
    </Layout>
  </>)
}
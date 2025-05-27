import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card";

export default function FeaturesSection() {
  const FeaturesList = [{
    "icone":"solution.png",
    "title":"Solutions",
    "subTitle":"For All Kind OF Businesses",
    "list":["Software Development","Product Desing","Ai & Machine learning","Mobile Application","Web & Cloud"],
    "link":"solutions"
    },
    {
    "icone":"infrastructure.png",
    "title":"Infrastructure",
    "subTitle":"For All Kind OF Businesses",
    "list":["Data Center","Ddos Protections","Database As A Service","Microsoft Office365 ","Google G-Suite"],
    "link":"infrastructure"
    },
    {
    "icone":"hosting.png",
    "title":"Hosting",
    "subTitle":"For All Kind OF Businesses",
    "list":["Shared Hosting","Cloud Reseller","Dedicated Servers","Cloud VPS","Domain Names"],
    "link":"hosting"    
  }
  ]

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
    //arrows: true,
    accessibility: false,
  };
  return (
    <>
      <section className="section-main">
        <div className="container">
          <div className="section-title mb-20 sm:mb-10 max-sm:mb-5 text-center">
            <h2 className=" mb-5.5"> What Types Of Services Do We Provide </h2>
            <p className="text-lg color--grey">on the other hand,we denounce with righteous indignation and dislike nam who are so beguiled.</p>
          </div>

          {/* <div className="fbox-wrapper grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10" > */}
             <Slider {...settings}>
            {FeaturesList.map((item) => (
              <div key={item.title} className="min-w-auto sm:min-w-[320px] max-w-[370px]">
                <Card>
                  <div  className="card-bg"></div>
                  <div className="card-header">
                      <div className="flex flex-row items-center">
                          <div className=" max-sm:min-w-[55px] max-sm:w-[55px] max-sm:h-[55px] md:min-w-[70px] lg:min-w-[70px] w-[70px] h-[70px]  bg-[#2a2c34]  rounded-full flex flex-row justify-center items-center">
                              <Image className="w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src={`/images/main/svg/${item.icone}`} width={40} height={40} alt="solution.png" />
                          </div>
                          <h3 className=" font-bold mx-[15px] max-sm:mr-0 max-sm:ml-[10px] sm:mr-0 md:ml-[10px] md:mr-0  ">{item.title}</h3>
                      </div>
                  </div>
                  <div className="card-body">
                      <p className="sub-title font-semibold my-[15px] max-sm:mt-[0] sm:mt-[0] capitalize  group:hover  ">{item.subTitle}</p>
                      <ul className="fbox-list px-2.5">
                        {item.list.map((text) => ( 
                          <li> <p className="py-[2px] ">{text} </p>  </li>
                        ))}  
                      </ul>
                  </div>
                  <div className="card-footer">
                      <Link href={`/${item.link}`} className="subtitle inline-block font-bold">View More</Link>
                  </div>
                </Card>
              </div>
            ))}
            </Slider>

          {/* </div> */}
        </div>
      </section>
    </>
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} onClick={onClick} aria-label="Previous Slide" >
      <Image src="/images/main/svg/angle-left-svgrepo-com.svg" alt="angle-left-svgrepo-com.svg" width={60} height={60} />
    </div>
  );
};


const NextArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} onClick={onClick} aria-label="Next Slide">
      <Image src="/images/main/svg/angle-right-svgrepo-com.svg"  alt="angle-left-svgrepo-com.svg" width={60} height={60} />
    </div>
  );
};
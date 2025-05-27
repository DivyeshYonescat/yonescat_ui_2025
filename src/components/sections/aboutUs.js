import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';

export default function AboutUs() {
  return (
    <>
    <div className="section-main py-[0px]   overflow-hidden">
      <div className="container">
        <div className="aboutimg w-full min-h-[600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="about-text relative z-10 my-32 max-lg:my-5 bg-white p-5 rounded-4xl">
                <h2>Want To Know More About Yonescat</h2>
                <div className="mt-6">
                  <p>We are passionate about transparency,reliability, trust and outstanding customer care-we aren&apos;t happy with our creation unttil you are. We take tremendous care of your needs</p>
                  <p>We do that by taking enormous care of our of out people-talented world-leading web desing specialists.</p>
                  <p>We are passionate about transparency,reliability, trust and outstanding customer care-we aren&apos;t happy with our creation until you are. We take tremendous care of your needs</p>
                </div>
                <button className="but"></button>
              </div>
              <div className="about-img w-full clear-both block mb-10">
                <Image className="w-full h-full object-cover" alt="linkedin" src={"/images/pexels-linkedin.jpg"} width={1360} height={767}></Image>
              </div>
            </div>
        </div>
      </div>
    </div>  
    </>
  )
}

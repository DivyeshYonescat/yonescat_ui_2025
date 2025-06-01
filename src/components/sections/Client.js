"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  '/images/clients/artification.webp',
  '/images/clients/circular-foundation.webp',
  '/images/clients/daphne.webp',
  '/images/clients/double-helix.webp',
  '/images/clients/iq.webp',
  '/images/clients/lifelong-learning.webp',
  '/images/clients/mayor-of-london.webp',
  '/images/clients/nhs.webp',
];

const Clients = ({title}) => {
  const containerRef = useRef(null);
  const smallCircleRef = useRef(null);
  const mediumCircleRef = useRef(null);
  const largeCircleRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    const el = titleRef.current

    tl.to(smallCircleRef.current, {
      rotation: "+=360",
      duration: 60,
      ease: "none",
      repeat: -1,
    }, 0); // Start all at same time

    tl.to(mediumCircleRef.current, {
      rotation: "-=360",
      duration: 90,
      ease: "none",
      repeat: -1,
    }, 0);

    tl.to(largeCircleRef.current, {
      rotation: "+=360",
      duration: 120,
      ease: "none",
      repeat: -1,
    }, 0);

    const x =  ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => tl.play(),
      onLeave: () => tl.pause(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.pause(),
    });

    

    gsap.fromTo(el,
      { y: 400,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power4.out',
        duration: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      // tl.kill();
    };
  }, []);

  const renderLogos = (circleClass, ref) => (
    <div className={`circle ${circleClass}`} ref={ref}>
      {[...logos].sort(() => Math.random() - 0.5).map((logo, index) => (
        <div className="logo" style={{ '--index': index }} key={`${circleClass}-${index}`}>
          <Image priority={true} src={logo} width={150} height={80} alt="client" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="section-main overflow-hidden" ref={containerRef}>
      <div className="container">
        <h2 className="text-center mb-16" ref={titleRef}>
          {title}
        </h2>
      </div>
      <div
        className="clients-logo-container"
        style={{ "--count": logos.length, opacity: 0 }}
        ref={(el) => {
          if (el) {
            gsap.to(el, {
              opacity: 1,
              duration: 1,
              delay: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
              },
            });
          }
        }}
      >
        {renderLogos("small-circle", smallCircleRef)}
        {renderLogos("medium-circle", mediumCircleRef)}
        {renderLogos("large-circle", largeCircleRef)}
      </div>
      <div className="absolute left-0 z-10 bottom-0 w-full h-2/4 bg-gradient-to-t from-stone-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Clients;

'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function VideoExtendSection() {
  const videoWrappreRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoWrapper = videoWrappreRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoWrapper,
        start: '20% 90%',
        end: '100% 100%',
        scrub: 1.2,
        // markers: true,
      },
    })

    tl.to(videoWrapper,
      {
        clipPath: "circle(70% at 50% 50%)",
        ease: "power1",
        onStart: () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        },
        onReverseComplete: () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      }, 'action'
    );

    tl.to('.video-frame-wrapper .playIcon',
      {
        opacity: 0,
        scale: 0,
        ease: "circ.inOut"
      }, 'action', "-=0.8"
    );



  }, [])

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center w-screen relative">
      <div className='w-full pt-8 mb-16 absolute top-0 '>
        <h3 className="text-center text-9xl font-bold text-stone-100">
          About Yonescat
        </h3>
      </div>
      <div className='video-frame-wrapper' ref={videoWrappreRef}>
        <div className='w-full pt-8 mb-16 absolute top-0 z-20 mx-auto'>
          <h3 className="text-center text-9xl font-bold text-stone-900">
            About Yonescat
          </h3>
        </div>
        <video ref={videoRef} className="w-full h-full" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" muted controls />
        <div className='playIcon'>
          <span className='flaticon-play text-9xl'></span>
        </div>
      </div>
    </div>
  )
}
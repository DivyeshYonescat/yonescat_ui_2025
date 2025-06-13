import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Overview = ({list})=>{
  const containerRef = useRef(null);
  const imagesWrapperRef = useRef(null);
  const scrollTriggerInstance = useRef(null);


  useEffect(() => {
    if (!containerRef.current || !imagesWrapperRef.current) return;
      const totalScrollWidth = imagesWrapperRef.current.scrollWidth - containerRef.current.offsetWidth;
      // Create GSAP tween with ScrollTrigger
      scrollTriggerInstance.current = gsap.to(imagesWrapperRef.current, {
        x: () => `-${totalScrollWidth}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${imagesWrapperRef.current.scrollWidth}`,
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: getCurrentSection01
        }
    });
   
    const killAnimation = () => {
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.scrollTrigger.kill();
        scrollTriggerInstance.current.kill();
        scrollTriggerInstance.current = null;
      }
    };
    
    gsap.defaults({ overwrite: 'auto' });
    gsap.set(".overview-img-section > *", { xPercent: -50, yPercent: -50 });
    const ST = ScrollTrigger.create({
      trigger: ".content-container",
      start: "top top",
      end: "bottom bottom",
      onUpdate: getCurrentSection,
      pin: ".overview-img-section"
    });
    const contentMarkers = gsap.utils.toArray(".overview-text-main");
    contentMarkers.forEach(marker => {
      marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

      if (marker.content.tagName === "IMG") {
        gsap.set(marker.content, { transformOrigin: "center" });

        marker.content.enter = function () {
          gsap.fromTo(marker.content, { autoAlpha: 0, rotateY: -30 }, { duration: 0.3, autoAlpha: 1, rotateY: 0 });
        }
      } 
      
      marker.content.leave = function () {
        gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
      }
    });

    let lastContent;
    function getCurrentSection() {
      let newContent;
      const currScroll = window.scrollY;
      const contentMarkers = gsap.utils.toArray(".overview-text-main");
      contentMarkers.forEach(marker => {
        if (currScroll > marker.offsetTop) {
          newContent = marker.content;
        }
      });

      if (newContent && (lastContent == null || !newContent.isSameNode(lastContent))) {
        if (lastContent) {
          lastContent.leave();
        }
        newContent.enter();
        lastContent = newContent;
      }
    }

    function getCurrentSection01() {
      let newContent;
      const currScroll = window.scrollY;
      const contentMarkers = gsap.utils.toArray(".overview-text-main");
      contentMarkers.forEach(marker => {
        if (currScroll > marker.offsetLeft) {
          newContent = marker.content;
        }
      });

      if (newContent && (lastContent == null || !newContent.isSameNode(lastContent))) {
        if (lastContent) {
          lastContent.leave();
        }
        newContent.enter();
        lastContent = newContent;
      }
    }

    const media = window.matchMedia("screen and (max-width: 768px)");
    
    ScrollTrigger.addEventListener("refreshInit", checkSTState);
    checkSTState();

    function checkSTState() {
      if (media.matches) {
        ST.disable();
      } else {
        ST.enable();
        killAnimation();
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <>  
      <section className='overview-main block mt-[80px] overflow-hidden' >
        <div className='container'>
          <div className='overview-inner content-container grid max-md:grid-cols-1 grid-cols-[45%_55%] ' ref={containerRef}>
            <div className='overview-img-section h-[calc(100vh-80px)] max-md:h-auto max-md:min-h-[300px] max-md:mt-[60px] relative'>
              {list.map((images) => <>
                <Image id={`image_${images.id}`} className="absolute left-1/2 top-1/2 opacity-0 invisible" src={`/images/main/${images.image}`} width={400} height={400} alt='overview_iamge' />
              </>)}
            </div>
            <div className='overview-text-section max-md:flex max-md:w-[100%] ' ref={imagesWrapperRef}>
              {list.map((list) => <>
              <div key={`overview-text_${list.id}`} className='overview-text-main max-w-[100%] max-md:min-w-screen p-8 h-[calc(100vh-80px)] max-md:h-auto max-md:items-baseline flex items-center text-left' data-marker-content={`image_${list.id}`}>
                <div>
                  <h3 className="text-stone-900">{list.title}</h3>
                  <p className="py-5 text-stone-900 block line-clamp-6 max-md:line-clamp-4 max-sm:line-clamp-3 leading-[28px] max-md:leading-[23px]"> {list.discrition} </p>
                  {list.link !== "" && <>
                  <Link href={`${list.link}`} className="btn inline-block  mt-8 max-md:mt-3.5">Read More</Link>
                  </>}
                </div>
              </div>  
              </>)}
            </div>
          </div>    
        </div>
      </section>  
    </>
  );
}
export default Overview;
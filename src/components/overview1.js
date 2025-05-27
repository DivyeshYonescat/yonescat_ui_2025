import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Overview = ({list})=>{
  useEffect(() => {
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

    const media = window.matchMedia("screen and (max-width: 600px)");
    ScrollTrigger.addEventListener("refreshInit", checkSTState);
    checkSTState();

    function checkSTState() {
      if (media.matches) {
        ST.disable();
      } else {
        ST.enable();
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <>  
      <section className='overview-main '>
        <div className='container'>
          <div className='overview-inner content-container grid max-md:grid-cols-1 grid-cols-[45%_55%] '>
            <div className=' overview-img-section h-screen max-md:none relative'>
              {list.map((images) => <>
                <Image id={`image_${images.id}`} className="absolute left-1/2 top-1/2 opacity-0 invisible" src={`/images/main/${images.image}`} width={400} height={400} alt='overview_iamge' />
              </>)}
            </div>
            <div className='overview-text-section'>
              {list.map((list) => <>
              <div key={`overview-text_${list.id}`} className='overview-text-main max-w-[100%] p-8 h-screen flex items-center' data-marker-content={`image_${list.id}`}>
                <div>
                  <h2 className="">{list.title}</h2>
                  <p className="py-5 block"> {list.discrition} </p>
                  <Link href={`${list.link}`} className="btn inline-block">Read More</Link>
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
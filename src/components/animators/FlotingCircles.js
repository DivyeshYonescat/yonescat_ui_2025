'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingCircles = ({ containerRef, isParentVisible }) => {
  const circles = useRef([]);

  const getCircleCount = (width) => {
    // Adjust based on screen width
    if (width < 500) return 5;
    if (width < 768) return 10;
    if (width < 1024) return 15;
    if (width < 1440) return 18;
    return 20;
  };

  const getSizeRange = (width) => {
    if (width < 500) return [8, 16];
    if (width < 768) return [10, 18];
    if (width < 1024) return [12, 20];
    return [50, 150];
  };

  useEffect(() => {
    const container = containerRef.current;
    if (isParentVisible) {

      const total = getCircleCount(window.innerWidth);
      const sizeRange = getSizeRange(window.innerWidth);

      setTimeout(() => {
        const bounds = container.getBoundingClientRect();

        for (let i = 0; i < total; i++) {
          const circle = document.createElement('div');
          const size = (Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0]) + 'px';
          circle.className = 'circle';
          circle.style.width = size;
          circle.style.height = size;
          circle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(2)})`;
          circle.style.zIndex = Math.round((Math.random() * 100));
          circle.style.left = `${Math.random() * (bounds.width - 30)}px`;
          circle.style.top = `-${Math.random() * 100 + 50}px`;

          container.appendChild(circle);
          circles.current.push(circle);

          dropAndFloat(circle, bounds.height, bounds.width);
        }
      }, 600);
    } else {
      const circles = container.querySelectorAll('.circle');
      if (circles.length > 0) {
        gsap.to(circles, {
          opacity:0,
          x:-100,
          ease: 'sine.inOut',
          onComplete: () => {
            circles.forEach((el) => {
              gsap.killTweensOf(el);
              el.remove();
            })
          },
        });
      }
    }
  }, [isParentVisible]);

  const dropAndFloat = (el, height, width) => {
    const dropY = height - 40;

    // Drop animation with bounce
    gsap.to(el, {
      y: dropY,
      duration: 1 + Math.random(),
      ease: "bounce",
      onComplete: () => float(el, width, height),
    });
  };

  const float = (el, width, height) => {
    const animate = () => {
      const driftX = (Math.random() - 0.5) * (width * 0.3); // ±15% width
      const driftY = Math.random() * (height - 40);
      const driftZ = Math.random() * (height - 40);
      const rotation = (Math.random() - 0.5) * 20;
      const scale = 0.9 + Math.random() * 0.4;

      gsap.to(el, {
        x: driftX,
        y: driftY,
        z:driftZ,
        rotation,
        scale,
        opacity: 0.2 + Math.random() * 0.2,
        duration: 4 + Math.random() * 3,
        ease: 'power1.inOut',
        onComplete: animate,
      });
    };

    animate();
  };

  return (<></>);
};

export default FloatingCircles;

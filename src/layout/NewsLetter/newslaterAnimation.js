import { motion } from 'framer-motion';

 
const FloatingSVG = () => {
  return (
<svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="499"
      height="388.53"
      viewBox="0 0 499 388.53"
>
      {/* Static image */}
      <image  width="499" height="50" transform="translate(0 338.53)" href="/images/main/newsletter/4.png" />
 
      {/* Floating 1.png */}
      <g transform="translate(103.17 22.79)">
<motion.image
        width="262"
        height="274"
        transform="translate(103.17 22.79)"
        href="/images/main/newsletter/1.png"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
            delay: 0.5,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      </g>
 
      {/* Floating 2.png */}
      <g transform="translate(354.55)">
<motion.image
        width="113"
        height="93"
        transform="translate(354.55 0)"
        href="/images/main/newsletter/2.png"
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'circInOut',
        }}
      />
      </g>
 
      {/* Floating 3.png */}
      <g transform="translate(75 286.62)">
<motion.image
        width="349"
        height="55"
        transform="translate(75 286.62)"
        href="/images/main/newsletter/3.png"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
            delay:0.9,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      </g>
</svg>
  );
};
 
export default FloatingSVG;



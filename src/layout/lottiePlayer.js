import Lottie from 'lottie-react';
import animationData from '../public/animations/animation.json';

const LottieAnimation = () => {
  return (
    <Lottie animationData={animationData} loop={true} />
  );
};
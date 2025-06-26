import { useEffect } from 'react';
// import  UnicornStudio from '~/js/unicornStudio.umd';

const Card = ({children, type, className})=>{

  return (
    <>
        <div className={`card  group ${className}`}>
          {children}
        </div>
    </>
  );
}

export default Card;
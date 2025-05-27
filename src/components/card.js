import { useEffect } from 'react';
// import  UnicornStudio from '~/js/unicornStudio.umd';

const Card = ({children, type})=>{

  return (
    <>
        <div className={`card  group`}>
          {children}
        </div>
    </>
  );
}

export default Card;
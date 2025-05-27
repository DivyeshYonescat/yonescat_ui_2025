import { useEffect } from 'react';
// import  UnicornStudio from '~/js/unicornStudio.umd';

const Background = ()=>{

  useEffect(()=>{
    UnicornStudio.init().then(scenes => {
      // scenes are ready
    });
    
    return (()=>{
      UnicornStudio.destroy();
    })
  },[])

  return (
    <>
      <div id="unicorn" data-us-project="owYwBwqnk30C7En2vuNe" className='hero-background absolute inset-0'></div>
      
    </>
  );
}

export default Background;
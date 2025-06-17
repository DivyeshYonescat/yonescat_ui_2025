import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, buttonVariants } from "@/components/ui/button"
import Login from '@/components/auth/login';
import Signup from '@/components/auth/signup';

export default function Home() {

  const router = useRouter();
    const { type } = router.query;
    const handleTabChange = (newType) => { router.push(`auth/?type=${newType}`, undefined, { shallow: true }); };
    useEffect(() => {
      if (!type) {
          // Default to login if no type is specified
        handleTabChange('login'); 
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type]);
  
  return (
    <>
      <div className='auth-main auth-inner h-screen max-md:h-auto grid max-md:grid-cols-1 max-md:order-2 grid-cols-2 p-5'>
        <div className='auth-form flex flex-col justify-center  max-md:order-2 max-md:mt-[50px] max-sm:mt-[25px] '> 
          {type === 'login' && <Login /> }
          {type === 'register' && <Signup /> }
        </div>
        <div className='auth-image bg-no-repeat bg-cover rounded-2xl max-md:order-1 flex justify-center items-center' style={{backgroundImage:"url('/images/login.jpg')"}}>
          {type === 'login' && 
            <div className='max-w-[250px] max-md:max-w-[500px] text-center py-[25px]'>
              <h2 className='text-stone-100'>Welcome To Yonescat</h2>
              <p className='text-stone-100 my-[15px]'>New Here?</p>
              <Button type="button" variant="outline" className={`hover:bg-stone-100 text-stone-100 bg-transparent hover:text-stone-900 border-stone-100 px-10  ml-[15px] font-bold py-5 border-2 ${type  === 'register' ? "active" : ""}` }  onClick={() => handleTabChange('register')} > Register</Button>
            </div>
          }
          {type === 'register' && 
            <div className='max-w-[250px] max-md:max-w-[500px] text-center py-[25px]'>
              <h2 className='text-stone-100'>Login</h2>
              <p className='text-stone-100 my-[15px]'>Hay Welcome back!</p>
              <p className='text-stone-100 my-[15px]'>We hope you had a great day</p>
              <Button type="button" variant="outline" className={`hover:bg-stone-100 text-stone-100 bg-transparent hover:text-stone-900 border-stone-100 px-10  ml-[15px] font-bold py-5 border-2 ${type  === 'register' ? "active" : ""}` }  onClick={() => handleTabChange('login')} > Login</Button>
            </div>
          }
        </div>
      </div>
    </>
  );
}
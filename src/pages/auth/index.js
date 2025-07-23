import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, buttonVariants } from "@/components/ui/button"
import Login from '@/components/auth/login';
import Signup from '@/components/auth/signup';
import { Toaster } from '@/components/ui/sonner';
import Head from 'next/head';

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

  const [otpbox, setOtpbox] = useState(false);

  
  return (
    <>
      <Head>
        <title>Secure Login & Easy Register | Access Your Account with Confidence</title>
        <meta name="description" content="Quickly login or register to access your personalized dashboard with secure authentication. Enjoy seamless account management and enhanced privacy protection. Start your journey with us today!,Welcome to Your Website Name. Explore our services and offerings." />
        <meta name="keywords" content="website, services, home, Login, Register, User Access, Secure Login, Account Registration, Google Login, Facebook Login, Google Register, Facebook Register" />
        <meta property="og:title" content="Secure Login & Easy Register | Access Your Account with Confidence" />
        <meta property="og:description" content="Welcome to Your Website Name. Explore our services and offerings." />
        <meta property="og:url" content="https://yonescat.com" />
        <meta property="og:image" content="https://yonescat.com/og-image.jpg" />
        <link rel="icon" href={"/images/main/favicon.ico"} type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href={"/images/main/favicon-16x16.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={"/images/main/favicon-32x32.png"} />
      </Head>
      <div  className="pb-[20px] flex justify-center items-center min-h-screen pt-[20px] w-full bg-no-repeat bg-[100%] bg-cover" style={{background:"url(/images/login.webp)"}}>
        <div className="container">
          <div className='max-w-2xl m-auto'>
           
            <div className='flex justify-center w-full pb-6 max-sm:pb-3'>
              <Button type="button" variant="outline" className={`text-deepsea hover:bg-deepsea hover:text-white px-10  mx-[15px] max-sm:mx-[5px] font-bold py-5 border-2 ${type  === 'login' && "bg-deepsea text-white"}` }   onClick={() => handleTabChange('login')} > Login</Button>
              <Button type="button" variant="outline" className={`text-deepsea hover:bg-deepsea hover:text-white px-10  mx-[15px] max-sm:mx-[5px] font-bold py-5 border-2 ${type  === 'register' && "bg-deepsea text-white"}` }  onClick={() => handleTabChange('register')} > Register</Button>
            </div>
            
            <div className='auth-form flex flex-col justify-center  max-md:order-2 '> 
              {type === 'login' && <Login /> }
              {type === 'register' && <Signup  /> }
            </div>
            
          </div>
        </div>
      </div>
      <Toaster richColors position="top-right" />
      {/* <div className='auth-main auth-inner h-screen max-md:h-auto grid max-md:grid-cols-1 max-md:order-2 grid-cols-2 p-5'>
        <div className='auth-form flex flex-col justify-center  max-md:order-2 max-md:mt-[50px] max-sm:mt-[25px]  max-xl:pr-[15px] max-md:pr-0'> 
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
      </div> */}
    </>
  );
}
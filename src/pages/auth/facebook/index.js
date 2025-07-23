'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export default function AuthCallback() {
  const router = useRouter();
  const search = useSearchParams();
  const googleUrl = process.env.NEXT_PUBLIC_BACKEND_URL; 

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const queryString = window.location.search; // includes leading "?"
        // Forward the code to Strapi; Strapi exchanges it for JWT & user info.
        const { data } = await axios.get(
          `${googleUrl}/api/auth/facebook/callback${queryString}`,
          { withCredentials: false }
        );
        // Example: save JWT to localStorage (or cookie / auth store)
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.replace('/');
      } catch (err) {
        toast.error(err.message);
        setTimeout(() => { router.replace('/auth?type=login');}, 2000);
        //router.replace('/login?error=google');
      }
    };

    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, search]);

  return <>
      <div id="loading" className="loading--theme">
        <div id="loading-center" className='flex flex-col'>
          <object type="image/svg+xml" data="/images/yonescat-logo-loader.svg"></object>
           <h3 className='mt-5'> Login With Facebook ... </h3>
        </div>
      </div>
  </>
  
}

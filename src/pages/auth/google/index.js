'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export default function GoogleCallback() {
  const router = useRouter();
  const search = useSearchParams();
  const googleUrl = process.env.NEXT_PUBLIC_BACKEND_URL; 

  useEffect(() => {
    // Strapi will put ?code=... on the URL. Pass the entire query string to Strapi.
    const fetchToken = async () => {
      try {
        const queryString = window.location.search; // includes leading "?"
        // Forward the code to Strapi; Strapi exchanges it for JWT & user info.
        const { data } = await axios.get(
          `${googleUrl}/api/auth/google/callback${queryString}`,
          { withCredentials: false }
        );

        // Example: save JWT to localStorage (or cookie / auth store)
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));

        // logged in – send user to dashboard
        router.replace('/');
      } catch (err) {
        ///console.error('Google auth failed', err);
        //router.replace('/login?error=google');
        toast.error(err.message);
        setTimeout(() => { router.replace('/auth?type=login');}, 2000);
      }
    };

    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, search]);

  return <>
    <div id="loading" className="loading--theme">
      <div id="loading-center" className='flex flex-col'>
        <object type="image/svg+xml" data="/images/yonescat-logo-loader.svg"></object>
          <h3 className='mt-5'> Login With Google ... </h3>
      </div>
    </div>  
  </>
}

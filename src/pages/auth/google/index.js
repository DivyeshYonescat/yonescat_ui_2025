'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GoogleCallback() {
  const router = useRouter();
  const search = useSearchParams();

  useEffect(() => {
    // Strapi will put ?code=... on the URL. Pass the entire query string to Strapi.
    const fetchToken = async () => {
      try {
        const queryString = window.location.search; // includes leading "?"
        // Forward the code to Strapi; Strapi exchanges it for JWT & user info.
        const { data } = await axios.get(
          `http://localhost:1337/api/auth/google/callback${queryString}`,
          { withCredentials: false }
        );

        // Example: save JWT to localStorage (or cookie / auth store)
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));

        // logged in – send user to dashboard
        router.replace('/');
      } catch (err) {
        console.error('Google auth failed', err);
        //router.replace('/login?error=google');
      }
    };

    fetchToken();
  }, [router, search]);

  return <p className="p-4">Signing you in…</p>;
}

import Link from 'next/link';
import React, { useState} from 'react';
import { hasCookie, setCookie } from "cookies-next";


function CookiePopup() {
    const [cookies, setCookies] = useState(false);

    React.useEffect(() => {
        setCookies(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setCookies(true);
        setCookie("localConsent", "true", {});
    };

    const rejectCookie = () => {
        setCookies(true);
        setCookie("localConsent", "false", {});
    };
    
    if (cookies) {
        return null;
    }



    return <>
        <div className={`cookie-popup ${ cookies ? 'd-none' : ''}`}>
            <div className="cookie-popup-content">
                <p className='text-[18px] text-stone-100'>We use cookies to ensure you get the best experience on our website. You can accept all these cookies by pressing the OK Cookies&quot; button, reject the expendables by pressing the Reject Cookies button You can find out more on our <Link href="/cookies" target="_blank"> cookie policy </Link> page.</p>
                <div className="cookie-popup-buttons flex justify-center">
                    <button className="btn mr-[15px]" onClick={acceptCookie}>Accept Cookies</button>
                    <button className="btn ml-[15px]" onClick={rejectCookie}>Reject Cookies</button>
                </div>    
            </div>        3
        </div>    
    </>
}

export default CookiePopup;
import Layout from "@/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (<>
  <Layout>
    <div className="section-main">
      <div className="container">
        <div className="max-w-[1000px] m-auto">
          <div className="inner-page-title">
            <h2>Cookie Policy</h2>
          </div>
          <div className="txt-block legal-info cookie">
            <p>This document informs Users about the technologies that help this Website to achieve the purposes described below. Such technologies allow the Owner to access and store information (for example by using a Cookie) or use resources (for example by running a script) on a User&apos;s device as they interact with this Website.</p>
            <p>For simplicity, all such technologies are defined as &quot;Trackers&quot; within this document – unless there is a reason to differentiate.</p>
            <p>For example, while Cookies can be used on both web and mobile browsers, it would be inaccurate to talk about Cookies in the context of mobile apps as they are a browser-based Tracker. For this reason, within this document, the term Cookies is only used where it is specifically meant to indicate that particular type of Tracker.</p>
            <p>Some of the purposes for which Trackers are used may also require the User&apos;s consent. Whenever consent is given, it can be freely withdrawn at any time following the instructions provided in this document.</p>
            <p>This Website uses Trackers managed directly by the Owner (so-called “first-party” Trackers) and Trackers that enable services provided by a third-party (so-called “third-party” Trackers). Unless otherwise specified within this document, third-party providers may access the Trackers managed by them.</p>
            <p>The validity and expiration periods of Cookies and other similar Trackers may vary depending on the lifetime set by the Owner or the relevant provider. Some of them expire upon termination of the User&apos;s browsing session.</p>
            <p>In addition to what&apos;s specified in the descriptions within each of the categories below, Users may find more precise and updated information regarding lifetime specification as well as any other relevant information – such as the presence of other Trackers - in the linked privacy policies of the respective third-party providers or by contacting the Owner.</p>

            {/* Title */}
            <h4>How this Website uses Trackers</h4>
            <h5>Necessary</h5>
            {/* Text */}
            <p>This Website uses so-called “technical” Cookies and other similar Trackers to carry out activities that are strictly necessary for the operation or delivery of the Service.</p>
            <h5>Trackers managed by third parties</h5>
            <h5><span>1.</span> Google Tag Manager (Google Ireland Limited)</h5>
            <p>Google Tag Manager is a tag management service provided by Google Ireland Limited.</p>
            <p>Personal Data processed: Tracker.</p>
            <p>Place of processing: Ireland  <Link href="https://policies.google.com/privacy"> Privacy Policy </Link> .</p>

            <h5><span>2.</span> Cloudflare (Cloudflare Inc.)</h5>
            <p>Cloudflare is a traffic optimisation and distribution service provided by Cloudflare Inc.
            The way Cloudflare is integrated means that it filters all the traffic through this Website, i.e., communication between this Website and the User&apos;s browser, while also allowing analytical data from this Website to be collected.</p>
            <p>Personal Data processed: Tracker.</p>
            <p>Place of processing: United States – <Link href="https://www.cloudflare.com/privacypolicy/"> Privacy Policy </Link> .</p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">_cfuvid: indefinite</li>
              <li className="list-item">cf_clearance: 30 minutes</li>
            </ul>
            {/* Text */}
            <h5><span>3.</span> Cloudflare Bot Management (Cloudflare Inc.)</h5>
            <p>Cloudflare Bot Management is a malicious bot protection and management service provided by Cloudflare Inc.</p>
            <p>Personal Data processed: app information, Application opens, browser information, browsing history, city, clicks, country, county, custom events, device information, device logs, geography/region, interaction events, IP address, keypress events, language, latitude (of city), launches, longitude (of city), metro area, motion sensor events, mouse movements, number of sessions, operating systems, page events, page views, province, scroll position, scroll-to-page interactions, search history, session duration, session statistics, state, touch events, Trackers, Usage Data, video views and ZIP/Postal code.</p>
            <p>Place of processing: United States – <Link href="https://www.cloudflare.com/privacypolicy/"> Privacy Policy </Link> .</p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">__cf_bm: 3 seconds</li>
              <li className="list-item">__cfruid: duration of the session</li>
              <li className="list-item">_cfuvid: indefinite</li>
              <li className="list-item">cf_clearance: 30 minutes</li>
              <li className="list-item">cf_ob_info: 3 seconds</li>
              <li className="list-item">cf_use_ob: 3 seconds</li>
              <li className="list-item">cfmrk_cic: 3 months</li>
            </ul>  

            <h5><span>4.</span> Google reCAPTCHA</h5>
            <p>Google reCAPTCHA is a SPAM protection service provided by Google LLC or by Google Ireland Limited, depending on how the Owner manages the Data processing.
              The use of reCAPTCHA is subject to the Google <Link href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener">privacy policy</Link> and <Link href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noopener">terms of use</Link>.
            </p>
            <p>In order to understand Google&apos;s use of Data, consult <Link href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener">Google&apos;s partner policy</Link>.</p>
            <p>Personal Data processed: answers to questions, clicks, keypress events, motion sensor events, mouse movements, scroll position, touch events, Trackers and Usage Data</p>
            <p>Place of processing:  United States -  <Link href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>;  Ireland –  <Link href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>

            <h4>Experience</h4>
            <p>This Website uses Trackers to improve the quality of the user experience and enable interactions with external content, networks and platforms.</p>

            <h5>Trackers managed by third parties</h5>

            <h5><span>1.</span> Google Fonts (Google Ireland Limited)</h5>
            <p>Google Fonts is a typeface visualisation service provided by Google Ireland Limited that allows this Website to incorporate content of this kind on its pages.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing:  Ireland -  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>

            <h5><span>2.</span> Font Awesome (Fonticons, Inc. )</h5>
            <p>Font Awesome is a typeface visualisation service provided by Fonticons, Inc. that allows this Website to incorporate content of this kind on its pages.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing: United States – <Link href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>

            <h5><span>3.</span> Twitter Tweet button and social widgets (X Corp.)</h5>
            <p>The Twitter Tweet button and social widgets are services allowing interaction with the Twitter social network provided by Twitter, Inc.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing: United States – <Link href="https://x.com/en/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>

            <h5><span>3.</span> Facebook Like button and social widgets (Facebook Ireland Ltd)</h5>
            <p>The Facebook Like button and social widgets are services allowing interaction with the Facebook social network provided by Facebook Ireland Ltd</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing: Ireland –  <Link href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">_fbp: 3 months</li>
              <li className="list-item">lastExternalReferrer: duration of the session</li>
            </ul>  

            <h5><span>4.</span> LinkedIn button and social widgets (LinkedIn Corporation)</h5>
            <p>The LinkedIn button and social widgets are services allowing interaction with the LinkedIn social network provided by LinkedIn Corporation.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing: United States –  <Link href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">AnalyticsSyncHistory: 1 month</li>
              <li className="list-item">JSESSIONID: duration of the sessio</li>
              <li>UserMatchHistory: 1 month</li>
              <li>bcookie: 1 year</li>
              <li>bscookie: 1 year</li>
              <li>lang: duration of the session</li>
              <li>li_gc: 7 months</li>
              <li>lidc: 1 day</li>
              <li>lissc: 1 year</li>
              <li>lms_ads: 1 month</li>
              <li>lms_analytics: 1 month</li> 
            </ul>  

            {/* Title */}
            <h4>Measurement</h4>
            <p>This Website uses Trackers to measure traffic and analyze User behavior to improve the Service</p>
            <h5>Trackers managed directly by the Owner</h5>
            <h5><span>1</span>Matomo (this Website)</h5>
            <p>Matomo is an analytics software used by this Website to analyse data directly without the help of third parties.</p>
            <p>Personal Data processed: IP address, Trackers and Usage Data. </p>
            <p>Trackers duration:</p>
            {/* List */}
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">_pk_cvar*: 30 minutes</li> 
              <li className="list-item">pk_id*: 2 years</li>
              <li className="list-item">_pk_ref*: 7 months</li>
              <li className="list-item">_pk_ses*: 30 minutes</li>
              <li className="list-item">_pk_testcookie*: duration of the session</li>
            </ul>  

            <h5>Trackers managed by third parties</h5>
            <h5><span>1</span>Google Analytics (Universal Analytics) (Google Ireland Limited)</h5>
            <p>Google Analytics (Universal Analytics) is a web analysis service provided by Google Ireland Limited (“Google”). Google utilises the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services.</p>
            <p>Google may use the Data collected to contextualise and personalise the ads of its own advertising network.</p>
            <p>In order to understand Google&apos;s use of Data, consult <Link href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener">Google&apos;s partner policy</Link>.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing:  Ireland –  <Link href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://tools.google.com/dlpage/gaoptout?hl=en"  target="_blank">Opt Out</Link>. </p>
            <p>Trackers duration:</p>
            {/* List */}
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">AMP_TOKEN: 1 hour</li> 
              <li className="list-item">_ga: 2 years</li> 
              <li className="list-item">_gac*: 3 months</li> 
              <li className="list-item">_gat: 1 minute</li> 
              <li className="list-item">_gid: 1 day</li> 
            </ul>  

            <h5><span>2.</span> Google Analytics Advertising Reporting Features</h5>
            <p>Google Analytics on this Website has Advertising Reporting Features activated, which collects additional information from the DoubleClick cookie (web activity) and from device advertising IDs (app activity). It allows the Owner to analyse specific behaviour and interests Data (traffic Data and Users&apos; ads interaction Data) and, if enabled, demographic Data (information about the age and gender).</p>
            <p>Users can opt out of Google&apos;s use of cookies by visiting Google&apos;s <Link href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener">Ads Settings</Link>.</p>
            <p>Personal Data processed: Trackers, unique device identifiers for advertising (Google Advertiser ID or IDFA, for example) and various types of Data as specified in the privacy policy of the servic</p>
            <p>Place of processing:  United States -  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> - <Link href="https://tools.google.com/dlpage/gaoptout"  target="_blank">Opt Out</Link>. </p>
            <p>Trackers duration:</p>
            
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">IDE: 2 years</li> 
              <li className="list-item">_gcl_*: 3 months</li> 
              <li className="list-item">test_cookie: 15 minutes</li>
            </ul> 

            <h5><span>3.</span> Google Analytics Demographics and Interests reports</h5>
            <p>Google Analytics Demographics and Interests reports is a Google Advertising Reporting feature that makes available demographic and interests Data inside Google Analytics for this Website (demographics means age and gender Data).</p>
            <p>Users can opt out of Google&apos;s use of cookies by visiting Google&apos;s <Link href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener">Ads Settings</Link>.</p>
            <p>Personal Data processed: Trackers and unique device identifiers for advertising (Google Advertiser ID or IDFA, for example)</p>
            <p>Place of processing:  United States –  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://tools.google.com/dlpage/gaoptout" onclick="javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout'})" target="_blank">Opt Out</Link>;  Ireland –  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://tools.google.com/dlpage/gaoptout" onclick="javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout'})" target="_blank">Opt Out</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">IDE: 2 years</li>
              <li className="list-item">_gcl_*: 3 months</li>
              <li className="list-item">test_cookie: 15 minutes</li>
            </ul>

            <h5><span>4.</span> Google Analytics (Universal Analytics) with anonymised IP</h5>
            <p>Google Analytics (Universal Analytics) is a web analysis service provided by Google LLC or by Google Ireland Limited, depending on how the Owner manages the Data processing, (“Google”). Google utilises the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services.</p>
            <p>Google may use the Data collected to contextualise and personalise the ads of its own advertising network.</p>
            <p>This integration of Google Analytics anonymises your IP address. It works by shortening Users&quot; IP addresses within member states of the European Union or in other contracting states to the Agreement on the European Economic Area. Only in exceptional cases will the complete IP address be sent to a Google server and shortened within the US.</p>
            <p>In order to understand Google&apos;s use of Data, consult <Link href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener">Google&apos;s partner policy</Link>.</p>
            <p>Personal Data processed: Trackers and Usage Data.</p>
            <p>Place of processing:  United States –  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://tools.google.com/dlpage/gaoptout" onclick="javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout'})" target="_blank">Opt Out</Link>;  Ireland –  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://tools.google.com/dlpage/gaoptout" onclick="javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout'})" target="_blank">Opt Out</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">IDE: 2 years</li>
              <li className="list-item">_gcl_*: 3 months</li>
              <li className="list-item">test_cookie: 15 minutes</li>
            </ul>

            <h4>Marketing</h4>
            <p>This Website uses Trackers to deliver personalised ads or marketing content, and to measure their performance.</p>
            <h5>Trackers managed directly by the Owner</h5>

            <h5><span>1</span>Trackers managed by third parties</h5>
            <p>Google Ads conversion tracking is an analytics service provided by Google Ireland Limited that connects data from the Google Ads advertising network with actions performed on this Website.</p>
            <p>Personal Data processed: Trackers and Usage Data.</p>
            <p>Place of processing:  Ireland –  <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">IDE: 2 years</li>
              <li className="list-item">test_cookie: 15 minutes</li>
            </ul>  

            <h5><span>2.</span> Meta ads conversion tracking (Meta pixel) (Meta Platforms Ireland Limited)</h5>
            <p>Meta ads conversion tracking (Meta pixel) is an analytics service provided by Meta Platforms Ireland Limited that connects data from the Meta Audience Network with actions performed on this Website. The Meta pixel tracks conversions that can be attributed to ads on Facebook, Instagram and Meta Audience Network.</p>
            <p>Personal Data processed: Trackers and Usage Data.</p>
            <p>Place of processing:  Ireland –  <Link href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noopener">Opt out</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">_fbc: 3 months</li>
              <li className="list-item">_fbp: 3 months</li>
              <li className="list-item">fr: 3 months</li>
              <li className="list-item">lastExternalReferrer: duration of the session</li>
              <li className="list-item">lastExternalReferrerTime: duration of the session</li>
            </ul>

            <h5><span>3.</span> X Ads conversion tracking (X Corp.)</h5>
            <p>X Ads conversion tracking is an analytics service provided by X Corp. that connects data from the X advertising network with actions performed on this Website.</p>
            <p>Personal Data processed: Trackers and Usage Data.</p>
            <p>Personal Data processed: device information, Trackers and Usage Data.</p>
            <p>Place of processing:  United States –  <Link href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">muc_ads: 2 years</li>
              <li className="list-item">personalization_id: 2 years</li>
            </ul>  

            <h5><span>4.</span> Facebook Remarketing (Facebook Ireland Ltd)</h5>
            <p>Facebook Remarketing is a remarketing and behavioural targeting service provided by Facebook Ireland Ltd that connects the activity of this Website with the Facebook advertising network.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing:  Ireland –  <Link href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">Opt Out</Link>. </p>
            <p> Trackers duration:  </p>
            <ul className="simple-list list-disc ml-[15px]">  
              <li className="list-item">_fbp: 3 months</li>  
              <li className="list-item">lastExternalReferrer: duration of the session</li>   
            </ul> 

            <h5><span>5.</span> Facebook Custom Audience (Facebook Ireland Ltd)</h5>
            <p>Facebook Custom Audience is a remarketing and behavioural targeting service provided by Facebook Ireland Ltd that connects the activity of this Website with the Facebook advertising network.</p>
            <p>Users can opt out of Facebook&apos;s use of Trackers for ads personalisation by visiting this <Link href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">opt-out page</Link>.</p>
            <p>Personal Data processed: email address and Tracker.</p>
            <p>Place of processing:  Ireland –  <Link href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">Opt Out</Link>. </p>
            <p> Trackers duration:  </p>
            <ul className="list-disc ml-[15px]">  
              <li>_fbp: 3 months</li>  
              <li>lastExternalReferrer: duration of the session</li>  
              <li>lastExternalReferrerTime: duration of the session</li>   
            </ul>

            <h5><span>6.</span>LinkedIn Website Retargeting (LinkedIn Corporation)</h5>
            <p>LinkedIn Website Retargeting is a remarketing and behavioural targeting service provided by LinkedIn Corporation that connects the activity of this Website with the LinkedIn advertising network.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing:  United States –  <Link href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> – <Link href="https://www.linkedin.com/legal/cookie_policy" target="_blank" rel="noopener">Opt Out</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="list-disc ml-[15px]">  
              <li>AnalyticsSyncHistory: 1 month</li>
              <li>JSESSIONID: duration of the session</li>
              <li>UserMatchHistory: 1 month</li>
              <li>bcookie: 1 year</li>
              <li>bscookie: 1 year</li>
              <li>lang: duration of the session</li><li>li_gc: 7 months</li><li>lidc: 1 day</li><li>lissc: 1 year</li><li>lms_ads: 1 month</li>
              <li>lms_analytics: 1 month</li>  
            </ul>  

            <h5><span>7.</span>Twitter Remarketing (X Corp.)</h5>
            <p>Twitter Remarketing is a remarketing and behavioural targeting service provided by Twitter, Inc. that connects the activity of this Website with the Twitter advertising network.</p>
            <p>Personal Data processed: Tracker and Usage Data.</p>
            <p>Place of processing:  United States –  <Link href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <p>Trackers duration:</p>
            <ul className="list-disc ml-[15px]">  
              <li>AnalyticsSyncHistory: 1 month</li>
              <li>JSESSIONID: duration of the session</li>
            </ul>  

            <h5><span>8.</span> HubSpot CRM (HubSpot, Inc.)</h5>
            <p>HubSpot CRM is a User database management service provided by HubSpot, Inc.</p>
            <p>Personal Data processed: Trackers and Usage Data.</p>
            <p>Place of processing:  United States –  <Link href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>;  Germany –  <Link href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <p> Trackers duration:  </p><ul>  <li>__hs_gpc_banner_dismiss: 6 months</li>  <li>__hssc: 30 minutes</li>  <li>__hssrc: duration of the session</li>  <li>__hstc: 2 months</li>  <li>hubspotutk: 2 months</li>  <li>messagesUtk: 2 months</li>   </ul> 

            <h5><span>9.</span> LinkedIn conversion tracking (LinkedIn Insight Tag) (LinkedIn Corporation)</h5>
            <p>LinkedIn conversion tracking (LinkedIn Insight Tag) is an analytics and behavioural targeting service provided by LinkedIn Corporation that connects data from the LinkedIn advertising network with actions performed on this Website. The LinkedIn Insight Tag tracks conversions that can be attributed to LinkedIn ads and enables to target groups of Users on the base of their past use of this Website.</p>
            <p>Users may opt out of behavioural targeting features through their device settings, <Link href="https://www.linkedin.com/psettings/advertising/actions-that-showed-interest" target="_blank" rel="noopener">their LinkedIn account settings</Link> or by visiting the <Link href="https://optout.aboutads.info/" target="_blank" rel="noopener">AdChoices opt-out page</Link>.</p>
            <p>Personal Data processed: device information, Trackers and Usage Data.</p>
            <p>Place of processing:  United States –  <Link href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>. </p>
            <ul className="simple-list list-disc ml-[15px]">
              <li className="list-item">AnalyticsSyncHistory: 1 month</li>
              <li className="list-item">JSESSIONID: duration of the session</li>
              <li className="list-item">UserMatchHistory: 1 month</li>
              <li className="list-item">bcookie: 1 year</li>
              <li className="list-item">bscookie: 1 year</li>
              <li className="list-item">lang: duration of the session</li>
              <li className="list-item">li_gc: 7 months</li>
              <li className="list-item">lidc: 1 day</li>
              <li className="list-item">lms_ads: 1 month</li>
              <li className="list-item">lms_analytics: 1 mon</li>
            </ul>

            <h4>How to manage preferences and provide or withdraw consent on this Website</h4>
            <p>Whenever the use of Trackers is based on consent, users can provide or withdraw such consent by setting or updating their preferences via the relevant privacy choices panel available on this Website.</p>
            <p>With regard to any third-party Trackers, Users can manage their preferences via the related opt-out link (where provided), by using the means indicated in the third party&apos;s privacy policy, or by contacting the third party.</p>

            <h5>How to control or delete Cookies and similar technologies via your device settings</h5>
            <p>Users may use their own browser settings to:</p>
            <ul>
              <li>See what Cookies or other similar technologies have been set on the device;</li>
              <li>Block Cookies or similar technologies;</li>
              <li>Clear Cookies or similar technologies from the browser.</li>
            </ul>
            <p>The browser settings, however, do not allow granular control of consent by category.</p>
            <p>Users can, for example, find information about how to manage Cookies in the most commonly used browsers at the following addresses:</p>
            <ul className="list-disc ml-[15px]">
              <li><Link rel="noopener nofollow" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=en&amp;p=cpn_cookies">Google Chrome</Link></li>
              <li><Link rel="noopener nofollow" target="_blank" href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</Link></li>
              <li><Link rel="noopener nofollow" target="_blank" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/">Apple Safari</Link></li>
              <li><Link rel="noopener nofollow" target="_blank" href="http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies">Microsoft Internet Explorer</Link></li>
              <li><Link rel="noopener nofollow" target="_blank" href="https://support.microsoft.com/en-us/help/4027947">Microsoft Edge</Link></li>
              <li><Link rel="noopener nofollow" target="_blank" href="https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing">Brave</Link></li>
              <li><Link rel="noopener nofollow" target="_blank" href="https://help.opera.com/en/latest/web-preferences/#cookies">Opera</Link></li>
            </ul>
            <p>Users may also manage certain categories of Trackers used on mobile apps by opting out through relevant device settings such as the device advertising settings for mobile devices, or tracking settings in general (Users may open the device settings and look for the relevant setting).</p>

            <h5>How to opt out of interest-based advertising</h5>
            <p>Notwithstanding the above, Users may follow the instructions provided by <Link target="_blank" rel="noopener nofollow" href="http://www.youronlinechoices.eu/">YourOnlineChoices</Link> (EU), the <Link target="_blank" rel="noopener nofollow" href="https://thenai.org/about-online-advertising/">Network Advertising Initiative</Link> (US) and the <Link target="_blank" rel="noopener nofollow" href="https://www.aboutads.info/consumers/">Digital Advertising Alliance</Link> (US), <Link target="_blank" rel="noopener nofollow" href="https://youradchoices.ca/understanding-online-advertising/">DAAC</Link> (Canada), <Link target="_blank" rel="noopener nofollow" href="http://www.ddai.info/optout">DDAI</Link> (Japan) or other similar services. Such initiatives allow Users to select their tracking preferences for most of the advertising tools. The Owner thus recommends that Users make use of these resources in addition to the information provided in this document.</p>
            <p>The Digital Advertising Alliance offers an application called <Link target="_blank" rel="noopener nofollow" href="https://youradchoices.com/appchoices">AppChoices</Link> that helps Users to control interest-based advertising on mobile apps.</p>

            <h5>Consequences of denying consent</h5>
            <p>Users are free to decide whether or not to grant consent. However, please note that Trackers help this Website to provide a better experience and advanced functionalities to Users (in line with the purposes outlined in this document). Therefore, in the absence of the User&apos;s consent, the Owner may be unable to provide related features.</p>
            
            <h4>Owner and Data Controller</h4>
            <p>Ugli Campus, 56 Wood Ln, White City Living, London W12 7SB, United Kingdom</p>
            <p>Owner contact email: admin@yonescat.com </p>
            <p>Since the use of third-party Trackers through this Website cannot be fully controlled by the Owner, any specific references to third-party Trackers are to be considered indicative. In order to obtain complete information, Users are kindly requested to consult the privacy policies of the respective third-party services listed in this document.</p>
            <p>Given the objective complexity surrounding tracking technologies, Users are encouraged to contact the Owner should they wish to receive any further information on the use of such technologies by this Website.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  </>)
}
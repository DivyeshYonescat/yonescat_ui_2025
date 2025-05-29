// components/Modal.js
import React from "react";


const PrivacyModel = ({ isOpen,onClose, type }) => {
  if (!isOpen) return null;
  console.log(type);
  
  return (<>
   
    
    <div className="overlay fixed top-[0] left-[0] w-full h-full bg-[rgba(0,_0,_0,_0.5)] right-[0] bottom-[0] flex" onClick={onClose}>
      <div className="modal bg-[white] p-[20px] rounded-[8px] w-[1000px] max-w-full [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)] relative inline-block m-auto max-h-[530px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton absolute top-[15px] right-[15px] bg-none border-[none] text-[24px] !cursor-pointer text-[#000] p-0 leading-none m-0" onClick={onClose}>
          &times;
        </button>
        <div className="ModelBody float-left w-full bg-transparent p-[12px] overflow-x-hidden h-[500px]  overflow-y-scroll">
          
            <div className="">
                
                <div className="text-center">
                    <h2>Privacy Policy</h2>
                    <p className="my-[20px_40px]">This policy is effective as of 11th November 2022</p>
                </div>
                {/* TEXT BLOCK */}
                <div className="txt-block legal-info">
                    {/* Title */}
                    <h4> Information on opting out of interest-based advertising </h4>
                    {/* Text */}
                    <p> In addition to any opt-out feature provided by any of the services listed in this document, Users may learn more on how to generally opt out of interest-based advertising within the dedicated section of the Cookie Policy. </p>
                    {/* Text */}
                    
                    {/* Title */}
                    <h4 > Further information about the processing of Personal Data</h4>
                    {/* Small Title */}
                    <h5> Unsolicited Speculative Recruitment Contact</h5>
                    {/* Text */}
                    <p>Any CVs sent to any member of our team on a speculative basis will not be recognised and we will not accept liability for any fee or commission should we subsequently employ a candidate who applied to us directly or was introduced by an instructed agency that may also have been submitted speculatively by an uninstructed agency.  </p>

                        {/* Title */}
                        <h4 > Contact information </h4>
                    {/* Text */}
                    <h5> Owner and Data Controller </h5>
                    <p>Ugli Campus, 56 Wood Ln, White City Living, London W12 7SB, United Kingdom</p>
                    <h5>Owner contact email: admin@yonescat
                            </h5>
                    {/* Text */}

                    <h3 className="mt-10 mb-3">Personal Data processed for the following purposes and using the following services:</h3>
                    <p> </p>

                    <div className="txt-block mt-10">
                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">1</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3  className="font-bold">Advertising</h3>
                                <h5 className="font-semibold my-[10px]">Google Ads conversion tracking, Meta ads conversion tracking (Meta pixel) and X Ads conversion tracking</h5>
                                <p>Personal Data: Trackers; Usage Data</p>

                                <h5 className="s-16 w-700">LinkedIn conversion tracking (LinkedIn Insight Tag)</h5>
                                <p>Personal Data: device information; Trackers; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">2</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Tag Management</h3>

                                <h5 className="font-semibold my-[10px]">Google Tag Manager</h5>
                                <p>Personal Data: Tracker</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">3</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Displaying content from external platforms</h3>

                                <h5 className="font-semibold my-[10px]">Google Fonts and Font Awesome</h5>
                                <p>Personal Data: Tracker; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">4</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Interaction with external social networks and platforms</h3>

                                <h5 className="font-semibold my-[10px]">Twitter Tweet button and social widgets, Facebook Like button and social widgets and LinkedIn button and social widgets</h5>
                                <p>Personal Data: Tracker; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">5</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Interaction with live chat platforms</h3>

                                <h5 className="font-semibold my-[10px]">HubSpot Chat</h5>
                                <p>Personal Data: answers to questions; contents of the email or message; email address; first name; last name</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">6</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Interaction with external social networks and platforms</h3>

                                <h5 className="font-semibold my-[10px]">Twitter Tweet button and social widgets, Facebook Like button and social widgets and LinkedIn button and social widgets</h5>
                                <p>Personal Data: Tracker; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">7</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Registration and authentication provided directly by this Website</h3>

                                <h5 className="font-semibold my-[10px]">Direct registration</h5>
                                <p>Personal Data: company name; email address; first name; last name; phone number</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">8</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Remarketing and behavioural targeting</h3>

                                <h5 className="font-semibold my-[10px]">Facebook Remarketing, Google Ad Manager Audience Extension, Google Ads Remarketing, LinkedIn Website Retargeting and Twitter Remarketing</h5>
                                <p>Personal Data: Tracker; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">9</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Spam and bots protection</h3>

                                <h5 className="font-semibold my-[10px]">Cloudflare Bot Management</h5>
                                <p>Personal Data: app information; Application opens; browser information; browsing history; city; clicks; country; county; custom events; device information; device logs; geography/region; interaction events; IP address; keypress events; language; latitude (of city); launches; longitude (of city); metro area; motion sensor events; mouse movements; number of sessions; operating systems; page events; page views; province; scroll position; scroll-to-page interactions; search history; session duration; session statistics; state; touch events; Trackers; Usage Data; video views; ZIP/Postal code</p>

                                <h5 className="font-semibold my-[10px]">Google reCAPTCHA</h5>
                                <p>Personal Data: answers to questions; clicks; keypress events; motion sensor events; mouse movements; scroll position; touch events; Trackers; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">10</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Traffic optimisation and distribution</h3>
                                <h5 className="font-semibold my-[10px]">Cloudflare</h5>
                                <p>Personal Data: Tracker</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">11</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>User database management</h3>

                                <h5 className="font-semibold my-[10px]">HubSpot CRM</h5>
                                <p>Personal Data: Trackers; Usage Data</p>
                            </div>
                        </div>

                        <div className="cbox-2 process-step">
                            <div className="ico-wrap">
                                <div className="cbox-2-ico bg--theme color--white">12</div>
                                <span className="cbox-2-line"></span>
                            </div>
                            <div className="cbox-2-txt">
                                <h3>Analytics</h3>

                                <h5 className="font-semibold my-[10px]">Google Analytics (Universal Analytics)</h5>
                                <p>Personal Data: Tracker; Usage Data</p>

                                <h5 className="font-semibold my-[10px]">Cloudflare Web Analytics</h5>
                                <p>Personal Data: device information; language; Usage Data</p>

                                <h5 className="font-semibold my-[10px]">Google Analytics 4</h5>
                                <p>Personal Data: Usage Data</p>

                                <h5 className="font-semibold my-[10px]">Matomo</h5>
                                <p>Personal Data: IP address; Trackers; Usage Data</p>

                                <h5 className="font-semibold my-[10px]">Google Analytics Advertising Reporting Features</h5>
                                <p>Personal Data: Trackers; unique device identifiers for advertising (Google Advertiser ID or IDFA, for example); various types of Data as specified in the privacy policy of the service</p>

                                <h5 className="font-semibold my-[10px]">Google Analytics (Universal Analytics) with anonymised IP</h5>
                                <p>Personal Data: Trackers; Usage Data</p>

                                <h5 className="font-semibold my-[10px]">Google Analytics Demographics and Interests reports</h5>
                                <p>Personal Data: Trackers; unique device identifiers for advertising (Google Advertiser ID or IDFA, for example)</p>

                                <h5 className="font-semibold my-[10px]">Matomo Cloud</h5>
                                <p>Personal Data: page views</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
      </div>
    </div>
   
    </>
  );
};

export default PrivacyModel;

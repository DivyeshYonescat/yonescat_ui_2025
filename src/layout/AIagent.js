// components/Captcha.js
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Ai_agtnet from "@/../public/images/main/svg/noun-chatbot.svg";
import Close from "@/../public/images/main/svg/cross-close-svgrepo-com.svg";
import Image from 'next/image';



const AIagentComponent = ({isVisible,onCaptchaVerified }) => {
  const [toogleAiBox, setToogleAiBox] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const element = document.getElementById('aiAgentComponent');
      if (!element) return; 
      if (element.childNodes.length > 0) {
        element.childNodes.forEach((node) => {
          node.shadowRoot?.querySelectorAll('span').forEach((childNode) => {
            if (childNode.nodeType === Node.ELEMENT_NODE && childNode.textContent.includes('Powered by ElevenLabs ')) {
              childNode.parentElement.remove();
            }
          })
        });
      }
    });

    // Start observing the body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id='aiAgentComponent' className={`ai-agent-component ${toogleAiBox ? 'block' : 'hidden'} `}>
        <elevenlabs-convai id="jY9zVn1YbR5JTJCHQxV9" agent-id="jY9zVn1YbR5JTJCHQxV9"></elevenlabs-convai>
        <Script async src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />
      </div>
      {toogleAiBox === false ? <>
        <div className={`ai_toggle_btn ${isVisible ? 'slide-in' : 'slide-out'}`} onClick={() => setToogleAiBox(!toogleAiBox)}>
          <Image src={"/images/main/svg/noun-chatbot.svg"} alt="AI Agent" width={50} height={50} className="ai_toggle_btn_img" />
        </div>
      </> : <>
        <div className="ai_toggle_btn_top" onClick={() => setToogleAiBox(!toogleAiBox)}>
          <Image src={"/images/main/svg/cross-close-svgrepo-com.svg"} alt="AI Agent" width={15} height={15} className="ai_toggle_btn_img" />
        </div>
      </>}
    </>
  );
};

export default AIagentComponent;

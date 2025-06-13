import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";

export default function Emalilsecurity() {
  return(<>
    <Layout>
      <div className="section-main">
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/email-securiry.webp"} BgColor={""} order="order-1">
            <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div>
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Email Security</h3>
                <p className="sub-page-discretion">With the advancement in technology and everything moving towards digital formats, data is the most valuable asset in the world. Whether it's in the form of research, studies, or reports, utilization of data has changed the course of our world. But one particular sort of data that many don't put much into consideration is email. Well, it could be because of the massive spread of malware, spam, or phishing attacks that people often don't take Email Security seriously. We all hate spam. It's annoying, frustrating, and simply ridiculous. And spam leads to phishing attacks. Phishing is a sort of attack on your personal data in which an attacker sends a suspicious message just to acquire personal and valuable information or deploying harmful software on the victim's system, such as ransomware. And you don't want to be a victim of ransomware. With Yonescat, you need not worry about any of it!</p>
                <p className="sub-page-discretion">We understand that there is very valuable information that is stored in your emails which you might not even be aware of. Email is the most common loophole that attackers are looking for when they wish to gain access to your personal data without authorization. Their main purpose is basically to get a foothold in an enterprise network and obtain valuable company data which they could either sell on the black market or use against you for any reason. Email Security is a vital component when it comes to the Cyber Security of an organization.</p>  
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>
      <div className="container">
        <div className="sub-page-textbox">  
          <h3 className="sub-page-title">What is Email Security?</h3>
          <p className="sub-page-discretion"> Email security refers to the methods and strategies used to safeguard email accounts, information, and communication from unwanted access, loss, or compromise. To protect their data, many companies trust solely on email encryption which is a type of disguise to secure data from any unwanted party. The good thing about email encryption is that it usually requires authentication to which only the sender and the receiver are authorized for. This surely keeps data safe but to some extent. Your email data is still vulnerable to cyber-attacks and costs you a fortune if you don't have it secured. </p>
        </div>
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">How Secure is Yonescat's Email Security?</h3>
          <p className="sub-page-discretion">With us, you can be assured to have a customized email design to be an open medium of communication for organizations to communicate with each other and with people in other organizations. It is quick, simple, and easy to use. There are no specific technical abilities or skillsets required to use Email. Well, the problem with Email is that it is not secured at all. And for that same reason, attackers or hackers take advantage of Emails to cause issues to profit. Spam campaigns, malware and phishing attempts, sophisticated targeted attacks, and business email compromise (BEC) are just some of the ways attackers try to take advantage of email's lack of security. As most businesses rely on email to do business, attackers use it to try to steal important information. </p>
          <p className="sub-page-discretion"> The next question would be, is it that simple? Well, yes because email is an open format. Anyone who can intercept the emails can view them which makes email security a big concern for organizations. So, what's the solution? </p>
          <p className="sub-page-discretion"> Yonescat, a software development creative agency that provides various digital services including web hosting, cyber security, Data Center, Cloud VPS, and a lot more. One of them is Email Security. </p>
        </div>
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Secure your Organization against Harmful Email Threats</h3>
          <p className="sub-page-discretion"> We understand and realize the threat that lies with email communication within an organization. We have identified that email is the primary method for attackers to initiate an advanced attack. And for that, we have the perfect secured solution. </p>
          <p className="sub-page-discretion"> Our secured email gateways allow you to communicate and forward any valuable information without the threat of losing it or getting in the wrong hands. Our gateways can detect any threat that other solutions might miss which makes you take primary precautions beforehand. </p>
          <p className="sub-page-discretion"> With such a drastic change in the email threat landscape, we have crafted secured gateways for your emails to travel without any third-party interceptions. Yonescat's Email Security is the world's first secure email gateway that can detect and prevent new adversary methods based on frontline investigations and observations. It consistently adapts to new technological advancements that could prove to be fatal in case of any cyber-attack on your email system. </p>
          <p className="sub-page-discretion"> This email security gateway can help your cyber security professionals and employees perform more efficiently. The system stops attacks in real-time, reducing warning fatigue, and allowing security professionals to monitor rules and tailor responses based on the severity of the alerts. </p>
        </div>   
      </div> 
      <ContactSection/>
    </Layout>
  </>)
}
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import { useState } from "react";

export default function DecentralizedSystems() {
  const [showMore, setShowMore] = useState(false);
  
  const toggleText = () => {
    setShowMore(prev => !prev);
  };
  return(<>
  <Layout>
    <div className="">
      <div className="container">
        <div className="sub-page-textbox">
          <p className="sub-page-discretion">Decentralized systems are gaining widespread atte bntion with the advent of blockchain technology, such as Ethereum, Bitcoin, PolkaDot, Zeus coin and other cryptocurrencies. These systems use the characteristics of cryptography, chains, wallets, tokens and coins to reach an agreement on the financial transactions based on the smart contract system. The result is a verifiable distributed ledger that eliminates the need for central banking authorities. These ledgers are distributed to all cryptocurrency users, but the blockchain itself is decentralized.</p>
          <h3 className="sub-page-title">Our team provide in-depth solutions to create stable Decentralized applications.</h3>
          <p className="sub-page-discretion">At Yonescat, we relish the new modelling for building massively scalable and profitable applications that could emerge with the modern world, cutting-edge technologies.</p>
          <p className="sub-page-discretion">We serve businesses through scarce-asset models, stored ledgers, and peer-to-peer technologies within the Decentralized dilemma. These features assist us at starting point for building a new type of software called Decentralized applications, short for dApps. </p>
        </div>
      </div>
    </div>
    <div className="section-main">
      <div className="container">
        <div className="card-box-inner grid  grid-cols-2 max-md:grid-cols-1 gap-7">
          <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/decentralized-systems-01.webp"} BgColor={""} order="order-2">
            {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
            <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Yonescat - Decentralized and dApps</h3>
                <p className="leading-[20px] mb-[15px]">A "blockchain" is a computer-coded system for chaining unmodifiable and unchangeable, reliable and efficient transactions. IBM stated:</p>
                {showMore && (<>
                <p className="leading-[20px] mb-[15px]">Every transaction is recorded as a block of data. Each block is connected to the previous and next blocks. Transactions are blocked together in an irreversible chain (blockchain).</p>
                <p className="leading-[20px] mb-[15px]">A set of rules (so-called smart contracts) are stored on the blockchain and executed automatically to speed up transactions. Smart contracts can define corporate bond transfer terms, travel insurance payment terms, and more.</p>
                <p className="leading-[20px] mb-[15px]">Therefore, smart contracts are an agreement between the parties that are entirely contained in the computer code and blockchain. Our distributed ledger platform and Smart contracts are short and focused on paying for more goods and services.</p>
                <p>To be lawfully enforceable, our DeFi and smart contract always meet basic requirements of law. Our standard legal agreements on binding contracts allow businesses to achieve the best of both worlds, faster electronic payments.</p>
                </>)}
                <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>
          <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/decentralized-systems-03.webp"} BgColor={""} order="order-2">
            {/* <div className="director-text order-1 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]"> */}
            <div className="card-main-box-img-text director-text order-2 max-md:order-2 w-full flex items-center">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Let us legalize Smart Contracts and Decentralized networks for you</h3>
                <p className="leading-[20px] mb-[15px]">Blockchain can no longer have a revolutionary impact on finance, but it is a reality because our dApps are already bringing value and benefits to consumers.</p>
                {showMore && (<>
                <p className="leading-[20px] mb-[15px]">Decentralized Finance (DeFi) and Decentralized Applications (dApps) allow anyone with an internet connection to participate in a new generation of financial services. Therefore, our DeFi dApps are a formidable alternative to traditional financial services.</p>
                <p className="leading-[20px] mb-[15px]">Thanks to the reliable, immutable and transparent properties of blockchain, they are becoming more and more popular and difficult to close. Get the transparency of blockchain, most dApps have open source software that users can review and review on their own.</p>
                <p>Our projects are protected and promoted by either the Proof of Work (PoW) consensus mechanism, the Proof of Stake (PoS) consensus mechanism, or a combination of both. There are many other types of consensus mechanisms, but these two are the most widely used so we prefer them. Precisely, get a unique way to maintain network security while avoiding centralization issues.</p>
                </>)}
                <Button onClick={toggleText} type="button">{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
            </div>  
          </BoxSection>
        </div>
        <BoxSection rightImage={true} ImageUrl={"/images/main/section_image/decentralized-systems-02.webp"} BgColor={""} order="order-1">
          <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
            <div className="">
              <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Yonescat Provides Private Blockchains for your Business</h3>
              <p className="leading-[20px] mb-[15px]">Although the original Bitcoin blockchain provided functional democratically without interference or influence from banks or central regulators, personalized blockchain integration can operate within closed parameters.</p>
              <p>At Yonescat, we can implement your own blockchain and control the transactions added to the chain. It remains a secure system, but like the traditional banking system, it is based on the trust of decision-makers. Our digital platform provides personalized versions of blockchain technology, such as Ripple, R3 Corda, and Hyperledger Fabric restricting access to transaction data to the third parties involved in the transaction, rather than exposing the data in a public ledger similar to Bitcoin.</p>
            </div>
          </div>  
        </BoxSection>
      </div>  
    </div>  

    <div className="">
      <div className="container">
        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Yonescat ensures Tamper-proof system architecture</h3>
          <p className="sub-page-discretion">Architecture relies heavily on the needs of a particular decentralized application; we attempt to clarify some of the basic interaction patterns on which these applications are built.</p>
        </div>

        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Our Client ⬌ Ð Platform: Fully decentralized application.</h3>
          <p className="sub-page-discretion">The client (browser or mobile application) communicates directly with the distributed platform using Crypto "wallet" and Ledger.</p>
        </div>

        <div className="sub-page-textbox">
          <h3 className="sub-page-title">Our Ð Platform ⬌ Client ⬌ Backend ⬌ Ð Platform: Centralized or semi-centralized application.</h3>
          <p className="sub-page-discretion">The client interacts with distributed platforms and servers with little in common. The currencies traded on the exchange are only recorded in traditional databases. Consumers can "replenish" database credits by sending the asset to a specific address, performing some actions in the app and then withdrawing the asset, but keeping everything in connection with it.</p>
        </div>
        
      </div>
    </div>


    <ContactSection/>
  </Layout>  
  </>)
}
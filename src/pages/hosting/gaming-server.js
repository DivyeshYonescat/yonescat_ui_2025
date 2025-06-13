import ListBox from "@/components/listBox";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function GameServer() {

  const ListArray = [
    {"id":"1","listimg":"/images/main/section_image/Icon_Img/Band.png","title":"Bandwidth"},
    {"id":"2","listimg":"/images/main/section_image/Icon_Img/The_processor.webp","title":"The processor"},
    {"id":"3","listimg":"/images/main/section_image/Icon_Img/Storage_capacity.webp","title":"Storage capacity"},
    {"id":"4","listimg":"/images/main/section_image/Icon_Img/Speed_server.webp","title":"Speed of the server"},
    {"id":"5","listimg":"/images/main/section_image/Icon_Img/memory.webp","title":"The memory"},
  ]

  return(<>
    <Layout>
      <div className="section-main">
        <div className="container">
          <BoxSection rightImage={true} ImageUrl={"/images/main/gaming-server.webp"} BgColor={""} order="order-1">
            <div className="director-text order-2 max-md:order-2 w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
              <div className="">
                <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What Is a Gaming Server?</h3>
                <p className="sub-page-discretion">A gaming server is referred to as a computer that hosts a video game for a client. This gaming server is used by gamers or clients to run multiplayer online games over the Internet. Such gaming servers can be hosted either remotely or locally. Those hosted remotely can be accessed from across the world whereas those hosted locally can be accessed locally. However, video games and online computer games which are playable on game servers usually require membership fees in return for access.</p>
                <p className="sub-page-discretion">Gaming servers offer more memory, processing, and storage capabilities. Regardless of the type of game you play, a gaming server will always have enough resources to run the game quickly and efficiently. In addition, gaming servers offer a stable, fast, and reliable connection to your favorite online games.</p>
                <p className="sub-page-discretion">Yonescat is the leading IT solution provider that can help you obtain the best gaming servers seamlessly –at relatively affordable rates. Don’t look around anymore as you landed the right platform that can help you satisfy your unique business needs seamlessly. Contact us today and we will help you exceptionally.</p>
              </div>
            </div>  
          </BoxSection>
        </div>
      </div>

      <div className="container">
        <div className="sub-page-textbox mt-0">
          <h3 className="sub-page-title">Why Gaming Servers That Are Available in Yonescat Are Essential?</h3>
          <p className="sub-page-discretion">Getting gaming servers from us will help you in countless ways that will help you meet your needs efficiently.</p>
          <p className="sub-page-discretion">Every multiplayer online game has clients and a host:</p>
          <ul className="list-disc pl-[15px]">
            <li className="mb-[10px]"><p>Clients are referred to those participating in the game without any sort of hosting responsibilities.</p></li>
            <li className="mb-[10px]"><p>The host referred to a server that usually transmits data to all the players as well as keeps the game in sync.</p></li>
          </ul>
          <p className="sub-page-discretion">The host-player uses the computer or console to run the local version of the game, but that device also keeps the entire game in sync for all clients.:</p>
          <p className="sub-page-discretion"> Mostly, in online matches, the host will either be the player who started the game or the one with the least latency. Furthermore, the host player will use the console or computer to run the local version of the game – however, the device also helps keep the whole game in sync for all clients. The host will tackle the:</p>

          <ul className="list-disc pl-[15px]">
            <li className="mb-[10px]"><p>Player interactions.</p></li>
            <li className="mb-[10px]"><p>Score and rules.</p></li>
            <li className="mb-[10px]"><p>Each character’s load-out.</p></li>
            <li className="mb-[10px]"><p>The activity of all the players.</p></li>
            <li className="mb-[10px]"><p>Every player’s location in the game.</p></li>
            <li className="mb-[10px]"><p>What direction all players are facing.</p></li>
            <li className="mb-[10px]"><p>The physics happening around every player.</p></li>
          </ul>
        </div>    
      </div>  
      <div className="section-main pb-0">
        <div className="container">
          <div className="sub-page-textbox">
            <h3 className="sub-page-title"> Why Choose the Gaming Servers from Yonescat! </h3>
            <p className="sub-page-discretion">Choosing the gaming server from Yonescat will help you in numerous ways – read here!</p>
            <p className="sub-page-discretion">In order to choose the right and best gaming server, it is suggested to consider your needs first and foremost. However, there are a few specifications that should be in your mind so that you can choose a gaming server according to your certain needs:</p>
            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              <ListBox ListArray={ListArray} />
            </div>
          </div>    
        </div>      
      </div>

      <div className="section-main pb-0">
        <div className="container">
          <h3 className="mb-[15px]">Benefits of Getting a Dedicated Gaming Server from Yonescat!</h3>
          <p>A dedicated server – that you will get form Yonescat, for gaming comes with optimal benefits that no one can ignore. – and you should consider for sure. Contact us to get yours now!</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Ability to Handle High Traffic Demand</h3>
                <p>Multiple players can play games on a dedicated gaming server without impacting performance.</p>
                <p>Also, the admin can set a max cap on the number of players to make sure that the game will not be overcrowded.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">Reliable Infrastructure</h3>
                <p>A dedicated gaming server has 24/7 server monitoring which makes it possible that the game is always available. Even in the case of the local grid going down, the gaming server provides a backup generator that ensures the game’s availability.</p>
                <p>In addition, you don’t need to worry about overheating when using a dedicated gaming server. It doesn’t matter how much action the game sees, constant cooing system provided by data centres ensure that the infrastructure can handle the workload effectively.</p>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">High Levels of Security</h3>
                <p>Dedicated gaming servers provide a high level of protection and security, which make them highly effective gaming player. In a dedicated gaming server:</p>
                <ul className="list-disc pl-[15px]">
                  <li className="mb-[10px]"> <p>The admin usually explains who can log into the device, to prevent intruders act as random players and gaining access.</p> </li>
                  <li className="mb-[10px]"> <p>A gaming server will only run video games and nothing else.</p> </li>
                  <li className="mb-[10px]"> <p>Hosting providers invest heavily in cybersecurity to overcome the cybercrime challenges and risks.</p> </li>
                  <li className="mb-[10px]"> <p>The gaming server doesn’t have any emails or applications in the background, so there will be minimal chances of cyber-attacks.</p> </li>
                </ul>
              </div>
            </div>  
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">4</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">High Levels of Customization</h3>
                <p>The admin is all free to define the game regulations and principles. You are also free to evaluate who can enter into the game. The admin will also be able to kick the players out of the game for sound reasons like rules violations.</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
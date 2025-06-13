
import Image from "next/image";
import Layout from "@/layout/Layout";
import ContactSection from "@/components/sections/contact";
import ListBox from "@/components/listBox";


export default function ECommerce() {
  const ListArray = [
    {"id":"1","listimg":"/images/main/smart-house.webp","title":"Smart Homes"},
    {"id":"2","listimg":"/images/main/smart-city.webp","title":"Smart City"},
    {"id":"3","listimg":"/images/png_icons/tool-1.webp","title":"Track & Tracing machines"},
    {"id":"4","listimg":"/images/main/autonomous-car.webp","title":"Self-driven Cars"},
    {"id":"5","listimg":"/images/main/online-shop.webp","title":"IoT Retail Shops"},
    {"id":"6","listimg":"/images/main/gardening.webp","title":"Farming"},
    {"id":"7","listimg":"/images/main/smartwatch.webp","title":"Wearables"},
    {"id":"8","listimg":"/images/main/smart-grid.webp","title":"Smart Grids"},
    {"id":"9","listimg":"/images/main/manufacturing.webp","title":"Industrial Internet"},
    {"id":"10","listimg":"/images/main/doctor-consultation.webp","title":"Telehealth"},
    {"id":"11","listimg":"/images/png_icons/tool-1.webp","title":"Automated Warehouse"},
    {"id":"12","listimg":"/images/png_icons/tool-1.webp","title":"Smart Supply-chain Management"},
  ]  
  return(<>
    <Layout>
      <div className="">
        <div className="container">
          <div className="sub-page-textbox">
            <p className="sub-page-discretion">IoT services include consulting, development, data analytics, and app management aimed at optimizing and automating corporate workflows using IoT technology.</p>
            <p className="sub-page-discretion">Yonescat transforms your business with powerful, adaptive digital solutions that meet today's needs and open up tomorrow's opportunities.</p>
            <h3 className="sub-page-title">IoT, Wide Applications & Yonescat</h3>
            <p className="sub-page-discretion">Yonescat represents Internet of Things in a physical object that has sensors, processing capabilities, application and other technologies that connect and exchange data with other applications and systems over the Internet and other communication networks.</p>
          </div>
          <div className="sub-page-textbox mt-0">
            <h3 className="sub-page-title">We Help Customers To Take Advantage Of IoT And Align Themselves For The Future.</h3>
            <p className="sub-page-discretion">We help customers leverage IoT to future-proof their businesses. IoT has become integral in all aspects of life, and our services connect everything to create a smarter world. To fully realize IoT's potential, businesses must address key challenges. Yonescat's IoT solutions transform business needs into competitive advantages, offering services from sensor integration to platform selection and data analysis. We help businesses:</p>
            <div className="txt-block mt-10 grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">1</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Expand networks efficiently</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">2</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Analyze data for informed actions</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">3</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Transform business processes</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">4</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Enhance decision-making with advanced intelligence</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">5</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Manage end-to-end IoT implementation</p>
                </div>
              </div>
            </div>  
            <p className="mt-8">With over more than considerable IoT customers, we are in a unique position to help increase business value, increase efficiency, and reduce business-servicing costs.</p>
          </div>
        </div>
      </div>
      <div className="section-main">
        <div className="container">
          <div className="">
            <h3 className="s-26 w-700">Yonescat Involvement in IoT Applications</h3>
            <div className="grid grid-cols-6  gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
              <ListBox ListArray={ListArray} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="sub-page-textbox mt-0">
            <h3 className="sub-page-title">Yonescat specializes in Hardware, Software for tracking and reporting!</h3>
            <p className="sub-page-discretion">Tracking IoT assets includes acquiring, tracking, and monitoring all hardware and software in your IoT environment. At Yonescat, tracking your IoT assets can help you make important decisions when buying hardware or selling applications.</p>
            <div className="txt-block mt-10 grid grid-cols-1">
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">1</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Our IoT asset tracking application eliminates the need for manual asset tracking because it is time-consuming, cumbersome, and prone to human error.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">2</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">As the number of mobile devices in the corporate world grows, we want to develop mobile devices that can access the company's resources.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">3</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Our central applications for integrated endpoint management helps you configure and protect your mobile devices from a central location.</p>
                </div>
              </div>
              <div className="cbox-2 process-step items-center mb-[10px]">
                <div className="ico-wrap !mr-4">
                  <div className="cbox-2-ico">4</div>
                </div>
                <div className="cbox-2-txt !mb-0 flex items-center">
                  <p className="">Our applications designs simplify the management of desktop and mobile devices.</p>
                </div>
              </div>
            </div>  
          </div>
        </div>  
      </div>
      <div className="section-main pb-0">
        <div className="container">
          <h3>Our Approaches - NFC, RFID, Beacons and GPRS</h3>
          <p>To meet the requirement of IoT, Yonescat incorporate various technologies such as,</p>
          <div className="txt-block mt-10">
            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">1</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">RFID technology</h3>
                <p>RFID technology uses tags containing small circuits to identify radio waves. The tag can be as thin as a paper label or as large as a key fob, depending on the number of data. RFID tags categories into passive tags and active tags. Reading RFID tags does not "require" a "line view" like barcodes, but "reading distance" depends on whether the RFID tag is active or passive. RFID readers can be fixed readers or mobile readers, but mobile phones cannot read RFID tags such as barcodes.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">2</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">NFC (Near field communication) </h3>
                <p>NFC (Near field communication) is a set of communication protocols used to communicate between two electronic devices at a distance of 4 cm or less. NFC provides a slow and simple setup connection that you can use to launch stronger wireless connections.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">3</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">The Beacon </h3>
                <p>The Beacon is powered by Bluetooth Low Energy (BLE) technology and is a small wireless battery-powered sensor that detects the temperature inside the cold case, movement in the backroom, the amount of items on the shelves, spills in the gas, and more. When a customer logs in to the station or store's mobile app and activates Bluetooth over the phone enters the store. IoT describes such interoperability of machines or mobile application over the Internet; we not only recognize information but also transmit and receive data. In addition, as a part of our services, we make this information available to other applications of consumers.</p>
              </div>
            </div>

            <div className="cbox-2 process-step">
              <div className="ico-wrap">
                <div className="cbox-2-ico">4</div>
                <span className="cbox-2-line"></span>
              </div>
              <div className="cbox-2-txt">
                <h3 className="mb-4">General Packet Radio Service (GPRS)</h3>
                <p>General Packet Radio Service (GPRS) is a packet-based 2.5G technology developed to support packet-switched traffic in cellular network (GSM) global systems. GPRS enables high-speed Internet connectivity and other data communications in GSM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection/>
    </Layout>
  </>)
}
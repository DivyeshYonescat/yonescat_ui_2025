import Layout from "@/layout/Layout";
import Overview from "@/components/overview";
import CommonSection from "@/components/sections/section";


export default function Home() {
  const list = [{
    "id":"1",
    "image":"mobile-app-teaser.webp",
    "title":"Mobile Applications",
    "discrition":"Mobile Applications designed for mobile devices or tablets, mobile applications offer services akin to those on PCs. With over 17 years of experience in cloud, website, and mobile technologies, Yonescat offers customized software development services. Yonescat's latest mobile applications focus on clarity, easy-to-use features, intuitive navigation, a decluttered UI, efficient tap targets, and accessibility for users with disabilities. They choose the right framework for their apps, such as React Native, Flutter, Xamarin, Apache Cordova, and Ionic, ensuring high development speed, app app applicability, flexibility, and manageability. Yonescat also prioritizes support maintenance and upkeep, aiming for high download rates and active user retention.",
    "link":"/solutions/mobile-applications"
  },
  {
    "id":"2",
    "image":"web-cloud-teaser.webp",
    "title":"Web & Cloud Portals",
    "discrition":"Web and cloud portals are website-based platforms that provide a single source of information for customers, suppliers, and employees. They enable companies to personalize and streamline interactions with customers and businesses. Yonescat, a software company, offers web and cloud portals that cater to the needs of professionals. Yonescat offers secure, robust infrastructure, a unified codebase, an edge-to-cloud platform, and a Next Generation Customer Web Portal. These portals offer benefits such as digital transformation, service resilience, an intuitive user experience, low code changes, and improved digital experiences. Yonescat's approach also reduces maintenance and support costs.",
    "link":"/solutions/web-and-cloud-portals"
  },
  {
    "id":"3",
    "image":"ecommerce-teaser.webp",
    "title":"E-commerce",
    "discrition":"Yonescat is a leading provider of e-commerce solutions, focusing on hybrid and premium-level cloud, iOS, and Android applications. With a history of delivering cutting-edge technology, Yonescat offers solutions for various industries, use cases, and enterprise sizes. They offer support for B2B, global expansion, and direct-to-consumer (D2C) sales. Yonescat's GDPR compliance ensures that the internet is user-centered, secure, and user-centered, while its PCI and DDS hosting services meet payment card industry data security standards. Yonescat's GDPR implementation enhances the user's right to data processing and data alteration. Yonescat, with 2.15 billion worldwide virtual shoppers in 2022, is a valuable tool for businesses looking to thrive in the digital market.",
    "link":"/solutions/e-commerce"
  },
  {
    "id":"4",
    "image":"data-analytics-teaser.webp",
    "title":"Data Analytics",
    "discrition":"Data analytics is a crucial tool for businesses and individuals to organize and make sense of data. Yonescat, an IT-based company, covers all domains of data analytics, including financial, customer, sales, and product analytics. Data analytics helps organizations make informed decisions, optimize operations, and understand customer needs. It involves obtaining, organizing, and understanding data in innovative ways, generating insights, and implementing both internal and external data. Data analysts analyze and interpret data to make informed decisions and optimize operations. By understanding target audience expectations and requirements, businesses can launch marketing campaigns and customize their services accordingly, leading to increased business growth and reduced costs.",
    "link":"/solutions/data-analytics"
  },
  {
    "id":"5",
    "image":"vr-teaser.webp",
    "title":"Virtual Reality",
    "discrition":"Yonescat Virtual Reality provides adventure advertising expertise and video design services for businesses looking to increase sales. They create immersive VR experiences, enabling deeper interaction and imagination, and guide the manufacturing process. Yonescat provides top-notch VR applications for iOS and Android, including native and hybrid versions. They offer professional compliance, content training, and PDP services. Yonescat also offers virtualization services for easier upgrades, scalability, and cost savings. They aim to become a metaverse company, integrating physical, augmented, and virtual reality in a common online space. Yonescat's solutions include virtualization before build and rollout, reducing IT costs, reducing downtime, increasing efficiency, and being environmentally friendly.",
    "link":"/solutions/virtual-reality"
  },
  {
    "id":"6",
    "image":"decentralize-teaser.webp",
    "title":"Decentralized Systems",
    "discrition":"Decentralized systems, such as Ethereum, Bitcoin, and other cryptocurrencies, are gaining attention due to their use of cryptography, chains, wallets, tokens, and coins. These systems eliminate the need for central banking authorities and provide a verifiable distributed ledger. Yonescat offers solutions to create stable decentralized applications, such as dApps, which are scalable and profitable. Yonescat provides private blockchains for businesses, allowing them to implement their own blockchain and control transactions. They also legalize smart contracts and decentralized networks, ensuring they meet basic legal requirements for faster electronic payments. Yonescat ensures a tamper-proof system architecture for their clients.",
    "link":"/solutions/decentralized-systems"
  },
  {
    "id":"7",
    "image":"iot-teaser.webp",
    "title":"IoT",
    "discrition":"Yonescat offers IoT services that include consulting, development, data analytics, and app management to optimize and automate corporate workflows using IoT technology. They help businesses turn their needs into a competitive advantage by offering innovative IoT-based solutions. Yonescat incorporates technologies such as RFID, NFC, beacons, and GPRS to meet the requirements of IoT. They are involved in various IoT applications such as smart homes, smart cities, self-driven cars, IoT retail shops, farming, wearables, smart grids, industrial internet, telehealth, automated warehouses, and smart supply-chain management. Yonescat also specializes in hardware and software for tracking and reporting IoT assets, simplifying the management of desktop and mobile devices.",
    "link":"/solutions/iot"
  }]
  return (
    <>
      <Layout>     
        <CommonSection />   
        <Overview list={list} />
      </Layout>
    </>
  );
}
import Layout from "@/layout/Layout";
import Overview from "@/components/overview";

export default function Home() {
  const list = [{
    "id":"1",
    "image":"shared-hosting-teaser.webp",
    "title":"Shared Hosting",
    "discrition":"Shared hosting allows multiple websites to coexist on a single server, with a specified usage limit. It's ideal for beginners and the cheapest option for newbies. Yonescat provides secure and reliable web hosting services. They provide daily backups, a cPanel control panel, and quick setup in seconds. Yonescat's services are comparable to public transport, with a user-friendly dashboard and SEO features. The cheapest option is Yonescat, which allows you to upgrade packages over time. The built-in cPanel makes site management easy, and no technical maintenance is required.",
    "link":"/hosting/shared-hosting"
  },
  {
    "id":"2",
    "image":"clould-reseller-teaser.webp",
    "title":"Cloud Reseller",
    "discrition":"Yonescat is a leading cloud computing service provider that offers reseller cloud hosting services, including web hosting, servers, and WordPress hosting. They buy cloud computing products and services from well-known providers like Google and sell them to customers at affordable rates. Yonescat allows resellers to set limitations on email usage, bandwidth, disk space, and other features, and can sell them on a per-site or per-packet basis. They provide a fully managed and organized service, available round the clock. Cloud computing services include PaaS (Platform as a Service), SaaS (Software as a Service), and IaaS (Infrastructure as a Service). Yonescat ensures a well-maintained, organized, and swift cloud computing experience for businesses and organizations.",
    "link":"/hosting/cloud-reseller"
  },
  {
    "id":"3",
    "image":"dedicated-server-teaser.webp",
    "title":"Dedicated Server",
    "discrition":"Dedicated servers are enterprise-grade physical servers used to host websites or web applications for a single hosting client. Yonescat provides high-performance dedicated servers with cloud flexibility and scalability for medium- and large-scale businesses. These servers provide immense flexibility, power, and higher security and credibility in data management. A dedicated server has the following key features: a single-tenant hosting environment, exclusive independence, higher security and transparency, a business-oriented hosting server, and a solid website foundation. Choosing a dedicated server from Yonescat offers several benefits, including security, resource management, a performance boost, improved website page loading, and increased productivity. By choosing a dedicated server, businesses can ensure their data is safe, secure, and reliable, ensuring a more efficient and successful online presence.",
    "link":"/hosting/dedicated-servers"
  },
  {
    "id":"4",
    "image":"clould-vps-teaser.webp",
    "title":"Cloud VPS",
    "discrition":"Cloud VPS hosting is a performance-driven platform for websites, ranging from small to large businesses and e-commerce marketplaces. It offers reliability, scalability, and transparency, with full control over the VPS's configuration. Unlike shared hosting, Cloud VPS provides a guaranteed amount of CMU and RAM limits for each account, allowing multiple machines to act as a single unit. Benefits of cloud VPS include increased security, cost savings, scalability, accessibility, and speed. Businesses seeking advanced monitoring, security, and data-control features should consider cloud VPS hosting. Yonescat offers highly effective cloud VPS solutions, ensuring increased flexibility and efficiency.",
    "link":"/hosting/cloud-vps"
  },
  {
    "id":"5",
    "image":"domain-names-teaser.webp",
    "title":"Domain Names",
    "discrition":"A domain name is a unique and memorable address for internet users to access your website. It is essential for identifying and finding businesses on the internet, and Yonescat, a leading IT solutions provider, can help you choose from thousands of extensions. Choose a simple, easy-to-type, and captivating name that reflects your business and services. A strong domain name adds credibility, provides enhanced visibility, and boosts brand value. It also helps establish your business as forward-thinking and tech-savvy. Yonescat offers strong, unique, and captivating domain names that can help your business grow exceptionally. Moreover, a domain name provides mobility, allowing you to present your business globally without obstacles.",
    "link":"/hosting/domain-names"
  },
  {
    "id":"6",
    "image":"email-security-teaser.webp",
    "title":"Email Security",
    "discrition":"Email security is crucial for organizations to protect their valuable information and communication from cyber threats. Many companies rely on email encryption, which only requires authentication for the sender and receiver. Yonescat's Email Security offers a secure solution for organizations, providing customized email designs that allow for open communication without third-party interceptions. Yonescat's Email Security is the world's first secure gateway, detecting and preventing new adversary methods based on frontline investigations and observations. This system helps cyber security professionals and employees perform more efficiently by stopping attacks in real-time, reducing warning fatigue, and allowing security professionals to monitor rules and tailor responses based on the severity of alerts.",
    "link":"/hosting/email-security"
  },
  {
    "id":"7",
    "image":"ssl-certificate-teaser.webp",
    "title":"SSL certificates",
    "discrition":"SSL certificates are digital certificates that authenticate a website's identity and create an encrypted connection between a web browser and a web server. They protect sensitive data like names, addresses, and financial details from hackers. Yonescat offers various types of SSL certificates, including Wildcard, Organization Validated, Multi-Domain, Domain Validated, Unified Communications Certificates, and Extended Validation certificates. These certificates are available to individuals, enterprises, organizations, and government agencies and require no paperwork or callbacks. Yonescat's SSL certification services are cost-effective and simple to use, ensuring the security of websites, corporate portals, and e-commerce enterprises.",
    "link":"/hosting/ssl-certificates"
  },
  {
    "id":"8",
    "image":"gaming-servers-teaser.webp",
    "title":"Gaming Server",
    "discrition":"A gaming server is a computer that hosts video games for clients, allowing them to run multiplayer online games over the internet. You can host these servers remotely or locally, and membership fees are required for access. They offer more memory, processing, and storage capabilities, providing a stable, fast, and reliable connection to games. Yonescat is a leading IT solution provider that offers the best gaming servers at affordable rates. Choosing the right server depends on your needs, such as bandwidth, processor, storage capacity, speed, and memory. Yonescat's dedicated gaming servers provide benefits such as high traffic demand, reliable infrastructure, high levels of security, and high levels of customization. To get your gaming server today, contact Yonescat.",
    "link":"/hosting/gaming-server"
  }]
  return (
    <>
      <Layout>        
        <Overview list={list} />
      </Layout>
    </>
  );
}
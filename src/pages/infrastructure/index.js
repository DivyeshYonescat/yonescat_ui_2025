import Layout from "@/layout/Layout";
import Overview from "@/components/overview";

export default function Home() {
  const list = [{
        "id":"1",
        "image":"data-center-teaser.webp",
        "title":"Data Center",
        "discrition":" A data center is a crucial physical facility for companies to secure their data and applications. Yonescat, a software-based creative agency, has been providing data center services since 2004. They focus on selecting the right tier for their business, ensuring an efficient user experience. Yonescat adheres to PCI DSS compliance for eCommerce, preventing credit card fraud. They also prioritize data backup, redundancies, and content delivery networks (CDNs) to ensure data protection. Yonescat also adheres to GDPR compliance, ensuring data encryption and compliance with legal frameworks for processing and collecting personal information within the European Union.",
        "link":"/infrastructure/datacenter"
      },
      {
        "id":"2",
        "image":"ddos-protection-teaser.webp",
        "title":"DDoS protection",
        "discrition":"DDoS protection is crucial in preventing DDoS attacks, which can cause service disruptions and hinder authentic user access. Yonescat, a creative agency, provides DDoS protection services to shield websites from such attacks. Cloud DDoS protection, also known as cloud anti-DDoS, helps mitigate the largest DDoS attacks in the cloud and protects IDC, ISP, and hosting service provider infrastructure. Yonescat's comprehensive DDoS protection offers high performance, ease of use, top-tier infrastructure, auto-scaling, and full scope protection. Additionally, Yonescat uses a CDN-based service for DDoS protection, SSL integration, intelligent caching, excellent customer support, and a global network.",
        "link":"/infrastructure/ddos-protections"
      },
      {
        "id":"3",
        "image":"daas-teaser.webp",
        "title":"Database as a Service",
        "discrition":"Database as a Service (DBaaS) is a cloud computing service that provides the same functionality as a standard relational or non-relational database. It is useful for businesses that want to avoid maintaining, configuring, and upgrading their own databases. Yonescat is a leading IT solutions provider that offers database management solutions for businesses. DBaaS works similarly to on-premises installations, with the database engine running on a shared hardware network. Yonescat's database software offers features such as scalable storage, data security, data collaboration, usage-based pricing, and data management and administration. It also offers TCO benefits, quick agility for application teams, managed database service, reduced lifecycle management, and minimized database management overhead. The DBaaS subscription includes database provisioning, licensing, support, and maintenance.",
        "link":"/infrastructure/database-as-a-service"
      },
      {
        "id":"4",
        "image":"microsoft-teaser.webp",
        "title":"Microsoft 365",
        "discrition":"Designed to help users perform tasks seamlessly, Microsoft Office 365 is a hosted productivity cloud. It includes various applications such as Microsoft Word, Excel, Outlook, PowerPoint, Publisher, SharePoint, and OneNote. Yonescat, a leading IT solution provider, offers various applications and services for Microsoft 365, including Office Suite, SharePoint Online, Yammer, Exchange Online, Power BI, Planner, Delve, Video, OneDrive for Business, and Sway.The major features of Microsoft Office 365 vary depending on the subscription plan, but some of the key benefits include accessing files anywhere, secure cloud storage, and centralized collaboration. Office 365 allows users to store documents and files in the cloud, access them from any device, location, and time, and ensure secure storage with two-factor authentication. It also allows for shared contacts, calendars, mailboxes, and improved communication.",
        "link":"/infrastructure/microsoft-office365"
      },
      {
        "id":"5",
        "image":"gsuite-teaser.webp",
        "title":"Google G Suite",
        "discrition":"Google G Suite is a collection of collaboration tools, productivity tools, and education software designed for small to medium-sized businesses. It includes tools like Docs, Drive, Gmail, Slides, Forms, Google+, Calendar, Hangouts, Sites, and Sheets. G Suite is available on smartphones, tablets, Mac, Windows, and Linux computers and offers professional email, shared calendars, online storage, video meetings, and more. Key features include unlimited Google Group email addresses, custom company email addresses, 24/7 phone and email support, compatible add-ons, and 30GB of storage space. G Suite also includes Google Docs, Slides, and Sheets, which enable real-time collaboration, tracking revision history, and saving changes automatically. Setting up a G Suite account is simple, requiring a company name, contact information, domain name, business details, and a username and password.",
        "link":"/infrastructure/google-g-suite"
      },
      {
        "id":"6",
        "image":"voip-teaser.webp",
        "title":"VoIP",
        "discrition":"VoIP, or Voice over Internet Protocol, is a technology that enables voice-based phone calls through an internet connection. It is a technology that converts analog voice signals into digital signals over a broadband connection. Yonescat is a popular service provider for VoIP phone systems, offering unlimited calling, online faxing, call queues, auto attendants, dedicated conference lines, superior voice quality, voicemail-to-email, real-time presence, smartphone apps, text messaging, team collaboration, and CRM integration. Benefits of using the Yonescat VoIP phone system include lower costs, higher flexibility, more scalability, more accessibility, better voice quality, multiple devices, number portability, and toll-free numbers.",
        "link":"/infrastructure/voip-virtual-numbers"
      },
      {
        "id":"7",
        "image":"iptv-teaser.webp",
        "title":"IPTV",
        "discrition":"IPTV is an internet protocol suite that delivers secure and reliable streaming of entertainment videos or live streams across an IP data network. Yonescat offers IPTV services including broadcast TV, interactive TV, encoded streams, and VOD (Videos on Demand). With a dedicated DSL network, Yonescat ensures service quality, reliability, uptime, and bandwidth. IPTV uses IP multicasting, the Internet Group Management Protocol, IPv4-bases, live TV broadcasts, and a real-time streaming protocol for on-demand programs. Yonescat provides custom mobile, desktop, and smart TV apps, as well as over 30,000 TV channels and video on demand.",
        "link":"/infrastructure/iptv-services"
      }]
  return (
    <>
      <Layout>        
        <Overview list={list} />
      </Layout>
    </>
  );
}
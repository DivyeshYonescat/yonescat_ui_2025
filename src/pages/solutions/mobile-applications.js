import Overview from "@/components/overviewInner";
import ContactSection from "@/components/sections/contact";
import BoxSection from "@/components/sections/section";
import Layout from "@/layout/Layout";

export default function MobileApplicationsSection() {
  const list = [
    {
      "id":"1",
      "image":"app-navigation.webp",
      "title":"App Navigation",
      "discrition":"Offering friendly and intuitive app navigation, we emphasize that our navigation is never hidden. Navigation is ensured to follow a particular pattern across our mobile apps.",
      "link":""
    },
     {
      "id":"2",
      "image":"declutter-ui.webp",
      "title":"Declutter UI",
      "discrition":"Considering clutter as the worst enemy of UI designs, we prefer to keep our apps simple, clear, and concise. Our UI/UX designers are well-versed in designing aesthetically appealing applications that are in line with the latest trends, customers’ requirements, and specific group requirements.",
      "link":""
    },
     {
      "id":"3",
      "image":"tap-target.webp",
      "title":"Effortless Tap Targets",
      "discrition":"All our mobile applications are instilled with smaller tap targets that make it easier for the users to tap. This way the chances of tapping on the wrong target are minimized.",
      "link":""
    }, {
      "id":"4",
      "image":"accessibility.webp",
      "title":"Accessibility",
      "discrition":"A well-designed product takes into account the different users and their ease-of-access. So we incorporate features that work for users with any kind of blindness, hearing impairment, or any other disability. An inclusive design ensures better navigation and interaction of users with its product and that’s what Yonescat prioritizes.",
      "link":""
    }
  ];
  return(<>
  <Layout>
    <div className="section-main ">
    <BoxSection Imagedata={"how-app-works.webp"}>
      <div className="director-text w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
        <div className="">
          <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">What are Mobile Applications and How Do They Work?</h3>
          <p className="leading-[20px] mb-[15px]">Mobile applications, also known as apps, are something that you’re already familiar with. Specifically designed to work on mobile devices or tablets, it’s application software that assists users to provide services present on PCs. Apps are relatively smaller. They have limited functionality with individual software units.</p>
          <p>Mobile Applications are a step forward from the integrated software systems used in PCs. It enables functionalities such as calculators, games, or web browsing, making their specificity of operations the desired factor for consumers. This way they can choose what software their devices should have.</p>
        </div>
      </div>  
    </BoxSection>
    </div>
    <div className="section-main pb-0 concepts bg-stone-900">
      <div className="container">
        <div className="concepts-inner text-center ">
          <h3 className="mb-[15px] text-stone-100">Application Designs and Concepts</h3>
          <p className="mb-[30px] text-stone-100">Our mobile app design strategy is one that delivers clarity and easy-to-use features.</p>
          <Overview list={list} />
        </div>    
      </div>
    </div>
    <div className="section-main pb-0">
    <BoxSection rightImage={true} Imagedata={"frameworks.webp"}>
      <div className="director-text w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
        <div className="">
          <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Choose the right framework and stay agile</h3>
          <p className="mt-[15px] mb-[30px]">Yonescat’s app development framework critically assesses the different frameworks and picks the most efficient one. Among frameworks like React Native, Flutter, Xamarin, Apache Cordova, Ionic, and many others, our team opts for the one that fits the below criteria for our customers:</p>
          <ul className="list-disc pl-[15px]">
            <li className="mb-[10px]"><p>High developmental speed</p></li>
            <li className="mb-[10px]"><p>The range of applicability of the framework</p></li>
            <li className="mb-[10px]"><p>Flexibility and manageability of the framework with respect to its architecture and performance</p></li>
            <li ><p>A narrow-focused framework that streamlines app development by providing a straightforward API and increasing abstraction for its domain.</p></li>
          </ul>
        </div>
      </div>  
    </BoxSection>
    </div>
    <div className="section-main pb-0">
    <BoxSection rightImage={true} Imagedata={"hybrid-to-native.webp"}>
      <div className="director-text w-full flex items-center px-[30px] lg:px-[50px] max-lg:px-[25px] py-[50px] max-md:py-[25px]">
        <div className="">
          <h3 className="mt-[15px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]">Build Hybrid Then Go Native</h3>
          <p className="leading-[20px] mb-[15px]">Yonescat works to build a native mobile application. Since the native app is a better-performing one than the hybrid and focuses on the security of our mobile application, we show here no compromises.</p>
          <p>We want our users to benefit from the many advantages that come with a native app. You can easily access every OS feature given, which means high functionality for your applications. This also ensures that your app would be more reliable, secure, and that allows a faster user experience.</p>
        </div>
      </div>  
    </BoxSection>
    </div>
    <ContactSection/>
  </Layout>
  </>);
}
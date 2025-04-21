
import Head from "next/head";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/carousel";
import { Button } from "@/components/button";
import { OurServicesSection } from "@/sections/OurServicesSection";
import { MainContentSection } from "@/sections/MainContentSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";
import { RoomMakeoverSection } from "@/sections/RoomMakeoverSection";
import { ContactUsSection } from "@/sections/ContactUsSection";
import { GoogleReviewsSection } from "@/sections/GoogleReviewsSection";
import { ProjectGallerySection } from "@/sections/ProjectGallerySection";
import { CustomerTestimonialsSection } from "@/sections/CustomerTestimonialsSection";
import { QualityPointsSection } from "@/sections/QualityPointsSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { DesignInsightsSection } from "@/sections/DesignInsightsSection";
import { FAQSection } from "@/sections/FAQSection";
import { FooterSection } from "@/sections/FooterSection/FooterSection";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/navigation-menu";
import Image from "next/image";

// interface ICard {
//   image:{profileImage:""},
//   basicInfo:{
//     name: "",
//     jobTitle: "",
//     businessName: "",
//     services: "",
//     desc: "",
//     cat: "",
//     type: "",
//   },
//   contactUs:{
//     personalMobile: "",
//     wpNumber: "",
//     websiteUrl: "",
//     email: "",
//   },
//   timing: "",
//   address:"",
//   social:"",
//   tags:"",
//   plan: 'paid',
//   createdBy: "",
//   shareableUrl: "",
//   device: '',
//   requestTime: "",
//   isApproved: false,
//   expiry: ""
// }

export default function Home() {

  // Navigation menu items
  const navItems = [
    "Home",
    "Our Services",
    "Painting Blogs",
    "About Us",
    "Enquire Now",
    "Budget Calculator",
  ];

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      image: "/assets/images/rectangle-94.png",
      title: "Expert Painting for Every Spaaace",
      buttonText: "Get in touch",
    },
    {
      id: 2,
      image: "/assets/images/rectangle-94.png",
      title: "Transform Your Space with Color",
      buttonText: "Get in touch",
    },
    {
      id: 3,
      image: "/assets/images/rectangle-94.png",
      title: "Professional Painting Services",
      buttonText: "Get in touch",
    },
  ];
  
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      {/* Dynamic SEO Metadata */}
      <Head>
        <title>Home Glazer | HardReload</title>
        <meta name="description" content="This is staging link for HomeGlazer" />
        <meta property="og:title" content="Home Glazer | HardReload" />
        <meta property="og:description" content="This is staging link for HomeGlazer" />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visualizer-demo.vercel.app" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="Home Glazer | HardReload" />
        <meta name="twitter:title" content="Home Glazer | HardReload" />
        <meta name="twitter:description" content="This is staging link for HomeGlazer" />
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
      </Head> 
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero Section */}
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="relative">
                    <Image
                      className="w-full h-[605px] object-cover"
                      alt="Hero Background"
                      src={slide.image}
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                      <h1 className="font-['Quicksand',Helvetica] font-semibold text-white text-[56px] text-center tracking-[0] leading-normal [-webkit-text-stroke:2px_#00000033] mb-12">
                        {slide.title}
                      </h1>

                      <Button className="h-[60px] gap-[15px] px-[21px] py-[12px] bg-[#dbe7ec] rounded-[39.25px] text-black hover:bg-[#c5d6de]">
                        <span className="font-['Quicksand',Helvetica] font-normal text-[24.2px]">
                          {slide.buttonText}
                        </span>
                        <Image
                          className="w-[39.25px] h-[39.25px]"
                          alt="Right arrow"
                          src="/assets/images/right-arrow-svgrepo-com-1.svg"
                        />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-4 z-50" />
            <CarouselNext className="absolute right-4 z-50" />
          </Carousel>

          {/* Navigation Bar */}
          <div className="fixed top-0 left-0 right-0 w-full h-[60px] bg-[#ffffffa6] shadow-[0px_4px_4px_#ffbdd51a] backdrop-blur-[2px] backdrop-brightness-[100%] z-50">
            <div className="container mx-auto flex items-center justify-between">
              <Image
                className="w-24 h-[37px] my-3 object-cover"
                alt="Home glazer logo"
                src="/assets/images/home-glazer-logo-1.png"
              />

              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-[70px]">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div className="font-['Quicksand',Helvetica] font-medium text-[#ed276e] text-lg text-center">
                        {item}
                      </div>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="absolute w-[700px] h-[65px] bottom-0 left-1/2 -translate-x-1/2 shadow-[0px_3.76px_8.77px_#00000040]">
            <div className="relative w-full h-full">
              <Image
                className="absolute w-[277px] h-[65px] top-0 left-0"
                alt="Rectangle"
                src="/assets/images/rectangle.png"
              />
              <Image
                className="absolute w-[449px] h-[38px] top-0 left-[251px]"
                alt="Vector"
                src="/assets/images/vector-3.svg"
              />
              <Image
                className="absolute w-[283px] h-[15px] top-0 left-0.5"
                alt="Group"
                src="/assets/images/group.png"
              />
              <Image
                className="absolute w-[49px] h-4 top-11 left-[129px] bg-blend-hard-light"
                alt="Vector"
                src="/assets/images/vector-1.svg"
              />
              <Image
                className="absolute w-[34px] h-[26px] top-[34px] left-[85px] bg-blend-hard-light"
                alt="Vector"
                src="/assets/images/vector.svg"
              />
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="w-full mt-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-['Quicksand',Helvetica] font-medium text-[#ed276e] text-[40px] text-center">
              Our Services
            </h2>
            <p className="font-['Quicksand',Helvetica] font-light text-[#3f505d] text-xl text-center">
              Painting Your Dreams with Every Brushstroke
            </p>
          </div>

          <div className="container mx-auto">
            <OurServicesSection />
            <MainContentSection />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mt-16 relative">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-['Quicksand',Helvetica] font-medium text-[#ed276e] text-[40px] text-center">
              Why Choose Us?
            </h2>
            <p className="font-['Quicksand',Helvetica] font-light text-[#3f505d] text-xl text-center">
              Tap a colour to see it on your bedroom wall.
            </p>
          </div>

          <div className="w-full pb-20 mt-8">
            <div className="container mx-auto relative">
              <div className="absolute left-0 bottom-[-110px] w-full">
                <Image
                  className="w-[771px] h-[500px]"
                  alt="Vector"
                  src="/assets/images/vector-17.svg"
                />
                <Image
                  className="absolute w-[731px] h-[485px] top-0 right-0"
                  alt="Vector"
                  src="/assets/images/vector-23.svg"
                />
              </div>
              <WhyChooseUsSection />
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="w-full relative">
          <div className="bg-[#f6f6f6] w-full py-16">
            <div className="container mx-auto">
              <div className="flex items-center justify-center">
                <RoomMakeoverSection />
                <ContactUsSection />
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="w-full mt-16">
          <GoogleReviewsSection />
        </div>

        {/* Project Gallery Section */}
        <ProjectGallerySection />

        {/* Customer Testimonials Section */}
        <CustomerTestimonialsSection />

        {/* Quality Points Section */}
        <QualityPointsSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Design Insights Section */}
        <div className="w-full mt-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-['Quicksand',Helvetica] font-medium text-[#ed276e] text-[40px] text-center">
              Design Insights
            </h2>
            <p className="font-['Quicksand',Helvetica] font-light text-[#3f505d] text-xl text-center">
              Everything you need to know about painting
            </p>
          </div>

          <div className="relative container mx-auto">
            <DesignInsightsSection />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mt-16">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-['Quicksand',Helvetica] font-medium text-[#ed276e] text-[40px] text-center">
              FAQ
            </h2>
            <p className="font-['Quicksand',Helvetica] font-light text-[#3f505d] text-[28px] text-center">
              Everything you need to know, answered!
            </p>
          </div>

          <FAQSection />
        </div>

        {/* Footer Section */}
        <FooterSection />

        {/* Fixed Color Picker */}
        <div className="fixed w-[55px] h-[55px] top-[728px] right-[100px] z-50">
          <div className="relative h-[55px]">
            <div className="absolute w-[35px] h-[35px] top-2.5 left-2.5 bg-white" />
            <div className="absolute w-[55px] h-[55px] top-0 left-0 bg-[url(/color-.png)] bg-[100%_100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}


// // Fetch data before rendering (Server-Side Rendering)
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch("https://searchmaar.com/api/sharable-sm-card/searchmaar");
//   const data = await res.json();

//   return {
//     props: data
//   };
// };
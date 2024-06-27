import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ChooseSection from "@/components/ChooseSection";
import ChooseYourPlanSection from "@/components/ChooseYourPlanSection";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeroSection from "@/components/HeroSection";
import OurBenifitsSection from "@/components/OurBenifitsSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import VideoSection from "@/components/VideoSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ChooseSection />
      <VideoSection />
      <ChooseYourPlanSection />
      <OurBenifitsSection />
      <TestimonialSection />
      <BlogSection />
      <FooterSectionOne />

    </>
  );
};

export default HomePage;

import AboutSection from "@/components/AboutSection";
import ChooseSection from "@/components/ChooseSection";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeaderSection from "@/components/HeaderSection";
import TestimonialSection from "@/components/TestimonialSection";
import VideoSection from "@/components/VideoSection";

const AboutPage = () => {
  return (
    <>
      <HeaderSection title="About Us" sTitle="About Us" />
      <AboutSection />
      <div className="bg-[#FFFAF5]">
        <ChooseSection />
      </div>
      <VideoSection />
      <TestimonialSection />
      <FooterSectionOne />
    </>
  );
};

export default AboutPage;

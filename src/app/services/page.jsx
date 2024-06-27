import ChooseYourPlanSection from "@/components/ChooseYourPlanSection";
import FooterSectionOne from "@/components/FooterSectionOne";
import HeaderSection from "@/components/HeaderSection";
import Heading from "@/components/Heading";
import OurTeamCard from "@/components/OurTeamCard";
import ServiceCard from "@/components/ServiceCard";
import { OurTeamData } from "@/utils/OurTeamData";
import { ServiceData } from "@/utils/ServiceData";

const ServicesPage = () => {
  return (
    <>
      <HeaderSection title="Services" sTitle="Services" />
      <div className="bg-[#FFFAF5]">
        <div className="container mx-auto px-4 py-24 xl:py-28">
          <Heading
            stitle="Our service"
            title="Highest standards of accountability"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:pt-14">
            {ServiceData.slice(0, 8).map((value) => (
              <ServiceCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-24 xl:py-28">
        <Heading
          stitle="Our Team"
          title="Meet our Team of Experts"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:pt-14">
          {OurTeamData.map((value) => (
            <OurTeamCard key={value.id} {...value} />
          ))}
        </div>
      </div>
      <ChooseYourPlanSection />
      <FooterSectionOne />
    </>
  );
};

export default ServicesPage;

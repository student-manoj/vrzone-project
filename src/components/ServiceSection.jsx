import { ServiceData } from "@/utils/ServiceData";
import Heading from "./Heading";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <>
      <div className="bg-[#FFFAF5]">
        <div className="container mx-auto px-4 py-24 xl:py-28">
          <Heading stitle="Our service"
            title="Highest standards of accountability"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:pt-14">
            {ServiceData.slice(0, 4).map((value) => (
              <ServiceCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;

import { ChooseYourPlanSectionData } from "@/utils/ChooseYourPlanSectionData";
import Heading from "./Heading";
import ChooseYourPlanCard from "./ChooseYourPlanCard";

const ChooseYourPlanSection = () => {
  return (
    <>
      <div className="bg-[#FFFAF5]">
        <div className="container mx-auto px-4 py-24 xl:py-28">
          <Heading
            stitle="Choose Your Plan"
            title="A pricing that don't hurt the bank"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae "
          />
          <div className="grid place-items-center gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:pt-14">
            {ChooseYourPlanSectionData.map((value) => (
              <ChooseYourPlanCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseYourPlanSection;

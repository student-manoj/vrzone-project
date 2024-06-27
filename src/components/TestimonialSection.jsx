import { TestimonialData } from "@/utils/TestimonialData";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <>
      <div className="bg-[#FFFAF5]">
        <div className="container mx-auto px-4 py-24 xl:py-28">
          <Heading
            stitle="Testimonial"
            title="Mind blowing experiences"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae "
          />
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:pt-14">
            {TestimonialData.map((value) => (
              <TestimonialCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;

import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/heroSectionImage.png')] bg-cover bg-center object-center">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-36 text-center md:py-56 md:text-start xl:py-40">
          <p className="text-lg font-medium text-primary">Virtual Reality</p>
          <h2 className="xltext-5xl text-4xl font-bold text-white md:w-[666px]">
            Explore the immersive feel of a virtual world
          </h2>
          <p className="text-base text-white/60 md:w-[666px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            urna, volutpat non orci sit amet, vehicula tincidunt ex. Morbi
            imperdiet mi id metus egestas porttitor. Donec vehicula felis ac mi
            facilisis porta.
          </p>
          <div> <Link href="#" className="rounded-full bg-primary px-7 py-3 text-base font-medium text-white">Explore More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

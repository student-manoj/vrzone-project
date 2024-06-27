import Image from "next/image";
import aboutSectionImage from "../../public/aboutSectionImage.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-24 xl:py-28">
        <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Image src={aboutSectionImage} alt="About Section Image" className="w-full"/>
          <div className="flex flex-col items-center gap-4 pt-4 lg:items-start lg:pt-0 xl:gap-7">
            <h6><li className="text-lg font-medium text-primary">About Us</li></h6>
            <h2 className="text-center text-3xl font-bold lg:text-start xl:text-4xl">
              We Are Ready To Give You A New Experience Using
              <span className="text-primary">Virtual Reality</span>
            </h2>
            <p className="text-center text-sm text-Gray32 md:w-[600px] lg:w-auto lg:text-start xl:w-[629px] xl:text-base">
              Pretium pharetra est elit sollicitudin mollis habitasse. Lobortis
              leo justo porta erat laoreet torquent tortor arcu nascetur aliquam
              inceptos. Montes lacinia egestas elit eleifend vestibulum nisl
              faucibus eros phasellus.Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Velit aliquet sagittis id consectetur purus ut
              faucibus.
            </p>
            <div className="grid md:grid-cols-2 md:gap-14 xl:pt-3">
              <div className="flex flex-col gap-2 xl:gap-5">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Web development</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Seo service</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Network security</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Power redesign</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 xl:gap-5">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Game design</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Augmented reality</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Composer develop</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
                  <div className="">Domain & hosting</div>
                </div>
              </div>
            </div>
            <div className="pt-6 duration-300 hover:scale-110 xl:pt-6">
              <Link href="#" className="rounded-full bg-primary px-7 py-3 text-base font-medium text-white">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;

const FooterSectionOne = () => {
  return (
    <>
      <div className="bg-primary py-24 xl:py-28">
        <div className="container mx-auto grid place-items-center gap-2 px-4 lg:grid-cols-2 xl:gap-28">
          <div className="flex flex-col gap-7">
            <h3 className="xltext-4xl text-3xl font-semibold text-white">
              Get in touch with us for any questions, concerns, or feedback.
            </h3>
            <p className="text-base text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="relative">
            <input
              placeholder="Email Address"
              className="h-14 w-80 rounded-full px-4 focus:outline-none md:w-[440px] xl:w-[536px]"
            />
            <button className="absolute bottom-2 right-2 rounded-full bg-primary px-4 py-2 text-white duration-300 hover:scale-110">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSectionOne;

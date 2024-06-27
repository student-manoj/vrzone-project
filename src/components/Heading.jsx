const Heading = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <li className="text-base font-medium text-primary xl:text-lg">{props.stitle}</li>
        </div>
          <h3 className="xltext-4xl text-center text-3xl font-bold">{props.title}</h3>
          <p className="text-center text-base text-Gray32 md:w-[550px]">{props.description}</p>
      </div>
    </>
  );
};

export default Heading;

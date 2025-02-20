import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >
      <div className="flex flex-1 flex-col">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>

        <h2 className="mt-10 font-palanquin text-7xl max-sm:text-6xl max-sm:leading-tight font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike Shoes</span>
        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-md">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className="mt-6">
          <Button label="View Details" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;

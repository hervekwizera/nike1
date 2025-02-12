import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import {shoes,statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
function Hero() {
  const [bigShoeImg ,setBigShoeImg] = useState( bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-6 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike shoes</span>
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-md">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className="mt-6">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>

        <div className="flex justify-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 
      flex justify-center
      items-center xl:min-h-screen
      max-xl:py-40 big-primary
      big-hero big-cover big-center">
        <img src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain 
        relative z-10 "
        />
        <div className="flex sm:gap-6
        gap-4 absolute -bottom-[5%] max-sm:px-6">
          {shoes.map((shoe) =>(
            <div key={shoe}>
          <ShoeCard 
           imgURL={shoe}
           changeBigShoeImage=
           {(shoe) =>setBigShoeImg
            (shoe)}
            bigShoeImg={bigShoeImg}
          />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

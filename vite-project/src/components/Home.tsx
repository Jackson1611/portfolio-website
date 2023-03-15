import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#e9eaeb]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black-600 font-bold ml-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#181819] mb-3">
          Loc Nguyen
        </h1>
        <h2 className="flex text-4xl sm:text-7xl font-bold text-[#4b5465]">
          I'm a
          <TypeAnimation
            sequence={[
              " Developer",
              2000,
              " Coder",
              2000,
              " Tech Enthusiast",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ paddingLeft: "15px" }}
          ></TypeAnimation>
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

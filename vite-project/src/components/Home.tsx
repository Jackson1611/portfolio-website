import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Jackson from "../assets/cv.pdf";
import { Link } from "react-scroll";

const Home: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#e9eaeb]">
      {/* Container */}
      <div className="max-w-[1300px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black-600 font-bold ml-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#181819] mb-3">
          Loc Nguyen
        </h1>
        <h2 className="flex text-4xl sm:text-7xl font-bold text-[#de0495]">
          I'm a
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Coder",
              1500,
              "Technology Enthusiast",
              5000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ paddingLeft: "15px" }}
          ></TypeAnimation>
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px]   ">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <div className="flex items-center justify-between max-w-[330px] mb-5 mt-3 ">
          <a
            href="https://www.linkedin.com/in/loc-nguyen-30129a217/"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://github.com/Jackson1611" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
          <a href="mailto:jackson161199@gmail.com">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </a>
          <a href={Jackson} download>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </a>
        </div>

        <div className="flex mt-1">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            className=" mr-3 text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
          <button className="text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a href={Jackson} download>
              Download resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

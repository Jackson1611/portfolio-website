import React from "react";
import { Link } from "react-scroll";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Firebase from "../assets/skills/github1.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-[#e9eaeb]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-4">
        <div className="col-span-2">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
          <h2 className="py-4 text xl">Who I Am</h2>
          <p className="py-2 text-black-800 text-lg">
            I specialize in building{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffff80"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              mobile responsive front-end UI
            </RoughNotation>{" "}
            applications that connect with API’s and other backend technologies.
            I’m passionate about learning new technologies and understand there
            is more than one way to accomplish a task. Though I am most
            proficient in building front-end applications using
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffb3ff"
              animate={true}
              animationDuration={5000}
              order="1"
            >
              {" "}
              HTML, CSS, Javascript
            </RoughNotation>{" "}
            I am a quick learner and can pick up new tech stacks as needed. I
            believe that being a great developer is not using one specific
            language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-black-600 text-lg">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as
            <RoughNotation
              type="highlight"
              show={true}
              color="#99b3ff"
              animate={true}
              animationDuration={3000}
            >
              WordPress, BigCommerce, and Shopify
            </RoughNotation>{" "}
            . I have experience working directly with clients and taking mock
            wireframes all the way to deployed applications. In my spare time I
            run Code Commerce, a Youtube channel where I teach web developement
            and various front-end technologies.
          </p>
          <Link to="work">
            <p className="py-2 text-black-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mr-7 p-4 hover:scale-105 ease-in duration-300">
          <img src={Firebase} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

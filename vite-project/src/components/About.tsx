import React from "react";
import { Link } from "react-scroll";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Firebase from "../assets/skills/jackson.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-[#e9eaeb] mt-36"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-4">
        <div className="col-span-2">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
          <h2 className="text-3xl font-bold mt-12">
            Hello! I'm Loc, a{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ddccff"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              developer
            </RoughNotation>{" "}
            based in Helsinki
          </h2>
          <p className="py-2 text-black-800 text-lg mt-3">
            I love building tools that are user-friendly, simple and delightful
          </p>
          <p className="py-2 text-black-800 text-lg">
            My journey began at LAB University of Applied Sciences, where I
            gained a solid foundation in business operation E commerce and{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffff80"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              digital marketing
            </RoughNotation>{" "}
            . However, as I delved deeper into the world of technology, I
            realized that my true passion lay in software, data, and tech. This
            led me to pursue further education at Haaga Helia University of
            Applied Sciences, where I learned a great deal about{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffbb99"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              software engineering
            </RoughNotation>{" "}
            ,ICT infrastucture, Networking{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffbb99"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              front-end
            </RoughNotation>{" "}
            ,{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffbb99"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              back-end
            </RoughNotation>{" "}
            developement and{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffbb99"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              database
            </RoughNotation>{" "}
            management, and other technical skills.Throughout my journey, I have
            also taken on the role of a non-official coding{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ffff80"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              tutor
            </RoughNotation>{" "}
            for freshers. Helping others learn and grow in this field has been
            incredibly rewarding, and has allowed me to further hone my own
            skills.
          </p>
          <p className="py-2 text-black-600 text-lg">
            With my background in both{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ccff66"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              business
            </RoughNotation>{" "}
            and{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color="#ccff66"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              technology
            </RoughNotation>{" "}
            , I am well-equipped to create tools that not only function
            flawlessly, but also provide a seamless user experience. Whether
            it's developing software or designing a user interface, I am
            passionate about finding{" "}
            <RoughNotation
              type="underline"
              show={true}
              color="#00ff00"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              creative solutions
            </RoughNotation>{" "}
            that make life easier for others.
          </p>
          <p className="py-2 text-black-600 text-lg mb-20">
            I'm currently looking for a kick-start to my carrer in technology.{" "}
            <RoughNotation
              type="circle"
              show={true}
              color="#ff3333"
              animate={true}
              animationDuration={7000}
              order="1"
            >
              Hire me?
            </RoughNotation>{" "}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mr-7 p-4 hover:scale-105 ease-in duration-300">
          <img src={Firebase} className="rounded-xl " alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

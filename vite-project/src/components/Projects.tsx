import React from "react";
import Python from "../assets/skills/python.png";
import ProjectItem from "./ProjectItem";
import Chat from "../assets/projects/chatapp.png";
import Map from "../assets/projects/map.png";
import Camp from "../assets/projects/camp.jpeg";
import Reactapp from "../assets/projects/react.png";
import Book from "../assets/projects/book.png";
import SQL from "../assets/projects/sql.jpg";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="w-full h-auto justify-items-center bg-[#e9eaeb] p-4 "
    >
      <div className="max-w-[1300px] mx-auto px-2 py-20 mb-8 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
          Portfolio
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Chat app"
            backgroundImg={Chat}
            projectUrl="/chat"
            tech="React Native & Firebase "
          />
          <ProjectItem
            title="Address finder"
            backgroundImg={Map}
            projectUrl="/crypto"
            tech="React Native"
          />
          <ProjectItem
            title="Campground advisor"
            backgroundImg={Camp}
            projectUrl="/netflix"
            tech="NodeJS, Express, MongoDB, EJS"
          />
          <ProjectItem
            title="Personal trainer"
            backgroundImg={Reactapp}
            projectUrl="/twitch"
            tech="React with MUI"
          />
          <ProjectItem
            title="Bookstore backend"
            backgroundImg={Book}
            projectUrl="/twitch"
            tech="Java, SpringBoot"
          />
          <ProjectItem
            title="Booking system database design"
            backgroundImg={SQL}
            projectUrl="/twitch"
            tech="SQL"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

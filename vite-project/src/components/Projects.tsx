import React from "react";
import Python from "../assets/skills/python.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="w-full h-auto justify-items-center bg-[#e9eaeb] p-4 "
    >
      <div className="max-w-[1300px] mx-auto px-2 py-20 mb-8">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
          Portfolio
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={Python}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={Python}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={Python}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={Python}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={Python}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={Python}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

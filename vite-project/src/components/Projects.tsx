import React from "react";
import Python from "../assets/skills/python.png";
import ProjectItem from "./ProjectItem";
import Chat from "../assets/projects/chatapp.png";
import Map from "../assets/projects/map.png";
import Camp from "../assets/projects/campp.png";
import Reactapp from "../assets/projects/react.png";
import Book from "../assets/projects/book.png";
import SQL from "../assets/projects/sql.jpg";
import inventory from "../assets/projects/inventory.png";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="w-full h-auto justify-items-center bg-[#e9eaeb] p-4 mt-36"
    >
      <div className="max-w-[1300px] mx-auto px-2 py-20 mb-8 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
          Portfolio
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-3 gap-8 justify-center place-items-center">
          <ProjectItem
            title="Chat app"
            backgroundImg={Chat}
            projectUrl="https://github.com/Jackson1611/react-native-chatapp"
            tech="React Native & Firebase "
          />
          <ProjectItem
            title="Address finder"
            backgroundImg={Map}
            projectUrl="https://github.com/Jackson1611/mobile-programming/tree/main/FindAddress"
            tech="React Native"
          />
          <ProjectItem
            title="Campground advisor"
            backgroundImg={Camp}
            projectUrl="https://github.com/Jackson1611/camp-ground-advisor"
            tech="NodeJS, Express, MongoDB, EJS"
          />
          <ProjectItem
            title="Personal trainer"
            backgroundImg={Reactapp}
            projectUrl="https://github.com/Jackson1611/personal-trainer"
            tech="React with MUI"
          />
          <ProjectItem
            title="Bookstore backend"
            backgroundImg={Book}
            projectUrl="https://github.com/Jackson1611/spring-boot-bookstore-app"
            tech="Java, SpringBoot"
          />
          <ProjectItem
            title="Database design"
            backgroundImg={SQL}
            projectUrl="https://github.com/Jackson1611/SQL-database-design"
            tech="SQL"
          />
          <ProjectItem
            title="Inventory control"
            backgroundImg={inventory}
            projectUrl="https://github.com/Jackson1611/secondhand-store"
            tech="Spring Boot back-end & React TypeScript front-end "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

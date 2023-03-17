import React from "react";

interface ProjectProps {
  title: string;
  backgroundImg: string;
  projectUrl: string;
  tech: string;
}

const ProjectItem: React.FC<ProjectProps> = ({
  title,
  backgroundImg,
  projectUrl,
  tech,
}) => {
  return (
    <div className="relative flex items-center justify-center  w-full  shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#f404e0] to-[#709dff]">
      <img
        className="rounded-xl group-hover:opacity-10 "
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <a href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

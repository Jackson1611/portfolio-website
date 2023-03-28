import React from "react";

interface ProjectProps {
  title: string;
  backgroundImg: string;
  projectUrl: string;
  tech: string;
  demoUrl?: string;
}

const ProjectItem: React.FC<ProjectProps> = ({
  title,
  backgroundImg,
  projectUrl,
  tech,
  demoUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full  shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#f404e0] to-[#709dff]">
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
        <div className="flex justify-center space-x-4">
          {projectUrl && (
            <a href={projectUrl} target="_blank">
              <p className="text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                View Github
              </p>
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank">
              <p className="text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                View Demo
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

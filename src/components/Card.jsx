import React from "react";

function Card({ project }) {
  return (
    <div className="bg-[#112240] p-4 sm:p-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300">
      {/* Project Title */}
      <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
        {project.title}
      </h2>
      {/* Project Description */}
      <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
        {project.description}
      </p>
      {/* Project Tags */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#0d2139] text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;

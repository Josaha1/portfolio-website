import React from 'react';

function Card({ project }) {
  return (
    <div className="bg-[#112240] p-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300">
      <h2 className="text-xl font-bold text-white mb-4">{project.title}</h2>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex space-x-3">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#0d2139] text-gray-300 text-sm px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;

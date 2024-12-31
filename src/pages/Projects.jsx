import React from "react";
import NeonButton from "../components/NeonButton";

function Projects() {
  const projects = [
    {
      title: "Sharesook Risk Assessment Website",
      description:
        "Developed a risk assessment platform to evaluate mental health risks in youths, providing tools for early intervention and prevention.",
      link: "https://sharesook.com/healthyemotion/",
      tags: ["React", "PHP", "MySQL", "Tailwind CSS"],
    },
    {
      title: "Sharesook Healthy DM Website",
      description:
        "Built a diabetes management website to help individuals monitor and maintain their health effectively.",
      link: "https://sharesook.com/healthydm/",
      tags: ["Vue", "Laravel", "JavaScript", "Bootstrap"],
    },
    {
      title: "Phetchabun Elderly Screening",
      description:
        "Developed a health screening platform for the elderly in Phetchabun, facilitating data export for medical staff.",
      link: "https://www.pccpbn.net/AgeScreenStep3/",
      tags: ["Vue", "PHP", "MySQL"],
    },
    {
      title: "Social Align Platform",
      description:
        "Created a social engagement platform with advanced features like chat and a digital library for youth initiatives.",
      link: "https://social-align.com/",
      tags: ["React", "Node.js", "MongoDB", "Material UI"],
    },
  ];

  return (
    <section
      id="projects"
      className="space-y-12 min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-5xl font-bold text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full text-sm font-medium text-[#64ffda] bg-[#0a192f] shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <NeonButton text="View Project" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

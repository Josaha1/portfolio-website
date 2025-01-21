import React from "react";
import NeonButton from "../components/NeonButton";

function Projects() {
  const projects = [
    {
      title: "Sharesook Risk Assessment Website",
      description:
        "Developed a risk assessment platform to evaluate mental health risks in youths, providing tools for early intervention and prevention.",
      link: "https://sharesook.com/healthyemotion/",
      tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    },
    {
      title: "Sharesook Healthy DM Website",
      description:
        "Built a diabetes management website to help individuals monitor and maintain their health effectively.",
      link: "https://sharesook.com/healthydm/",
      tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    },
    {
      title: "Phetchabun Elderly Screening",
      description:
        "Developed a health screening platform for the elderly in Phetchabun, facilitating data export for medical staff.",
      link: "https://www.pccpbn.net/AgeScreenStep3/",
      tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    },
    {
      title: "Social Align Platform",
      description:
        "Created a social engagement platform with advanced features like chat and a digital library for youth initiatives.",
      link: "https://social-align.com/",
      tags: ["PHP", "JavaScript", "MySQL", "Bootstrap", "AOS"],
    },
    {
      title: "Phetchabun Patient Caregiver Platform",
      description:
        "Developed a comprehensive caregiver platform that connects volunteers with patients in need, offering features such as appointment scheduling, health tracking, and real-time support for improved patient care.",
      link: "https://www.healthtouchpbn.net/",
      tags: ["PHP", "Vue", "Laravel", "typescript", "MySQL", "Bootstrap", "AOS"],
    },
    
  ];

  return (
    <section
      id="projects"
      className="space-y-12 min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center md:text-left">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 md:p-8 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h2>
            {/* Project Description */}
            <p className="text-gray-400 mb-4">{project.description}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full text-sm font-medium text-[#64ffda] bg-[#0a192f] shadow-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* View Project Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View details of ${project.title}`}
            >
              <NeonButton text="View Project" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

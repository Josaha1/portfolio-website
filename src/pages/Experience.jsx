import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "National Health Foundation,Social Align Co., Ltd",
      time: "2024 — Present",
      description:
        "Analyze, design, develop, and maintain the organization website systems, as well as create new tools to enhance operational efficiency.",
      skills: [
        "JavaScript",
        "TypeScript",
        "Vue",
        "PHP",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "Applied Generative AI",
      ],
    },
    {
      title: "Junior Developer",
      company: "National Health Foundation",
      time: "2021 — 2023",
      description: "Developed and shipped high-quality web apps.",
      skills: ["JavaScript", "PHP", "MySQL", "HTML", "Bootstrap"],
    },
  ];

  return (
    <section
      id="experience"
      className="space-y-12 min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-5xl font-bold text-white">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-white">{exp.title}</h2>
              <span className="text-gray-400">{exp.time}</span>
            </div>
            <p className="text-gray-400 mt-4">{exp.description}</p>
            <div className="flex space-x-3 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full text-sm font-medium text-[#64ffda] bg-[#0a192f] shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

import React from 'react';

const projects = [
  {
    name: "Movie Review System",
    tech: "React.js, Spring Boot, MySQL, Docker",
    description: "Built a scalable movie review platform with 10+ APIs and microservice deployment."
  },
  {
    name: "Learning & Onboarding Portal",
    tech: "React.js, Spring Boot, MySQL",
    description: "Web portal for user onboarding and course management with Dockerized services."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-sm text-yellow-400">{proj.tech}</p>
            <p className="mt-2 text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

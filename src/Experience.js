import React from 'react';

const experiences = [
  {
    role: "Software Engineer",
    company: "Wipro Technologies",
    time: "May 2022 – Dec 2023",
    details: [
      "Built 15+ Spring Boot microservices with JWT and Docker.",
      "Integrated Kafka & Redis for real-time data and caching.",
      "Optimized SQL queries, improved system response by 25%."
    ]
  },
  {
    role: "Developer",
    company: "JCK Library, UCM",
    time: "Aug 2024 – Present",
    details: [
      "Automated inventory system using Python & Google Sheets API.",
      "Improved report generation for 1000+ records/day.",
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="p-10 bg-gray-800">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
          <span className="text-sm text-gray-400">{exp.time}</span>
          <ul className="list-disc ml-6 mt-2">
            {exp.details.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;

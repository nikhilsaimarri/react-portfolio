import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 font-sans">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold">Nikhil Sai Marri</h1>
        <p className="text-lg text-gray-600">Software Engineer | Cybersecurity Enthusiast</p>
        <p className="text-md text-gray-500 mt-2">Warrensburg, MO, USA | +1 6602622910 | nikhilmarri9872@gmail.com</p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Experience</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Developer (Part-Time), JCK Library – Univ. of Central Missouri</h3>
          <p className="text-sm italic">Aug 2024 – Present, MO, USA</p>
          <ul className="list-disc list-inside text-md mt-2">
            <li>Automated inventory tracking with Python, reducing manual errors by 35%.</li>
            <li>Integrated Google Sheets API for real-time synchronization.</li>
            <li>Maintained 99.9% uptime for library systems supporting 500+ daily users.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold">Software Engineer, Wipro Technologies</h3>
          <p className="text-sm italic">May 2022 – Dec 2023, Hyderabad, India</p>
          <ul className="list-disc list-inside text-md mt-2">
            <li>Developed 15+ microservices using Java & Spring Boot for 5,000+ users.</li>
            <li>Built 20+ secure APIs with JWT, reduced unauthorized access by 15%.</li>
            <li>Used Docker, Kafka, and Redis to improve deployment and performance.</li>
          </ul>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Projects</h2>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Movie Review System</h3>
          <p className="text-sm italic">Java, Spring Boot, React, MySQL, Docker</p>
          <p className="text-md mt-1">Developed full-stack review platform with 12+ APIs and React UI. Improved deployment with Docker and achieved 15% lower latency.</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Learning & Onboarding Portal</h3>
          <p className="text-sm italic">Spring Boot, React, MySQL, Firebase</p>
          <p className="text-md mt-1">Built portal with 8+ features for onboarding. Used Docker for deployment and React for responsive UI.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Skills & Tools</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside text-md mt-2">
          <li>Java, Python, JavaScript, C, C++</li>
          <li>React.js, Spring Boot, REST APIs</li>
          <li>MySQL, MongoDB, PostgreSQL</li>
          <li>Docker, Git, Jenkins, Postman</li>
          <li>Kafka, Redis, CI/CD, Agile</li>
          <li>Low-level Systems Design</li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Certifications</h2>
        <ul className="list-disc list-inside text-md mt-2">
          <li>Microsoft Certified: Azure Developer Associate</li>
          <li>NPTEL - DSA using Python</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>Available for internships Aug–Dec 2025 | Open to relocation | CPT eligible</p>
      </footer>
    </main>
  );
}

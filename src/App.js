import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Nikhil Sai Marri</h1>
        <p className="text-lg mt-2">Software Engineer | Java, Spring Boot, React</p>
        <p className="text-sm">Overland Park, KS | nikhilmarri9872@gmail.com | +1 6602622910</p>
      </header>

      <section className="mt-12 max-w-4xl mx-auto space-y-10">
        <div>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">About Me</h2>
          <p className="mt-3">
            I'm a Cybersecurity Master's student with 3+ years of experience building scalable backend systems using Java,
            Spring Boot, React, and SQL. Passionate about clean code, cloud-native apps, and real-world impact.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Projects</h2>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>🎬 Movie Review System</strong> – Full-stack Spring Boot + React app with RESTful APIs, MySQL, Docker, and responsive UI.
            </li>
            <li>
              <strong>📘 Learning & Onboarding Portal</strong> – Scalable Spring Boot + React-based portal for new user onboarding and training.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Experience</h2>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>Wipro – Software Engineer</strong><br />
              Built 15+ microservices using Spring Boot; optimized DB queries; deployed apps via Docker + Jenkins.
            </li>
            <li>
              <strong>JCK Library, UCM – Developer</strong><br />
              Automated reporting systems using Python; integrated Google Sheets API; supported 500+ daily users.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Contact</h2>
          <p className="mt-3">
            Feel free to <a href="mailto:nikhilmarri9872@gmail.com" className="text-blue-400 underline">email me</a> or connect on <a href="https://www.linkedin.com/in/nikhilsaimarri" target="_blank" className="text-blue-400 underline">LinkedIn</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

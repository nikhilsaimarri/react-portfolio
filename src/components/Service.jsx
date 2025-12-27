 import MyatlasImage from '../assets/Myatlas.png';
 import WiproImage from '../assets/Wipro-Logo.png'; // Import the wipro image
 import UCMImage from '../assets/ucm_logo.png';
 import hclImage from '../assets/hcl_logo.jpg';

const experience = [
  
  {
    company: "MyAtlas Health",
    image: MyatlasImage,
    position: "Software Engineer ",
    duration: "August 2025-Present",
    location: "Boston, MA",
    details: [
      "Design and develop highly scalable backend APIs (Java, Python) for a cross-platform system supporting 10,000+ users; implement tasks across the full Software Development Lifecycle (SDLC).",
      "Collaborate with peers, manager, and project leads to translate business needs into technical specifications for large-scale production systems.",
      "Contribute to code and design reviews; automated and optimized CI/CD pipelines, reducing deployment failures by 20% and enhancing system reliability.",
    ],
  },
  {
    company: "University Of Central Missouri",
    image: UCMImage,
    position: "Graduate Employee ",
    duration: "August 2024- August 2025",
    location: "Warrensburg, MO",
    details: [
      "Automated and deployed Python scripts to automate inventory tracking, directly reducing manual errors by 35%. ", 
      "Integrated Google Sheets API for real-time data synchronization, enhancing reporting efficiency for 1000+ records daily.",  
      "Partnered with IT staff on library system updates, ensuring 99.9% system uptime for 500+ daily users. ",

    ],
  },
  {
    company: "Wipro",
    image: WiproImage,
    position: "Software Engineer ",
    duration: "May 2022-Dec 2023",
    location: "Hyderabad, India",
    details: [
      "Designed, built, and maintained 15+ distributed microservices using Java and Spring Boot, enhancing system modularity and supporting 5000+ concurrent users.",
      "Implemented 20+ secure RESTful APIs with JWT authentication, improving system security by reducing unauthorized access by 15%.",
      "Led the development of 3 React-based user portals, enhancing onboarding efficiency for over 5,000 users.",
      " Automated deployment processes and containerized applications using Docker, accelerating deployment cycles by 30%. " ,
      "Conducted 50+ code reviews, pinpointing vulnerabilities and preventing production defects, leading to higher quality code, and ensuring adherence to coding standards on three Agile teams.",
      "Optimized relational database queries for MySQL, achieving a 25% improvement in response times for critical data operations. Integrated Kafka for asynchronous messaging pipelines across critical modules, improving data flow reliability.",
      "Used Redis for real-time caching, leading to 28% faster response times for high-traffic endpoints.",

    ],
  },
  {
    company: "Wipro",
    image: WiproImage,
    position: "Software Engineer Intern",
    duration: "March 2022 – May 2022",
    location: "Remote",
    details: [
      "Created internal automation tools using Python, automating data processing tasks and reducing manual effort by 40%." ,
      "Provided critical support for the migration of 5 legacy systems to a distributed microservices architecture, increasing system reliability by 10%.", 
      "Actively participated in daily stand-ups and sprint retrospectives, contributing to continuous process improvement within a cross-functional team." ,
    ],
  },
  {
    company: "Hcl Tech",
    image: hclImage,
    position: "Software Engineer Intern",
    duration: "Jan 2021 – Feb 2022",
    location: "Vizag, India",
    details: [
      "Developed a responsive web application for API testing using React, enhancing testing efficiency and reducing manual intervention by 20%.",
      "Designed and implemented 3 APIs, enhancing key functionalities such as IP verification, token generation, and database interactions, leading to a 20% improvement in response times.",
      "Built a Python-based backend to handle authentication processes, using network-based SIM identification, reducing manual intervention and increasing system security.",
      "Created network-based authentication through SIM-based IP address mapping, strengthening security and improving login success rates by 30%.",
      "Integrated MongoDB to log critical API responses and authentication attempts, enhancing audit capabilities and reducing troubleshooting time.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex space-x-6"
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {exp.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.duration} - {exp.location}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

 import MyatlasImage from '../assets/Myatlas.png';
 import WiproImage from '../assets/Wipro-Logo.png'; // Import the wipro image
 import UCMImage from '../assets/ucm_logo.png';

const experience = [

  {
    company: "MyAtlas Health",
    image: MyatlasImage,
    position: "Software Engineer",
    duration: "August 2025-Present",
    location: "Boston, MA",
    details: [
      "Working on a healthcare platform built with React and Spring Boot that handles patient records for around 15,000 patients daily, made the data loading about 40% faster by optimizing queries and adding Redis cache.",
      "Built out several microservices (8 total) deployed on AWS ECS which helped the system handle way more traffic during busy times, we're maintaining 99.9% uptime now.",
      "Developed REST APIs that connect with Epic's FHIR system for healthcare data - these serve about 200 concurrent users with response times usually under 300ms.",
      "Set up Jenkins pipelines with Docker which cut our deployment time from like 2 hours down to around 15 minutes, now we can push updates 3-4 times a week.",
      "Implemented OAuth 2.0 authentication using Spring Security to protect patient data, the system now supports over 50K users.",
      "Integrated GPT-4 API to help automate clinical documentation - doctors are spending about 35% less time on charting, processes roughly 500 notes each day.",
      "Tuned PostgreSQL performance through indexing and query optimization, average query time went down by more than half.",
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
    position: "Software Engineer",
    duration: "May 2022 - Dec 2023",
    location: "Hyderabad, India",
    details: [
      "Built enterprise web apps using Java Spring Boot and Angular for large clients, these applications were used by around 100,000+ people daily across multiple countries.",
      "Created over 25 RESTful APIs with Spring MVC that mobile and web apps consume, maintained about 99.5% success rate on API calls.",
      "Helped migrate an old monolithic app to microservices using Spring Cloud, this ended up saving around $8K per month on server costs and made deployments much smoother.",
      "Worked with Apache Kafka for real-time data streaming that handles over 1 million events per hour with pretty low latency (under 2 seconds).",
      "Put together automated testing using JUnit and Mockito, got code coverage up to 85% which really helped reduce bugs in production by almost half.",
      "Worked in an Agile team with 7-8 other developers, we delivered 12 major features across several sprint cycles.",
      "Set up Docker containers and worked with Kubernetes for deployments, this reduced the time to set up new environments from a few days to just a couple hours.",
      "Did a lot of MySQL optimization work including query tuning and connection pooling which improved overall performance by about 30%.",
    ],
  },
  {
    company: "Wipro",
    image: WiproImage,
    position: "Software Engineer Intern",
    duration: "Mar 2021 - May 2022",
    location: "Hyderabad, India",
    details: [
      "Built responsive UI components using React and Redux for an internal dashboard that around 500 employees use daily.",
      "Wrote automated test scripts with Selenium which saved the QA team about 20 hours of manual testing every sprint.",
      "Created Python scripts to automate report generation for business metrics, this saved roughly 15 hours of manual work each week.",
      "Participated in code reviews and learned a lot about maintaining code quality standards.",
      "Helped with an AWS migration project where we moved 5 applications to EC2 with no downtime.",
    ],
  },

  // {
  //   company: "Hcl Tech",
  //   image: hclImage,
  //   position: "Software Engineer Intern",
  //   duration: "Jan 2021 – Feb 2022",
  //   location: "Vizag, India",
  //   details: [
  //     "Developed a responsive web application for API testing using React, enhancing testing efficiency and reducing manual intervention by 20%.",
  //     "Designed and implemented 3 APIs, enhancing key functionalities such as IP verification, token generation, and database interactions, leading to a 20% improvement in response times.",
  //     "Built a Python-based backend to handle authentication processes, using network-based SIM identification, reducing manual intervention and increasing system security.",
  //     "Created network-based authentication through SIM-based IP address mapping, strengthening security and improving login success rates by 30%.",
  //     "Integrated MongoDB to log critical API responses and authentication attempts, enhancing audit capabilities and reducing troubleshooting time.",
  //   ],
  // },
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

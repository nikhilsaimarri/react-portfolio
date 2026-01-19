import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaRocket } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "Job Matching Platform with AI",
    description: "Built a job recommendation system that uses GPT-4 to analyze resumes and suggest relevant jobs",
    technologies: "React, Node.js, Python, Spring Boot, PostgreSQL, AWS Lambda, OpenAI API",
    highlights: [
      "APIs handle around 1,000 requests daily with 250ms average response time",
      "Database stores about 10K job listings and user profiles with proper indexing",
      "Langchain semantic search improved matching accuracy by 40%",
      "CI/CD using GitHub Actions and Docker for automated deployments to AWS ECS"
    ],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Full Stack",
    icon: <FaRocket />
  },
  {
    id: 2,
    name: "Online Store Microservices App",
    description: "Designed an e-commerce platform with 6 different microservices that can handle around 5,000 concurrent users",
    technologies: "Spring Boot, Angular, MongoDB, Redis, Kafka, Kubernetes, Jenkins",
    highlights: [
      "6 microservices: Product, Order, Payment, User, Inventory, Notification",
      "Kafka for event-driven processing cut order fulfillment time in half",
      "Redis caching reduced database hits by 60%",
      "Stripe integration with 99.8% success rate on test transactions"
    ],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Microservices",
    icon: <FaServer />
  },
  {
    id: 3,
    name: "DevOps Pipeline Setup",
    description: "Used Terraform to automate AWS infrastructure setup, bringing setup time down from 4 hours to about 10 minutes",
    technologies: "Jenkins, Docker, Kubernetes, Terraform, AWS, SonarQube",
    highlights: [
      "Full CI/CD pipeline with automated testing and code quality checks",
      "Kubernetes deployments with health checks and rolling updates",
      "Monitoring using CloudWatch and ELK stack",
      "Infrastructure as Code reduced manual setup time by 96%"
    ],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "DevOps",
    icon: <FaCode />
  },
  {
    id: 4,
    name: "Learning & Onboarding Portal",
    description: "An interactive platform for employee training and onboarding processes",
    technologies: "Spring Boot, React, JavaScript, HTML5, CSS3, MySQL, Docker",
    highlights: [],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Full Stack",
    icon: <FaRocket />
  },
  {
    id: 5,
    name: "Movie Review System",
    description: "A comprehensive movie review platform with microservices architecture",
    technologies: "Java, Spring Boot, MySQL, React, JavaScript, Microservice, REST API, JUnit, JWT, Kafka",
    highlights: [],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Microservices",
    icon: <FaServer />
  },
  {
    id: 6,
    name: "Employee Management System",
    description: "Full-stack application for managing employee records and operations",
    technologies: "Java, Spring Boot, MySQL, React.js",
    highlights: [],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Full Stack",
    icon: <FaRocket />
  },
  {
    id: 7,
    name: "Expense Tracker",
    description: "Track and manage personal expenses with detailed analytics",
    technologies: "React, Node.js, Express.js, MongoDB, Bootstrap",
    highlights: [],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Full Stack",
    icon: <FaRocket />
  },
  {
    id: 8,
    name: "Weather App",
    description: "Real-time weather information with location-based forecasts",
    technologies: "React, Redux, API Integration",
    highlights: [],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Frontend",
    icon: <FaCode />
  },
  {
    id: 9,
    name: "To Do App using Spring Boot",
    description: "Task management application with Spring Boot backend",
    technologies: "Java, Spring Boot",
    highlights: [],
    github: "https://github.com/nikhilsaimarri",
    liveDemo: null,
    category: "Backend",
    icon: <FaServer />
  },
];

const Projects = () => {
  return (
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-black dark:text-white py-20" id="projects">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing full-stack development, microservices architecture, and DevOps expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Category Badge & Icon */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="flex items-center justify-between relative z-10">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                      <div className="text-white text-3xl opacity-80">
                        {project.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.split(', ').slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium"
                            >
                        {tech}
                      </span>
                        ))}
                        {project.technologies.split(', ').length > 4 && (
                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-3 py-1 rounded-full font-medium">
                        +{project.technologies.split(', ').length - 4} more
                      </span>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights.length > 0 && (
                        <div className="mb-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                            Key Highlights
                          </p>
                          <ul className="space-y-2">
                            {project.highlights.slice(0, 3).map((highlight, index) => (
                                <li key={index} className="text-xs text-gray-700 dark:text-gray-300 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  <span>{highlight}</span>
                                </li>
                            ))}
                          </ul>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      {project.github && (
                          <a
                              href={project.github}
                              className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                            GitHub
                          </a>
                      )}
                      {project.liveDemo && (
                          <a
                              href={project.liveDemo}
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
                            Live Demo
                          </a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Projects;
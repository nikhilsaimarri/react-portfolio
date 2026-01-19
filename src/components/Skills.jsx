import { FaPython, FaJava, FaHtml5, FaJsSquare, FaDatabase, FaAws, FaDocker, FaGitAlt, FaNode, FaReact, FaAngular, FaVuejs, FaTools, FaCss3Alt, FaCloud, FaCode, FaServer, FaRobot } from 'react-icons/fa';
import { SiMysql, SiSpringboot, SiPostgresql, SiMongodb, SiRedis, SiKubernetes, SiJenkins, SiTerraform, SiTypescript, SiNextdotjs, SiBootstrap, SiTailwindcss, SiHibernate, SiApachekafka, SiRabbitmq, SiElasticsearch, SiGraphql, SiTensorflow, SiSelenium, SiJest, SiPostman, SiGradle, SiApachemaven, SiGitlab, SiJunit5 } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

const skillCategories = [
  {
    id: 1,
    category: "Languages",
    icon: <FaCode />,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgPattern: "bg-blue-50 dark:bg-blue-950/20",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
    icons: {
      "Java": <FaJava />,
      "Python": <FaPython />,
      "JavaScript": <FaJsSquare />,
      "TypeScript": <SiTypescript />,
      "SQL": <FaDatabase />,
      "HTML5": <FaHtml5 />,
      "CSS3": <FaCss3Alt />
    }
  },
  {
    id: 2,
    category: "Frontend",
    icon: <FaReact />,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgPattern: "bg-purple-50 dark:bg-purple-950/20",
    skills: ["React.js", "Angular", "Vue.js", "Redux", "Next.js", "Bootstrap", "Material-UI", "Tailwind CSS"],
    icons: {
      "React.js": <FaReact />,
      "Angular": <FaAngular />,
      "Vue.js": <FaVuejs />,
      "Redux": <FaReact />,
      "Next.js": <SiNextdotjs />,
      "Bootstrap": <SiBootstrap />,
      "Material-UI": <FaReact />,
      "Tailwind CSS": <SiTailwindcss />
    }
  },
  {
    id: 3,
    category: "Backend",
    icon: <FaServer />,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bgPattern: "bg-green-50 dark:bg-green-950/20",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "RESTful APIs", "Microservices", "Node.js"],
    icons: {
      "Spring Boot": <SiSpringboot />,
      "Spring MVC": <SiSpringboot />,
      "Spring Security": <SiSpringboot />,
      "Hibernate": <SiHibernate />,
      "RESTful APIs": <FaServer />,
      "Microservices": <FaServer />,
      "Node.js": <FaNode />
    }
  },
  {
    id: 4,
    category: "Databases",
    icon: <FaDatabase />,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgPattern: "bg-orange-50 dark:bg-orange-950/20",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"],
    icons: {
      "PostgreSQL": <SiPostgresql />,
      "MySQL": <SiMysql />,
      "MongoDB": <SiMongodb />,
      "Redis": <SiRedis />,
      "Oracle": <FaDatabase />
    }
  },
  {
    id: 5,
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    bgPattern: "bg-indigo-50 dark:bg-indigo-950/20",
    skills: ["AWS (EC2, S3, Lambda, RDS)", "Azure (App Services, Functions)", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform"],
    icons: {
      "AWS (EC2, S3, Lambda, RDS)": <FaAws />,
      "Azure (App Services, Functions)": <FaCloud />,
      "Docker": <FaDocker />,
      "Kubernetes": <SiKubernetes />,
      "Jenkins": <SiJenkins />,
      "GitLab CI/CD": <SiGitlab />,
      "Terraform": <SiTerraform />
    }
  },
  {
    id: 6,
    category: "Testing",
    icon: <FaTools />,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    bgPattern: "bg-pink-50 dark:bg-pink-950/20",
    skills: ["JUnit", "Mockito", "Selenium", "Jest", "Postman"],
    icons: {
      "JUnit": <SiJunit5 />,
      "Mockito": <FaJava />,
      "Selenium": <SiSelenium />,
      "Jest": <SiJest />,
      "Postman": <SiPostman />
    }
  },
  {
    id: 7,
    category: "Tools & Frameworks",
    icon: <FaGitAlt />,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgPattern: "bg-violet-50 dark:bg-violet-950/20",
    skills: ["Git", "Maven", "Gradle", "Apache Kafka", "RabbitMQ", "Elasticsearch", "GraphQL"],
    icons: {
      "Git": <FaGitAlt />,
      "Maven": <SiApachemaven />,
      "Gradle": <SiGradle />,
      "Apache Kafka": <SiApachekafka />,
      "RabbitMQ": <SiRabbitmq />,
      "Elasticsearch": <SiElasticsearch />,
      "GraphQL": <SiGraphql />
    }
  },
  {
    id: 8,
    category: "AI/ML",
    icon: <FaRobot />,
    gradient: "from-cyan-500 via-teal-500 to-green-500",
    bgPattern: "bg-cyan-50 dark:bg-cyan-950/20",
    skills: ["TensorFlow", "OpenAI API", "Langchain", "RAG", "Prompt Engineering"],
    icons: {
      "TensorFlow": <SiTensorflow />,
      "OpenAI API": <TbBrandOpenai />,
      "Langchain": <FaPython />,
      "RAG": <FaPython />,
      "Prompt Engineering": <TbBrandOpenai />
    }
  }
];

const Skills = () => {
  return (
      <div className="relative bg-white dark:bg-black text-black dark:text-white py-20 overflow-hidden" id="skills">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          {/* Section Header with Animated Underline */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-top duration-700">
                Technical Skills
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-in slide-in-from-left duration-1000"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto mt-6 animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '200ms' }}>
              Comprehensive expertise across modern technologies and frameworks
            </p>
          </div>

          {/* Skills Grid with Stagger Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
                <div
                    key={category.id}
                    className="group relative animate-in fade-in slide-in-from-bottom duration-700"
                    style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  {/* Card with Gradient Border Effect */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 overflow-hidden group-hover:scale-[1.02]">

                    {/* Animated gradient border on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}></div>

                    {/* Animated background pattern */}
                    <div className={`absolute inset-0 ${category.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Category Header with Icon Animation */}
                    <div className="relative z-10 flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-colors duration-500">
                      <div className={`relative text-4xl md:text-5xl bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        {category.icon}
                        {/* Glow effect on icon */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                          {category.category}
                        </h3>
                        <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${category.gradient} transition-all duration-700 mt-1`}></div>
                      </div>
                    </div>

                    {/* Skills Grid with Individual Animations */}
                    <div className="relative z-10 flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                          <div
                              key={skillIndex}
                              className="group/skill relative"
                          >
                            {/* Skill Pill */}
                            <div className={`flex items-center gap-2 bg-gradient-to-r ${category.gradient} bg-opacity-10 hover:bg-opacity-100 px-4 py-3 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-sm hover:shadow-lg transform hover:-translate-y-1 cursor-default`}>
                        <span className={`text-lg bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent group-hover/skill:text-white group-hover/skill:scale-125 transition-all duration-300`}>
                          {category.icons[skill]}
                        </span>
                              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                          {skill}
                        </span>
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                              {skill}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                      ))}
                    </div>

                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700`}></div>
                  </div>
                </div>
            ))}
          </div>

          {/* Enhanced Stats Section with Animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '400ms' }}>
            <div className="relative group overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-default">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-500">50+</div>
                <div className="text-sm md:text-base opacity-90 font-medium">Technologies</div>
              </div>
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 transform group-hover:rotate-12 transition-transform duration-500">
                <FaCode />
              </div>
            </div>

            <div className="relative group overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-default">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-500">8</div>
                <div className="text-sm md:text-base opacity-90 font-medium">Core Domains</div>
              </div>
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 transform group-hover:rotate-12 transition-transform duration-500">
                <FaServer />
              </div>
            </div>

            <div className="relative group overflow-hidden bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-default">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-500">Full Stack</div>
                <div className="text-sm md:text-base opacity-90 font-medium">Developer</div>
              </div>
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 transform group-hover:rotate-12 transition-transform duration-500">
                <FaReact />
              </div>
            </div>

            <div className="relative group overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-default">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-500">Cloud Ready</div>
                <div className="text-sm md:text-base opacity-90 font-medium">AWS & Azure</div>
              </div>
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 transform group-hover:rotate-12 transition-transform duration-500">
                <FaCloud />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Skills;
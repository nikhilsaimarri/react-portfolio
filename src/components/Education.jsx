// import UcfImage from '../assets/Ucf.png'; // Import the UCF image
// import JntuImage from '../assets/jntu.png'; // Import the JNTU image

const education = [
  {
    institution: "University of Central Missouri",
    degree: "Master of Science in Cyber Security(Computer Science)",
    duration: "Expected Graduation: December 2025",
    gpa: "GPA: 3.75/4.0",
  //  image: UcfImage
  },
  {
    institution: "Anil Neerukonda Institute of Technology and Sciences",
    degree: "Bachelor of Technology in Mechanical Engineering",
    duration: "Graduated: June 2022",
    gpa: "GPA: 3.0/4.0",
  //  image: JntuImage
  },
];

const Education = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {edu.institution}
                </h3>
                <p className="mt-2 text-lg">{edu.degree}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{edu.duration}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300 font-semibold">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

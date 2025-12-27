import { useRef, useState, useEffect } from 'react'; // Import hooks

import nptelImage from '../assets/nptel.webp';
import UmImage from '../assets/um.png'; // University of Michigan logo
import microsoftImage from '../assets/Microsoft-Logo.png';
import HackImage from '../assets/hacker.png'; // HackerRank logo
//import UcImage from '../assets/uc.png'; // UC San Diego logo

// Sample certifications data
const certifications = [
  {
    title: 'NPTEL',
    description: 'Certified on completing Data Structures & Algorithms in Python NPTEL.',
    url: 'https://media.geeksforgeeks.org/courses/certificates/5e9a023e481298f3a7d2c852a1211b4e.pdf',
    image: nptelImage
  },
  {
    title: 'Microsoft',
    description: 'Certified Azure Developer Associate',
    // url: 'https://www.coursera.org/account/accomplishments/verify/S77G98UEW7HW',
    image: microsoftImage
  },
  {
    title: 'University of Michigan',
    description: 'Certified on completing Python for Everybody (Specialization) on Coursera.',
    url: 'https://www.coursera.org/account/',
    image: UmImage
  },
  {
    title: 'HackerRank',
    description: 'Certified on completing Problem Solving (Intermediate) on HackerRank.',
    url: 'https://www.hackerrank.com/',
    image: HackImage
  },
  {
    title: 'HackerRank',
    description: 'Certified on completing SQL (Intermediate) on HackerRank.',
    url: 'https://www.hackerrank.com/certificates/',
    image: HackImage
  },

  {
     title: 'Stanford University',
    description: 'Certified on completing the Machine Learning course on Coursera.',
     url: 'https://www.microsoft.com',
  //   image: StanfordImage
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="Certifications"
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 ${
        isVisible ? 'animate-zoomIn' : ''
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {cert.title}
                  </a>
                </h3>
                <p className="text-lg">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

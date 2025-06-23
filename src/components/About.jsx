import { useRef, useState, useEffect } from 'react';
import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
import ResumePDF from '../assets/Nikhil_Resume.pdf';
import LeetCodeImage from '../assets/LeetCode.png';
import GeeksforGeeksImage from '../assets/gfg.png';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
              I am currently pursuing a Master of Science in Cybersecurity(Computer Science) at the University of Central Missouri 
              with a GPA of 3.75/4.0. I have over a year of full-time experience as a Software Engineer at Wipro and 
              three months as an intern at Wipro Technologies, and 12 months in Maq Software sol. My technical expertise includes Python, Java,Spring Boot,MySql, React.js, Node.js, 
              and cloud technologies such as Azure. I have contributed to impactful projects, optimizing web applications, 
              implementing real-time monitoring systems, and enhancing API efficiency. 
              I am currently seeking Fall 2025 internship and full-time opportunities where I can contribute, 
              learn, and grow in a challenging environment.
            </p>
            <p className="text-lg mb-8 text-justify">
              My achievements include securing first prize in a college coding competition among 500 participants and 
              earning certifications such as Data Structures and Algorithms using Python(NPTEL) and Microsoft Azure Certified Developer Associate. I have solve  coding challenges across platforms like LeetCode, GFG, and HackerRank.
            </p>
            <div className="flex justify-center items-center space-x-6 my-8">
              <a href="https://www.linkedin.com/in/nikhil-sai-marri-om/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LinkedInImage} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://www.hackerrank.com/profile/nikhilmarri9872" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={GitHubImage} alt="GitHub" className="w-10 h-10 filter brightness-100 dark:brightness-100" />
              </a>
              <a href="mailto:nikhilmarri9872@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={MailImage} alt="Email" className="w-10 h-10" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/nikhilmarri9872/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={GeeksforGeeksImage} alt="GeeksforGeeks" className="w-10 h-10" />
              </a>
              <a href="https://leetcode.com/u/nikhilmarri9872/" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LeetCodeImage} alt="LeetCode" className="w-10 h-10" />
              </a>
              <a
  href={ResumePDF}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
>
  View Resume
</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

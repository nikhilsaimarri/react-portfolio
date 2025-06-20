import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 to-indigo-800">
      <h1 className="text-5xl font-bold">Hi, I'm Nikhil Sai Marri 👋</h1>
      <p className="mt-4 text-lg text-gray-300">Aspiring Software Engineer | Java, React.js, Spring Boot</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-md font-semibold">
        Contact Me
      </a>
    </section>
  );
};

export default Hero;

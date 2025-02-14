import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-8">
        <motion.h1 
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Vedant Sonavane
        </motion.h1>
        <motion.p 
          className="text-lg mt-3 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Software Developer | Web Enthusiast | Problem Solver
        </motion.p>
      </section>
      
      {/* About Section */}
      <section className="w-full max-w-4xl my-16 p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
          I am a passionate software developer with experience in modern web technologies.
          I love building dynamic and scalable applications with a focus on performance and user experience.
        </p>
      </section>
      
      {/* Skills Section */}
      <section className="w-full max-w-4xl my-16 p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {["JavaScript", "React", "Node.js", "Tailwind CSS"].map((skill, index) => (
            <motion.div 
              key={index}
              className="p-4 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="w-full max-w-4xl my-16 p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-600 mt-2">A full-stack web application built with React & Node.js.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="text-gray-600 mt-2">An AI-based chatbot for customer support.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="w-full max-w-4xl my-16 p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
        <p className="mt-4 text-gray-600">Feel free to reach out for collaborations or job opportunities!</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/yourusername" className="text-gray-800 hover:text-gray-600">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-800 hover:text-gray-600">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:vedantsonavane799@gmail.com" className="text-gray-800 hover:text-gray-600">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

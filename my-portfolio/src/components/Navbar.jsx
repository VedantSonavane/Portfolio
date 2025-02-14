import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import { FaThLarge } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Left - Brand Name */}
          <div className="text-white text-xl font-bold">
            <Link to="/" className="hover:text-gray-300">Vedant Sonavane</Link>
          </div>

       

{/* Mobile Menu Button - Grid Icon Instead of Hamburger */}
<div className="md:hidden">
  <button onClick={() => setIsOpen(true)} className="text-white focus:outline-none">
    <FaThLarge size={28} />
  </button>
</div>



          {/* Center - Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Right - Social Icons + Contact Info (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 text-white items-center">
            {/* Social Icons */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>

            {/* Contact Info */}
            <div className="flex flex-col text-sm text-gray-300 ml-4">
              <p>Email: vedantsonavane799@gmail.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>


        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex">
          {/* Sidebar Content */}
          <div className="w-64 bg-gray-900 h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 text-white mt-8">
              <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/projects" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-white mt-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-300 mt-6">
              <p>Email: vedantsonavane799@gmail.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

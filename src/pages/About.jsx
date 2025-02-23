import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import background images
import backgroundImage1 from "../assets/carousel1.jpg";
import backgroundImage2 from "../assets/carousel2.jpg";
import backgroundImage3 from "../assets/carousel3.jpg";
import backgroundImage4 from "../assets/carousel1.jpg";
import backgroundImage5 from "../assets/carousel2.jpg";

// Import showcase card images
import project1 from "../assets/carousel1.jpg";
import project2 from "../assets/carousel2.jpg";
import project3 from "../assets/carousel3.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);
  const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrentBackground(prev => {
        const currentIndex = backgroundImages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section ref={sectionRef} className="w-full mx-auto my-16 p-10 text-white text-center relative">
      {/* Rotating Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${currentBackground})` }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      
      <div className="relative z-10">
        <h2 className="text-6xl font-bold" data-aos="fade-up">My Journey</h2>
        <p className="text-lg mt-4 italic" data-aos="fade-up">
          From a passionate sports enthusiast to a dedicated software developer, my journey has been one of learning, growth, and transformation.
        </p>

        {/* Timeline Section */}
        <div className="mt-12 flex flex-col gap-12 max-w-4xl mx-auto">
          {[
            { step: 1, title: "Part-time at Decathlon", desc: "Blended love for sports with customer service and teamwork." },
            { step: 2, title: "Education & Transition", desc: "Left formal education to follow my passion for software development." },
            { step: 3, title: "Joining OLLATO Education", desc: "Built scalable platforms for online learning at OLLATO Education." },
            { step: 4, title: "Shifting to Delhi & UrbanEtravels", desc: "Gained hands-on experience in travel-tech solutions." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative flex flex-col md:flex-row items-center md:items-start text-left" data-aos="fade-right">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-full text-xl font-bold shadow-md">{step}</div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-aos="fade-up">
          {[
            { img: project1, title: "Project One", desc: "Built an interactive web platform for e-learning." },
            { img: project2, title: "Project Two", desc: "Developed a full-stack application for travel bookings." },
            { img: project3, title: "Project Three", desc: "Created a dynamic dashboard for real-time data analytics." },
          ].map(({ img, title, desc }, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6">
              <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-2xl font-bold mt-4">{title}</h3>
              <p className="text-lg mt-2">{desc}</p>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12">
          <a href="#more" className="text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg flex items-center mx-auto hover:bg-white hover:text-black transition duration-300">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";




import backgroundVideo1 from "../assets/portfoliobg.mp4";
import backgroundVideo2 from "../assets/portfoliobg2.mp4";
import backgroundVideo3 from "../assets/portfoliobg3.mp4";

import videoUrl from  "../assets/demovideo.mp4";








gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  // Select a random background video on each refresh
  const backgroundVideos = [backgroundVideo1, backgroundVideo2, backgroundVideo3];
  const backgroundVideo = backgroundVideos[Math.floor(Math.random() * backgroundVideos.length)];
  const sectionRef = useRef(null);
  


  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

 


  return (
    <div className="relative w-full min-h-screen text-gray-900">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>


      {/* Overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center w-full text-white">
        {/* Hero Section */}
        <section className="w-full h-screen flex flex-col items-center justify-center text-center p-10">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafting Intelligent, Scalable Solutions That Elevate Digital Innovation
          </motion.h1>

          <motion.p
            className="text-lg mt-6 text-white max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Creating seamless digital experiences through cutting-edge technologies.
            Focused on delivering efficient, scalable, and innovative solutions that
            enhance performance and user engagement.
          </motion.p>

          {/* Scroll Down Button */}
         

        </section>




        <section  className="w-full mx-auto my-16 p-10 text-white text-center">
          {/* About Me Header */}
          <h2 className="text-6xl font-bold">About Me</h2>

          <p className="mt-6 text-lg leading-relaxed">
            The journey into software development began with <strong>curiosity</strong> and a drive to create.
            From exploring the <em>fundamentals of programming</em> to tackling <strong>real-world challenges</strong>,
            every step has been a lesson in <u>perseverance</u> and <u>innovation</u>.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            Working with <strong>startups</strong> and collaborating on <em>impactful projects</em> has reinforced the belief that
            <u>technology is a powerful tool for change</u>. The focus remains on building
            <strong>scalable, high-performance applications</strong> that not only <em>solve problems</em>
            but also enhance <u>user experiences</u>.
          </p>

          <div className="mt-8">
            {/* Quote Section */}
            <div className="quote-container bg-white bg-opacity-10 p-6 rounded-lg text-lg text-white">
              <p className="quote-text">
                "When something is important enough, you do it even if the odds are not in your favor." – Elon Musk
              </p>
            </div>
          </div>



          {/* Know More Button */}
          <div className="mt-10">
            <button className="mt-8 text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg flex items-center mx-auto hover:bg-white hover:text-gray-900 transition duration-300">
              Know Me <FaArrowRight className="ml-2" />
            </button>

          </div>
        </section>





        <section
          ref={sectionRef}
          className="w-full my-16 p-10 text-center bg-transparent "
        >
          <h2 className="text-6xl font-bold text-white mb-8">Tech Ecosystem</h2>

          {/* Languages Carousel (Left to Right) */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-white mb-6">Languages & Frameworks</h3>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
              speed={1000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4 "
            >
              {[
                "JavaScript",
                "PHP",
                "Python",
                "TypeScript",
                "Java",
                "C++",
                "React",
                "Node.js",
                "Vue.js",
                "Ruby on Rails",
                "Flutter",
                "Django",
                "Angular",
                "Swift",
                "Go"
              ].map((skill, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md">
                  {skill}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* Databases Carousel (Right to Left) */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-white mb-4">Databases</h3>
            <Swiper
              slidesPerView={5} // Changed from 5 to 6
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={1000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis", "SQLite"].map((db, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md">
                  {db}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DevOps & Cloud Carousel (Left to Right) */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-4">DevOps & Cloud</h3>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
              speed={1000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"].map((devops, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md">
                  {devops}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Additional Tools & Design Software Carousel (Left to Right) */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-white mb-6">Additional Tools & Design Software</h3>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={1000}
              loop={true}
              modules={[Autoplay]}
              className="mt-4"
            >
              {[
                "Photoshop",
                "Illustrator",
                "Figma",
                "Sketch",
                "Adobe XD",
                "Blender",
                "InVision",
                "Webflow",
                "Canva",
                "Zeplin"
              ].map((tool, index) => (
                <SwiperSlide key={index} className="p-6 bg-white bg-opacity-20 rounded-lg font-semibold text-white shadow-md">
                  {tool}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </section>



        <section className="w-full mx-auto my-16 p-10 text-white text-center">
          <h2 className="text-6xl font-bold text-white mb-8">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Education */}
            <div className="bg-white bg-opacity-20 p-6 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <ul className="list-inside list-disc text-left text-lg">
                <li>Completed Bachelor's in Computer Science</li>
                <li>Specialized in Software Development & AI</li>
                <li>Honors in AI-based Research Projects</li>
              </ul>
            </div>

            {/* Skills & Hands-on Experience */}
            <div className="bg-white bg-opacity-20 p-6 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Skills & Hands-on Experience</h3>
              <ul className="list-inside list-disc text-left text-lg">
                <li>JavaScript, Python, PHP</li>
                <li>React, Node.js, Django</li>
                <li>Web and Mobile App Development</li>
                <li>Database Management with MySQL and MongoDB</li>
                <li>Cloud Integration and API Development</li>
              </ul>
            </div>

            {/* NDA */}
            <div className="bg-white bg-opacity-20 p-6 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">NDA</h3>
              <ul className="list-inside list-disc text-left text-lg">
                <li>Worked on Confidential Projects for Leading Firms</li>
                <li>Ensured Data Protection and Compliance</li>
                <li>Experienced in Secure Development Practices</li>
              </ul>
            </div>

            {/* Corporate Experience */}
            <div className="bg-white bg-opacity-20 p-6 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Corporate Experience</h3>
              <ul className="list-inside list-disc text-left text-lg">
                <li>Led Agile Teams in Tech Companies</li>
                <li>Managed End-to-End Project Development</li>
                <li>Collaborated with Cross-functional Teams</li>
                <li>Focused on Delivering Scalable Solutions</li>
                <li>Led Continuous Improvement Initiatives</li>
              </ul>
            </div>
          </div>
        </section>



        {/* Projects */}
        <section className="w-full mx-auto my-16 p-4 text-white text-center bg-transparent">
      <h2 className="text-6xl font-bold mb-8">Projects</h2>

      <div className="flex flex-col gap-12">
        {[
          {
            title: "E-Commerce Platform",
            description: "A fully functional e-commerce platform with features like product catalog, cart, checkout, and payment integration.",
          },
          {
            title: "AI Chatbot",
            description: "An AI-based chatbot for customer service, built with natural language processing and machine learning.",
          },
          {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills, projects, and professional achievements.",
          }
        ].map((project, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-2 bg-white bg-opacity-20 p-2 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Left Section (Video) */}
            <div className="w-full md:w-1/2">
              <video
                className="w-full rounded-lg shadow-md"
                autoplay
                loop
                muted
                src={videoUrl}  // Using the same video for all projects
              />
            </div>

            {/* Right Section (Description) */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-lg text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

        {/* Services */}
        <section className="w-full mx-auto my-16 p-10 text-white text-center bg-transparent">
          <h2 className="text-6xl font-bold mb-8"> Services</h2>

          <div className="space-y-12">
            {/* Service 1 */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-transparent p-0 rounded-lg">
              <div className="lg:w-1/2">
                <h3 className="text-8xl font-semibold text-white mb-4">1.Web Development</h3>
              </div>
              <div className="lg:w-1/2 bg-white bg-opacity-20 p-4 text-lg text-white">
                <p>
                  We create responsive and dynamic websites using modern frameworks like React, Node.js, and Angular. Our team specializes in building fast and scalable web applications. We ensure cross-browser compatibility and optimal performance for every site we build. Our goal is to provide users with a seamless web experience. From e-commerce sites to business platforms, we handle all kinds of web development projects with precision and expertise.
                </p>
                <p>
                  Whether you need a single-page app or a complex multi-page website, we have the skills to turn your ideas into reality. <a href="#get-brochure" className="underline text-white">Get Brochure</a> | <a href="#know-more" className="underline text-white">Know More</a>
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-transparent p-0 rounded-lg">
              <div className="lg:w-1/2">
                <h3 className="text-8xl font-semibold text-white mb-4">2.Mobile App Development</h3>
              </div>
              <div className="lg:w-1/2 bg-white bg-opacity-20 p-4 text-lg text-white">
                <p>
                  Our team develops high-performing mobile apps for both iOS and Android platforms using React Native and Flutter. We focus on building intuitive, user-friendly apps. With years of experience, we ensure your app performs well on all devices, offering native-like performance with cross-platform capabilities. We specialize in everything from custom app development to app optimization, providing long-term maintenance and updates as required. Whether you need a simple app or a sophisticated mobile solution, we tailor our services to meet your business needs.
                </p>
                <p>
                  <a href="#get-brochure" className="underline text-white">Get Brochure</a> | <a href="#know-more" className="underline text-white">Know More</a>
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-transparent p-0 rounded-lg">
              <div className="lg:w-1/2">
                <h3 className="text-8xl font-semibold text-white mb-4">3.Cloud Solutions</h3>
              </div>
              <div className="lg:w-1/2 bg-white bg-opacity-20 p-4 text-lg text-white">
                <p>
                  We offer scalable cloud infrastructure services, including hosting, deployment, and management, to help you scale your business efficiently. Our cloud solutions ensure high availability, security, and cost-effective resources tailored to meet your unique requirements. With cloud services from providers like AWS, Google Cloud, and Azure, we can handle all aspects of cloud management for your business. Whether you're looking for cloud storage, migration, or SaaS solutions, we have the expertise to provide you with the best-fit solutions.
                </p>
                <p>
                  <a href="#get-brochure" className="underline text-white">Get Brochure</a> | <a href="#know-more" className="underline text-white">Know More</a>
                </p>
              </div>
            </div>
          </div>



          {/* Button to See All Services */}
          <div className="mt-8">
            <a
              href="#all-services" // Link to the "See All Services" section or page
              className="text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              See All Services
            </a>
          </div>
        </section>



        <section className="w-full  my-16 p-10 text-center bg-transparent text-white">
          <h2 className="text-6xl font-bold mb-8  ">Get in Touch</h2>

          {/* Contact Form */}
          <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2 bg-opacity-20 p-6 rounded-lg">
              <form action="#" method="POST">
                <div className="space-y-4">
                  {/* Name and Phone Fields */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-lg mb-2" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-lg mb-2" htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Inquiry Type Fields */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-lg mb-2" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-lg mb-2" htmlFor="inquiry">Inquiry Type</label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="freelancing">Freelancing</option>
                        <option value="pricing">Pricing</option>
                        <option value="hiring">Hiring</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-lg mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 text-lg text-white bg-transparent border-2 border-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
                  >
                    Submit
                  </button>

                </div>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="lg:w-1/2 flex flex-col items-center space-y-6">
              <h3 className="text-3xl font-semibold">Follow Me</h3>
              <div className="flex justify-center space-x-6 mt-6">
                <a href="https://github.com/yourusername" className="hover:text-gray-400">
                  <FaGithub size={40} />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">
                  <FaLinkedin size={40} />
                </a>
                <a href="mailto:vedantsonavane799@gmail.com" className="hover:text-gray-400">
                  <FaEnvelope size={40} />
                </a>
              </div>

              {/* Contact Information */}
              <div className="mt-8">
                <h4 className="text-2xl font-semibold">Contact Info</h4>
                <p className="mt-2 text-lg">
                  <strong>Email:</strong> <a href="mailto:vedantsonavane799@gmail.com" className="underline">vedantsonavane799@gmail.com</a>
                </p>
                <p className="mt-2 text-lg">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="mt-2 text-lg">
                  <strong>Address:</strong> 123 Your Street, Your City, Country
                </p>
              </div>
            </div>
          </div>
        </section>




      </div>
    </div>
  );
}

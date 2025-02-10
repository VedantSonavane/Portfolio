import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-8">
        <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
        <p className="text-lg mt-2">Software Developer | Web Enthusiast | Problem Solver</p>
      </section>
      
      {/* About Section */}
      <section className="w-full max-w-4xl my-16 p-8">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-gray-700 text-center">I am a passionate software developer with experience in modern web technologies...</p>
      </section>
      
      {/* Skills Section */}
      <section className="w-full max-w-4xl my-16 p-8">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
          <span className="p-4 bg-gray-200 rounded-lg">JavaScript</span>
          <span className="p-4 bg-gray-200 rounded-lg">React</span>
          <span className="p-4 bg-gray-200 rounded-lg">Node.js</span>
          <span className="p-4 bg-gray-200 rounded-lg">Tailwind CSS</span>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="w-full max-w-4xl my-16 p-8">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <p className="mt-4 text-gray-700 text-center">Here are some of my recent works...</p>
      </section>
      
      {/* Contact Section */}
      <section className="w-full max-w-4xl my-16 p-8">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="mt-4 text-gray-700 text-center">Feel free to reach out for collaborations or job opportunities!</p>
      </section>
    </div>
  );
};

export default Home;

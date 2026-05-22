import React from "react";


const App = () => {
  const experiences = [
    {
      company: "VIT Bhopal University",
      role: "Computer Science Undergraduate (AI & ML)",
      description:
        "Strong academic record (CGPA 8.99). Skilled in front-end and back-end development, AI/ML, and blockchain. Built responsive, secure applications and contributed to open-source projects.",
    },
  ];

  const projects = [
    {
      title: "Aviation Damage Prediction System",
      description:
        "Built ML classifiers achieving 90% accuracy in aviation damage detection across 100,000+ samples.",
    },
    {
      title: "Bridge Design UI Development",
      description:
        "Developed GUI tool automating 100+ IS-code compliance checks, reducing manual effort by 40%.",
    },
    {
      title: "AI-Based Electricity Consumption Optimization",
      description:
        "Architected ML pipelines to forecast electricity usage, reducing consumption by 20% on 176,000+ records.",
    },
    {
      title: "Bitcoin Fee Predictor",
      description:
        "Applied regression models on 10,000+ blockchain transactions, achieving 92% accuracy.",
    },
    {
      title: "Finance for GenZ",
      description:
        "Built secure budgeting web app with SQL backend and encryption, adopted by 100+ students.",
    },
   ];

const techStack = [
    { name: "Python" }, { name: "Java" }, { name: "C/C++" }, { name: "SQL" },
    { name: "JavaScript" }, { name: "HTML & CSS" }, { name: "React (basic)" },
    { name: "Node.js (basic)" }, { name: "REST APIs" }, { name: "Scikit-learn" },
    { name: "NumPy" }, { name: "Matplotlib" }, { name: "Database Design & Optimization" },
  ];

  const extracurriculars = [
    {
      title: "Finalist, IIT Guwahati Hackathon (2025)",
      description:
        "Engineered an AI/ML solution under a 36-hour sprint, ranked top among 200+ teams with 90% accuracy.",
    },
    {
      title: "Volunteer Lead, HPL (2025)",
      description:
        "Orchestrated 50+ volunteers, streamlining workflows to boost event efficiency by 40%.",
    },
    {
      title: "Community Outreach, Unnat Bharat Abhiyan (2026-Present)",
      description:
        "Directed a 10+ member team conducting tech-enabled surveys, delivering data-driven insights impacting 500+ rural residents.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 fixed w-full top-0 z-50">
        <h2 className="text-2xl font-bold text-yellow-400">Tanya</h2>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#techstack" className="hover:text-yellow-300">Tech Stack</a></li>
          <li><a href="#extracurriculars" className="hover:text-yellow-300">Extra-Curricular</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
<section
  id="home"
  className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 px-4 sm:px-8 md:px-16 py-12 gap-10"
>
  
  {/* Left side - Text */}
  <div className="flex-1 text-center md:text-left">
    
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300 leading-tight">
      Hi, I'm <br className="sm:hidden" />
      Tanya Tripathi
    </h1>

    <p className="text-white text-lg sm:text-xl md:text-2xl mt-4 mb-8">
      AI & ML Enthusiast | Web Development Learner
    </p>

    <a
      href="#projects"
      className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
    >
      View My Work
    </a>
  </div>

  {/* Right side - Image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/images/tanya.jpeg"
      alt="Tanya Tripathi"
      className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
    />
  </div>
</section>








      {/* ABOUT */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning (CGPA 8.99).
          Skilled in full-stack development, AI/ML, and blockchain. Passionate about building intelligent systems and web applications.
        </p>
      </section>

      {/* SERVICES */}
      <section id="Areas of Interest" className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">Areas of Interest</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-yellow-400 transition">
            <h3 className="text-xl font-semibold mb-3">AI/ML Development</h3>
            <p className="text-gray-400">Building predictive models, neural networks, and intelligent systems.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-yellow-400 transition">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-400">Creating responsive web apps using React, Node.js, and Tailwind.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-yellow-400 transition">
            <h3 className="text-xl font-semibold mb-3">Blockchain</h3>
            <p className="text-gray-400">Smart contract development and decentralized applications.</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-10 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="border border-gray-700 p-6 rounded-xl bg-gray-900 hover:border-yellow-400 transition">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-yellow-400 mb-2">{exp.role}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-yellow-400 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
              <h3 className="text-xl mb-3 font-semibold">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

{/* TECH STACK */}
<section id="techstack" className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl text-yellow-400 mb-4 text-center">Tech Stack</h2>
  <p className="text-gray-400 text-center mb-10">
    Tools and technologies I use to build scalable, maintainable software.
  </p>
  <div className="grid md:grid-cols-3 gap-6">
    {techStack.map((tool, i) => (
      <div
        key={i}
        className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition text-center"
      >
        <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
      </div>
    ))}
  </div>
</section>



{/* EXTRA-CURRICULAR */}
<section id="extracurriculars" className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl text-yellow-400 mb-10 text-center">Extra-Curricular</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {extracurriculars.map((activity, i) => (
      <div
        key={i}
        className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition"
      >
        <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
        <p className="text-gray-300">{activity.description}</p>
      </div>
    ))}
  </div>
</section>
{/* CONTACT */}
<section id="contact" className="py-20 text-center bg-gray-900">
  <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Me</h2>
  <p className="text-gray-300 mb-6">
    Feel free to reach out for collaborations or project discussions.
  </p>
  <div className="space-y-2">
    <p className="text-gray-400">📧 Email: <span className="text-yellow-400">tanyatripathi014@gmail.com</span></p>
    <p className="text-gray-400">📞 Phone: <span className="text-yellow-400">+91-7233064701</span></p>
    <p className="text-gray-400">🌐 LinkedIn: <a href="https://linkedin.com/in/tanyatripathi-702468322" className="text-yellow-400 hover:text-yellow-300">linkedin.com/in/tanyatripathi-702468322</a></p>
    <p className="text-gray-400">💻 GitHub: <a href="https://github.com/tanya7233" className="text-yellow-400 hover:text-yellow-300">github.com/tanya7233</a></p>
  </div>
</section>
    </div>
  );
};

export default App;

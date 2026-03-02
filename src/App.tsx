import React, { useState, useEffect } from 'react';
import {
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Twitter,
  Instagram,
  ChevronLeft,
  Phone
} from 'lucide-react';
import { Modal } from './components/Modal';
import { projects, skills, internships } from './data';
import { Project } from './types';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isSkillTransitioning, setIsSkillTransitioning] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const handleSkillChange = (direction: 'next' | 'prev') => {
    setIsSkillTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') {
        setActiveSkillIndex((prev) => (prev + 1) % skills.length);
      } else {
        setActiveSkillIndex((prev) => (prev - 1 + skills.length) % skills.length);
      }
      setIsSkillTransitioning(false);
    }, 300);
  };

 const handleContactClick = () => {
  setShowContactInfo(true);
  toast.success('Contact information displayed!');

  // Auto-close after 5 seconds
  setTimeout(() => {
    setShowContactInfo(false);
  }, 5000);
};

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            setActiveSection(entry.target.id);
          } else {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.delete(entry.target.id);
              return next;
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    // also watch internships div since it's not a section
    const internDiv = document.getElementById('internships');
    if (internDiv) observer.observe(internDiv);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-white to-gray-100'}`}>
      <Toaster position="top-right" />
      
      <header className={`${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient">Hello!    
               </span>
              <span className="text-xl font-bold ml-1">👋</span>
              
              
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-5 rounded-xl ${
                  isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                } transition-all duration-300 transform hover:scale-110`}
              >
                {isDarkMode ? (
                    <>
                      <Sun className="w-7 h-7" />
                      <span className="text-sm font-medium">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-7 h-7" />
                      <span className="text-sm font-medium">Dark Mode</span>
                    </>
                  )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2">
                {['about', 'education', 'skills', 'projects', 'internships', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === section 
                        ? isDarkMode 
                          ? 'text-cyan-400 bg-gray-800' 
                          : 'text-blue-600 bg-gray-100'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-cyan-400'
                          : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <span className="relative z-10 capitalize">{section}</span>
                    {activeSection === section && (
                      <span className={`absolute inset-0 ${isDarkMode ? 'bg-cyan-400/10' : 'bg-blue-100'} rounded-lg`}></span>
                    )}
                    <span className={`absolute inset-0 rounded-lg ${isDarkMode ? 'bg-cyan-400/0 group-hover:bg-cyan-400/5' : 'bg-blue-50/0 group-hover:bg-blue-50'} transition-colors duration-300`}></span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-300`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            {['about', 'education', 'skills', 'projects', 'internships', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full px-4 py-2 text-left rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? isDarkMode 
                      ? 'text-cyan-400 bg-gray-800' 
                      : 'text-blue-600 bg-gray-100'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-cyan-400'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className={`${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100'} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-12">
              <div className="text-center">
                <div className="mb-8 relative animate-float">
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-cyan-400/20' : 'bg-blue-400/20'} rounded-full blur-xl transform animate-pulse`}></div>
                  <img
                    src="https://i.postimg.cc/65qZ6Ct5/j.jpg"
                    alt="Profile"
                    className={`w-64 h-64 rounded-full border-4 ${isDarkMode ? 'border-cyan-400/20 shadow-cyan-500/20' : 'border-blue-400/20 shadow-blue-500/20'} shadow-lg mx-auto relative z-10 transform hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                
                <div className="flex justify-center gap-4 mb-6">

                 <a
                  href="https://www.linkedin.com/in/jahnavi-padala-bb037023a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full shadow-md border-2 ${
                    isDarkMode
                      ? 'bg-gray-900 border-cyan-400/40 text-cyan-300 hover:border-cyan-400 hover:shadow-cyan-500/40'
                      : 'bg-white border-blue-400/40 text-blue-600 hover:border-blue-500 hover:shadow-blue-500/40'
                  } transition-all duration-300 hover:scale-125 hover:rotate-3`}
                >
                  <Linkedin className="w-7 h-7" />
                </a>

                
                 <a
                  href="mailto:jahnavijanu2121@gmail.com"
                  className={`p-3 rounded-full shadow-md border-2 ${
                    isDarkMode
                      ? 'bg-gray-900 border-cyan-400/40 text-cyan-300 hover:border-cyan-400 hover:shadow-cyan-500/40'
                      : 'bg-white border-blue-400/40 text-blue-600 hover:border-blue-500 hover:shadow-blue-500/40'
                  } transition-all duration-300 hover:scale-125 hover:rotate-3`}
                >
                  <Mail className="w-7 h-7" />
                </a>

                
                  <a
                  href="https://github.com/TagoorJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full shadow-md border-2 ${
                    isDarkMode
                      ? 'bg-gray-900 border-cyan-400/40 text-cyan-300 hover:border-cyan-400 hover:shadow-cyan-500/40'
                      : 'bg-white border-blue-400/40 text-blue-600 hover:border-blue-500 hover:shadow-blue-500/40'
                  } transition-all duration-300 hover:scale-125 hover:rotate-3`}
                >
                  <Github className="w-7 h-7" />
                </a>

                
                </div>

            <h1
  className="text-5xl font-extrabold mb-4 animate-fade-in 
  font-[Satoshi] tracking-tight 
  text-white drop-shadow-[0_2px_8px_rgba(0,200,255,0.4)]"
>
  Jahnavi Padala
</h1>






                <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Aspirant Software Developer | Java • C# • Python 
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://drive.google.com/file/d/15FkcY9qD97FUelb-QkuVVcpo4YnopXTd/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 ${isDarkMode ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' : 'bg-blue-500 text-white hover:bg-blue-400'} rounded-lg transition-all duration-300 transform hover:scale-105 font-medium`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${visibleSections.has('about') ? 'animate-fade-in' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">About Me</h2>
            <div className="prose max-w-none">
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                I’m a Computer Science Engineering graduate with a strong foundation in Java, C#, SQL, and web technologies. I enjoy building efficient, scalable solutions and solving real-world problems through structured thinking and logical analysis.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mt-4`}>
                I hold a B.Tech from Ramachandra college of Engineering, which laid the foundation for my problem-solving skills and logical thinking. My strengths include Strong logical thinking, analytical problem-solving, adaptability to new technologies, and effective teamwork.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mt-4`}>
                I am fluent in English and Telugu, enabling me to communicate effectively across teams and with project stakeholders. I am open to relocating and flexible to work.
                I’m eager to grow in a software development or data-focused role where I can contribute meaningful, impact-driven solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} ${visibleSections.has('education') ? 'animate-fade-in' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">Education </h2>
            
            
            <div className="space-y-8">
              {/* B.Tech */}
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-102 transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Ramachandra College of Engineering 
                    </p>
                  </div>
                  <div className={`text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p className="font-medium">2021 - 2025</p>
                    <p className="font-bold">CGPA: 8.40</p>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-102 transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                      Intermediate (MPC)
                    </h3>
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Sri Chaitanya Junior College
                    </p>
                  </div>
                  <div className={`text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p className="font-medium">2019 - 2021</p>
                    <p className="font-bold">Percentage: 97.2%</p>
                  </div>
                </div>
              </div>

              {/* 10th Standard */}
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-102 transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                      10th Standard (SSC)
                    </h3>
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Bhashyam E.M High School
                    </p>
                  </div>
                  <div className={`text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p className="font-medium">2018 - 2019</p>
                    <p className="font-bold">GPA: 10.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


       <section
  id="skills"
  className={`py-16 ${
    isDarkMode ? "bg-gray-900" : "bg-white"
  } ${visibleSections.has("skills") ? "animate-fade-in" : ""}`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
      Skills
    </h2>

    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => handleSkillChange("prev")}
          className={`p-3 rounded-full ${
            isDarkMode
              ? "bg-gray-800 text-cyan-400 hover:bg-gray-700"
              : "bg-gray-100 text-blue-600 hover:bg-gray-200"
          } transition-all duration-300 hover:scale-110 shadow-md`}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Icons Scroll */}
        <div className="flex gap-4 overflow-x-auto py-3 px-2 no-scrollbar">
          {skills.map((skill, index) => (
            <div key={index} className="relative group flex-shrink-0">
              <button
                onClick={() => setActiveSkillIndex(index)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  index === activeSkillIndex
                    ? isDarkMode
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110 shadow-xl"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110 shadow-xl"
                    : isDarkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow"
                }`}
              >
                <span className="text-2xl">{skill.icon}</span>
              </button>

              {/* Tooltip */}
              <div
                className={`${
                  hoveredSkillIndex === index ? "block" : "hidden"
                } absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1 rounded-md text-sm font-medium shadow-lg ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                }`}
              >
                {skill.category}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleSkillChange("next")}
          className={`p-3 rounded-full ${
            isDarkMode
              ? "bg-gray-800 text-cyan-400 hover:bg-gray-700"
              : "bg-gray-100 text-blue-600 hover:bg-gray-200"
          } transition-all duration-300 hover:scale-110 shadow-md`}
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Active Skill Panel */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div
          className={`transition-all duration-300 ${
            isSkillTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div
            key={skills[activeSkillIndex].category}
            className={`${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } p-8 rounded-xl border ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4 animate-bounce">
                {skills[activeSkillIndex].icon}
              </span>
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400"
                    : "bg-gradient-to-r from-blue-400 to-purple-400"
                } text-transparent bg-clip-text`}
              >
                {skills[activeSkillIndex].category}
              </h3>
            </div>

            {/* Description */}
            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              {skills[activeSkillIndex].description}
            </p>

            {/* Skill Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills[activeSkillIndex].items.map((item, index) => (
                <div
                  key={item}
                  className={`px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-cyan-300 hover:bg-gray-700 hover:scale-105"
                      : "bg-gray-50 text-blue-600 hover:bg-gray-100 hover:scale-105"
                  } shadow-sm border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




        <section id="projects" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} ${visibleSections.has('projects') ? 'animate-fade-in' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-scale-in cursor-pointer ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                  }`}
                  style={{ animationDelay: `${index * 90}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 brightness-110 contrast-110 saturate-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-cyan-500/20 to-purple-500/20' : 'from-blue-500/20 to-purple-500/20'} mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r"></div>
                    </div>
                    <div className="relative p-6 md:w-3/5">
                      <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              isDarkMode 
                                ? 'bg-gray-800/80 text-cyan-300' 
                                : 'bg-gray-100/80 text-blue-600'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className={`flex items-center ${
                        isDarkMode 
                          ? 'text-cyan-400' 
                          : 'text-blue-600'
                      }`}>
                        <span className="text-sm font-medium">View Details</span>
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

            {/* internships nested under projects */}
            {internships.length > 0 && (
              <div id="internships" className="mt-12 px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">Internships</h3>
                <div className="grid grid-cols-1 gap-8">
                  {internships.map((intern, index) => (
                    <div
                      key={intern.company}
                      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-scale-in cursor-pointer ${
                        isDarkMode ? 'bg-gray-900' : 'bg-white'
                      }`}
                    >
                      <div className="p-6">
                        <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{intern.role}</h4>
                        <p className={`text-lg mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{intern.company}</p>
                        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{intern.duration}</p>
                        {intern.description && (
                          <ul className="list-disc list-inside text-gray-300 mb-4">
                            {intern.description.map((line, idx) => (
                              <li key={idx}>{line}</li>
                            ))}
                          </ul>
                        )}
                        {intern.certificateUrl && (
                          <button
                            onClick={() => setSelectedCert(intern.certificateUrl!)}
                            className="mt-2 text-cyan-400 hover:underline"
                          >
                            View Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

        <section id="contact" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            
            <button
              onClick={handleContactClick}
              className={`inline-flex items-center px-8 py-4 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600' 
                  : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600'
              } text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium text-lg mb-8 relative overflow-hidden group`}
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Phone className="w-6 h-6 mr-3 animate-bounce" />
              <span className="relative z-10">Contact Me</span>
            </button>

            {showContactInfo && (
  <div
    onDoubleClick={() => setShowContactInfo(false)}
    className={`${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    } p-8 rounded-xl shadow-lg animate-scale-in border ${
      isDarkMode ? 'border-gray-700' : 'border-gray-200'
    }`}
  >
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        <Phone className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          +91 7396841550
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Mail className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
        <a
          href="mailto:jahnavijanu2121@gmail.com"
          className={`text-lg ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
        >
          jahnavijanu2121@gmail.com
        </a>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Linkedin className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
        <a
          href="https://www.linkedin.com/in/jahnavi-padala-bb037023a"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  </div>
)}

          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-gray-300' : 'bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 text-gray-600'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Jahnavi Padala. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDarkMode={isDarkMode}
        />
      )}

      {/* certificate viewer modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl w-full max-w-3xl max-h-[90vh] overflow-auto shadow-xl border`}>
            <div className={`p-4 border-b flex justify-between items-center ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Certificate</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} rounded-full`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <iframe
                src={selectedCert}
                title="Certificate"
                className="w-full h-[70vh]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
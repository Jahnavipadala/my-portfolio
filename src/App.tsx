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
import { projects, skills } from './data';
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
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient">Hello!👋    
               </span>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient"> Welcome to my portfolio.</span>
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
                {['about', 'education', 'skills', 'projects', 'contact'].map((section) => (
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
            {['about', 'education', 'skills', 'projects', 'contact'].map((section) => (
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
                    src="https://i.postimg.cc/VNq9vSLf/Whats-App-Image-2025-03-31-at-14-09-47-e669fdc9.jpg"
                    alt="Profile"
                    className={`w-64 h-64 rounded-full border-4 ${isDarkMode ? 'border-cyan-400/20 shadow-cyan-500/20' : 'border-blue-400/20 shadow-blue-500/20'} shadow-lg mx-auto relative z-10 transform hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                
                <div className="flex justify-center gap-4 mb-6">

                  <a
                    href="https://www.linkedin.com/in/tagoor-jayamangala-b19a30283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                    } transition-all duration-300 transform hover:scale-110 hover:rotate-6`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                
                  <a
                    href="mailto:jayamangalatagoor@gmail.com"
                    className={`p-3 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                    } transition-all duration-300 transform hover:scale-110 hover:rotate-6`}
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                
                  <a
                    href="https://github.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                    } transition-all duration-300 transform hover:scale-110 hover:rotate-6`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                
                </div>

                <h1 className={`text-4xl font-bold mb-4 animate-fade-in ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Tagoor Paramathma Jayamangala
                </h1>
                <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Data Engineer | Data-Driven Problem Solver 
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://drive.google.com/file/d/1EcmEbUoDndQ4t4k1C6LT9gOT4YpEU_ib/view?usp=drive_link"
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
                I’m a Data Engineer who enjoys turning raw data into clean, scalable systems and building intelligent solutions that automate real-world workflows. I work across the data and AI pipeline—designing ETL processes, optimizing data structures, and creating LLM-powered agents that enhance productivity and decision-making.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mt-4`}>
                I hold a B.Tech from Sagi Rama Krishnam Raju Engineering college, which laid the foundation for my problem-solving skills and logical thinking. My strengths include attention to detail, structured analysis, and the ability to translate technical findings into actionable business strategies.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mt-4`}>
                I am fluent in English, Telugu, and Hindi, enabling me to communicate effectively across teams and with stakeholders. I am open to relocating and flexible to work.
                I'm excited to grow in the world of data and continuously learn new ways to turn raw numbers into business value.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} ${visibleSections.has('education') ? 'animate-fade-in' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">Education</h2>
            
            <div className="space-y-8">
              {/* B.Tech */}
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-102 transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                      B.Tech in Electrical and Electronics Engineering
                    </h3>
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Sagi RamaKrishnam Raju Engineering College 
                    </p>
                  </div>
                  <div className={`text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p className="font-medium">2020 - 2024</p>
                    <p className="font-bold">CGPA: 7.93</p>
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
                    <p className="font-medium">2018 - 2020</p>
                    <p className="font-bold">CGPA: 9.75</p>
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
                    <p className="font-medium">2017 - 2018</p>
                    <p className="font-bold">CGPA: 9.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${visibleSections.has('skills') ? 'animate-fade-in' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">Skills</h2>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => handleSkillChange('prev')}
                  className={`p-2 sm:p-4 rounded-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  } transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                
                <div className="flex gap-2 sm:gap-4 overflow-x-auto py-2 px-1 no-scrollbar">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative group flex-shrink-0">
                      <button
                        onClick={() => setActiveSkillIndex(index)}
                        onMouseEnter={() => setHoveredSkillIndex(index)}
                        onMouseLeave={() => setHoveredSkillIndex(null)}
                        className={`p-2 sm:p-4 rounded-xl transition-all duration-300 transform ${
                          index === activeSkillIndex
                            ? isDarkMode 
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110' 
                              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110'
                            : isDarkMode
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'
                        } shadow-lg hover:shadow-xl`}
                      >
                        <span className="text-xl sm:text-2xl">{skill.icon}</span>
                      </button>
                      {hoveredSkillIndex === index && (
                        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        } shadow-lg whitespace-nowrap animate-fade-in z-10`}>
                          {skill.category}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => handleSkillChange('next')}
                  className={`p-2 sm:p-4 rounded-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  } transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <div
                  className={`transform transition-all duration-300 ${
                    isSkillTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <div
                    key={skills[activeSkillIndex].category}
                    className={`${
                      isDarkMode ? 'bg-gray-900' : 'bg-white'
                    } p-4 sm:p-8 rounded-xl shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-4xl sm:text-5xl mr-4 animate-bounce">
                        {skills[activeSkillIndex].icon}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-bold ${
                        isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400'
                      } text-transparent bg-clip-text`}>
                        {skills[activeSkillIndex].category}
                      </h3>
                    </div>
                    
                    <p className={`text-base sm:text-lg mb-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {skills[activeSkillIndex].description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                      {skills[activeSkillIndex].items.map((skill, index) => (
                        <div
                          key={skill}
                          className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-center ${
                            isDarkMode 
                              ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-cyan-300 hover:from-gray-700 hover:to-gray-600' 
                              : 'bg-gradient-to-r from-gray-50 to-white text-blue-600 hover:from-blue-50 hover:to-gray-50'
                          } transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer border ${
                            isDarkMode ? 'border-gray-600' : 'border-gray-200'
                          } text-sm sm:text-base`}
                          style={{ animationDelay: `${index * 10}ms` }}
                        >
                          {skill}
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
              <div className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              } p-8 rounded-xl shadow-lg animate-scale-in border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <Phone className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      +91 9182619119
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Mail className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                    <a 
                      href="mailto:jayamangalatagore@gmail.com"
                      className={`text-lg ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    >
                      jayamangalatagore@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Linkedin className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                    <a 
                      href="https://www.linkedin.com/in/tagoor-jayamangala-b19a30283/"
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
          <p>&copy; 2025 Tagoor Paramathma Jayamangala. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}

export default App;
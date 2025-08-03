import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  project: Project;
  onClose: () => void;
  isDarkMode: boolean;
}

export function Modal({ project, onClose, isDarkMode }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div 
        className={`${
          isDarkMode 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        } rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl border animate-scale-in`}
      >
        <div className={`sticky top-0 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} p-4 border-b flex justify-between items-center rounded-t-xl z-10`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 ${
              isDarkMode 
                ? 'hover:bg-gray-800 text-gray-400 hover:text-gray-200' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
            } rounded-full transition-colors`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {project.businessProblem?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Business Problem
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {project.businessProblem.map((point, index) => (
                  <li key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.businessObjective?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Business Objective
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {project.businessObjective.map((point, index) => (
                  <li key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.constraints?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Constraints
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {project.constraints.map((point, index) => (
                  <li key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.dataDetails?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Data Details
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {project.dataDetails.map((point, index) => (
                  <li key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.projectArchitecture && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Project Architecture
              </h3>
              <div className="space-y-4">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {project.projectArchitecture.description}
                </p>
                <img 
                  src={project.projectArchitecture.diagramUrl} 
                  alt="Project Architecture Diagram"
                  className={`rounded-lg shadow-md w-full hover:shadow-lg transition-shadow border ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}
                />
              </div>
            </div>
          )}

          {project.methodology?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Solution Approach
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {project.methodology.map((step, index) => (
                  <li key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.keyLearnings?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Key Learnings
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {project.keyLearnings.map((learning, index) => (
                  <li key={index} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Tech Stack
              </h3>
              <div className="space-y-4">
                {project.techStack.map((category, index) => (
                  <div key={index}>
                    <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                            isDarkMode 
                              ? 'bg-gray-800 text-cyan-300 hover:bg-gray-700' 
                              : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.visualizations?.length > 0 && (
            <div className="animate-slide-in">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Visualizations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.visualizations.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Visualization ${index + 1}`}
                    className={`rounded-lg shadow-md w-full hover:shadow-lg transition-shadow border ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {project.dashboardUrl && (
            <div className="flex justify-center mt-12 animate-slide-in">
              <a
                href={project.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'
                } text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                <ExternalLink className="w-6 h-6 mr-2" />
                View Project Presentation
                <span className={`absolute bottom-0 left-0 w-full h-1 ${
                  isDarkMode ? 'bg-cyan-400' : 'bg-blue-400'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ExternalLink, Github, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Digits - Law Enforcement Assistant",
      category: "AI Application",
      description: "Mobile-first assistant app prototype for law enforcement built on C3.ai platform with TypeScript and SDL/C3Type.",
      longDescription: "Developed a comprehensive assistant application for law enforcement agencies using the C3.ai platform. The app features mobile-first design principles, real-time data processing, and intelligent automation to streamline field operations. Built with TypeScript and SDL/C3Type for robust type safety and scalability.",
      technologies: ["C3.ai", "TypeScript", "SDL/C3Type", "Mobile-First Design", "Real-time Processing"],
      impact: [
        "Reduced data entry time by 60% for field officers",
        "Improved response accuracy through AI-powered suggestions",
        "Streamlined workflow integration with existing systems"
      ],
      images: [
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Luvan Digital - E-commerce Platform",
      category: "Full-Stack Web App",
      description: "Complete Next.js + Tailwind catalog platform with responsive UI, Framer Motion navigation, and e-commerce readiness.",
      longDescription: "Built a comprehensive digital catalog platform for Luvan Digital using Next.js and Tailwind CSS. Features include responsive design, smooth animations with Framer Motion, product catalog management, and a foundation ready for full e-commerce functionality. The platform emphasizes user experience and performance optimization.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Responsive Design"],
      impact: [
        "Increased user engagement by 45% with smooth animations",
        "Achieved 95+ Lighthouse performance score",
        "Reduced bounce rate by 30% with improved UX"
      ],
      images: [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "IJALTI Recruitment System",
      category: "Management Platform",
      description: "Comprehensive recruitment management system with modern UI/UX design and project management capabilities.",
      longDescription: "Designed and developed a complete recruitment management system for IJALTI using Next.js, React, and TypeScript. The platform includes candidate tracking, interview scheduling, document management, and analytics dashboard. Features modern UI/UX design principles and efficient project management workflows.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Project Management", "UI/UX Design"],
      impact: [
        "Streamlined recruitment process reducing time-to-hire by 40%",
        "Improved candidate experience with intuitive interface",
        "Enhanced team collaboration with integrated project management"
      ],
      images: [
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Laundry Reservation App",
      category: "UX Design & Prototype",
      description: "User-centered laundry reservation system designed in Figma with comprehensive user research and high-fidelity prototypes.",
      longDescription: "Conducted comprehensive user research and designed a complete laundry reservation system from concept to high-fidelity prototype. The project involved user interviews, persona development, journey mapping, and iterative design testing. Created in Figma with a focus on accessibility and user experience optimization.",
      technologies: ["Figma", "User Research", "Prototyping", "User Interviews", "Journey Mapping", "Accessibility"],
      impact: [
        "Achieved 95% user satisfaction in prototype testing",
        "Reduced booking time by 50% through optimized flow",
        "Improved accessibility compliance to WCAG 2.1 AA standards"
      ],
      images: [
        "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/5591664/pexels-photo-5591664.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const ProjectCard: React.FC<{ project: any; index: number; featured?: boolean }> = ({ 
    project, 
    index, 
    featured = false 
  }) => (
    <div className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button
              onClick={() => openModal(index)}
              className="bg-white/90 text-gray-900 px-3 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200 flex items-center space-x-2"
            >
              <Play size={16} />
              <span>View Details</span>
            </button>
            <div className="flex space-x-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-sm">+{project.technologies.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my technical expertise and problem-solving approach across different domains
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={projects.indexOf(project)}
                featured={true}
              />
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={index + featuredProjects.length}
                  project={project}
                  index={projects.indexOf(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white p-2 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
              >
                <X size={20} />
              </button>
              
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={projects[selectedProject].images[currentImageIndex]}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                {projects[selectedProject].images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {projects[selectedProject].category}
                  </span>
                  <div className="flex space-x-2">
                    {projects[selectedProject].demoUrl && (
                      <a
                        href={projects[selectedProject].demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {projects[selectedProject].githubUrl && (
                      <a
                        href={projects[selectedProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[selectedProject].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {projects[selectedProject].longDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Impact
                  </h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].impact.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
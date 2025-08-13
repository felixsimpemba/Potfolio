import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample project data - in a real app, this could come from an API or CMS
  const projects = [
    {
      id: 1,
      title: 'CDF Monitoring System',
      description: 'Web application for monitoring, managing, and tracking Constituency Development Funds.',
      image: '/placeholder-project.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MySQL'],
      link: '#'
    },
    {
      id: 2,
      title: 'Company Operations System',
      description: 'Customized system to improve workflow and data management for business operations.',
      image: '/placeholder-project.jpg',
      category: 'web',
      technologies: ['Django', 'Python', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Cross-Platform Mobile App',
      description: 'Mobile application with intuitive user interfaces and efficient database structures.',
      image: '/placeholder-project.jpg',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase'],
      link: '#'
    },
    {
      id: 4,
      title: 'Network Management Tool',
      description: 'Tool for configuring and maintaining LAN/WAN networks with monitoring capabilities.',
      image: '/placeholder-project.jpg',
      category: 'other',
      technologies: ['Java', 'Spring Boot'],
      link: '#'
    },
    {
      id: 5,
      title: 'Electronic Circuit Design',
      description: 'Custom circuit design using Arduino and ESP8266 for IoT applications.',
      image: '/placeholder-project.jpg',
      category: 'other',
      technologies: ['Arduino', 'C++'],
      link: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern and responsive portfolio website built with React and Tailwind CSS.',
      image: '/placeholder-project.jpg',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </FilterButton>
          <FilterButton active={filter === 'web'} onClick={() => setFilter('web')}>
            Web
          </FilterButton>
          <FilterButton active={filter === 'mobile'} onClick={() => setFilter('mobile')}>
            Mobile
          </FilterButton>
          <FilterButton active={filter === 'other'} onClick={() => setFilter('other')}>
            Other
          </FilterButton>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Filter Button Component
const FilterButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${
        active 
          ? 'bg-primary text-white shadow-md' 
          : 'bg-white text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-primary/30">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-primary rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            View Project
          </a>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-secondary text-sm text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
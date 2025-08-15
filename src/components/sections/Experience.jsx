import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Experience data from CV
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Software Developer',
      company: 'Chilan Technology',
      period: 'January 2024 – Present',
      duration: '8+ months',
      type: 'Current',
      responsibilities: [
        'Develop cross-platform mobile applications using Flutter for various use cases.',
        'Design and implement efficient database structures and intuitive user interfaces to enhance user experience.',
        'Optimize app performance, security, and scalability for seamless functionality.',
        'Provide ongoing maintenance, updates, and technical support to ensure reliability and efficiency.'
      ],
      technologies: ['Flutter', 'Database Design', 'Mobile Development', 'UI/UX']
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'Amini CPR',
      period: 'September 2023 – March 2024',
      duration: '7 months',
      type: 'Contract',
      responsibilities: [
        'Developed a web application for monitoring, managing, and tracking Constituency Development Funds (CDF).',
        'Designed and implemented database structures and user-friendly interfaces to streamline data entry and reporting processes.',
        'Enhanced application security and performance, ensuring seamless data management and accessibility.',
        'Provided ongoing maintenance and technical support to ensure optimal system performance.'
      ],
      technologies: ['Web Development', 'Database Design', 'Security', 'Performance Optimization']
    },
    {
      id: 3,
      title: 'IT Manager',
      company: 'Puchi Cash Spot Company',
      period: 'July 2023 – November 2023',
      duration: '5 months',
      type: 'Full-time',
      responsibilities: [
        'Established and led the IT Department, defining strategies to align technology with business goals.',
        'Developed and deployed a customized company operations system to improve workflow and data management.',
        'Oversaw network setup, hardware installations, and software configurations, ensuring system reliability and efficiency.',
        'Provided technical support, staff training, and troubleshooting for IT-related issues to optimize performance.'
      ],
      technologies: ['IT Management', 'System Development', 'Network Setup', 'Team Leadership']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
      <section id="experience" className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 opacity-30"></div>
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Building innovative solutions and leading technology initiatives across different domains
            </p>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                  <ExperienceCard
                      key={exp.id}
                      experience={exp}
                      index={index}
                      variants={itemVariants}
                  />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

// Enhanced Experience Card Component
const ExperienceCard = ({ experience, index, variants }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Current':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Contract':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Full-time':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
      <motion.div
          variants={variants}
          className="relative group"
      >
        {/* Timeline dot */}
        <div className="absolute left-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 z-10 group-hover:scale-150 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
        </div>

        <div className="ml-10 md:ml-16">
          <motion.div
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl p-4 md:p-8 border border-slate-200 relative overflow-hidden group-hover:border-blue-200 transition-all duration-300"
          >
            {/* Card background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-bl from-blue-50 to-purple-50 rounded-full transform translate-x-10 md:translate-x-16 -translate-y-10 md:-translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                  {experience.title}
                </h3>
                <h4 className="text-base md:text-xl font-semibold text-blue-600 mb-2 md:mb-3">
                  {experience.company}
                </h4>
                <div className="flex flex-wrap gap-2 items-center">
                <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border ${getTypeColor(experience.type)}`}>
                  {experience.type}
                </span>
                  <span className="text-slate-500 text-sm hidden sm:inline">•</span>
                  <span className="text-slate-600 font-medium text-xs md:text-sm">{experience.duration}</span>
                </div>
              </div>

              <div className="md:text-right md:flex-shrink-0">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-3 md:px-4 py-2 rounded-lg border border-slate-200">
                <span className="text-slate-700 font-semibold text-xs md:text-sm">
                  {experience.period}
                </span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-4 md:mb-6 relative z-10">
              <h5 className="text-base md:text-lg font-semibold text-slate-800 mb-3 md:mb-4">Key Responsibilities</h5>
              <div className="space-y-2 md:space-y-3">
                {experience.responsibilities.map((responsibility, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start group/item"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 md:mr-4 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-slate-600 leading-relaxed group-hover/item:text-slate-800 transition-colors duration-200 text-sm md:text-base">
                    {responsibility}
                  </span>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="relative z-10">
              <h5 className="text-base md:text-lg font-semibold text-slate-800 mb-2 md:mb-3">Technologies & Skills</h5>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {experience.technologies.map((tech, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 md:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-xs md:text-sm font-medium border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                ))}
              </div>
            </div>

            {/* Hover effect gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl"></div>
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Experience;
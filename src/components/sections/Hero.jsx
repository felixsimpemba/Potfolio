import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-white to-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-lg md:text-xl text-primary font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Felix Simpemba
            </motion.h1>
            <motion.h3 
              className="text-xl md:text-2xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Software Engineer & IT Specialist
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Building innovative solutions with expertise in web development, mobile apps, 
              and system design to create positive technological impacts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a href="#projects" className="px-6 py-3 border border-primary text-primary rounded-md font-medium transition-all hover:bg-primary hover:text-white">
                View Projects
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hero image or illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="relative w-full h-[400px] bg-primary/10 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-primary">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/20 to-transparent h-1/3"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="flex flex-col items-center text-primary">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
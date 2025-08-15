import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="w-full h-[400px] bg-secondary rounded-lg overflow-hidden relative shadow-lg"
              whileInView={{ 
                boxShadow: ["0px 4px 12px rgba(0, 0, 0, 0.1)", "0px 8px 24px rgba(0, 0, 0, 0.15)", "0px 4px 12px rgba(0, 0, 0, 0.1)"]
              }}
              transition={{ 
                boxShadow: { 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }
              }}
            >
              {/* Replace with actual profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-primary">
                <motion.svg 
                  className="w-32 h-32" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut" 
                  }}
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </motion.svg>
              </div>
              
              {/* Animated background elements */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full"
                style={{ 
                  background: "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(0,0,0,0.05) 100%)" 
                }}
                whileInView={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </motion.div>
            
            {/* Decorative element with animation */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-lg -z-10"
              whileInView={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
            ></motion.div>
          </motion.div>
          
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark mb-4">Software Engineer & IT Specialist</h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                I aim to build a rewarding career as a software engineer and IT specialist by applying my knowledge of 
                programming, system design, and problem-solving skills. My goal is to contribute to innovative 
                projects that drive business success and create positive technological impacts.
              </p>
              
              <p>
                With experience in web development, mobile app development, and IT support, I bring a versatile 
                skill set to every project. I'm passionate about creating efficient, user-friendly solutions 
                that solve real-world problems.
              </p>
              
              <p>
                I hold a Bachelor of Computer Science in System Engineering from the University of Zambia (2021-2024)
                and have worked with companies like Chilan Technology, Amini CPR, and Puchi Cash Spot Company.
              </p>
            </div>
            
            {/* Education & Experience Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div 
                className="bg-secondary p-4 rounded-lg shadow-sm cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(var(--color-secondary-rgb), 0.5)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <motion.h4 
                  className="font-bold text-primary text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Education
                </motion.h4>
                <p className="text-gray-600">Bachelor of Computer Science</p>
                <p className="text-sm text-gray-500">University of Zambia, 2021-2024</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-4 rounded-lg shadow-sm cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(var(--color-secondary-rgb), 0.5)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <motion.h4 
                  className="font-bold text-primary text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Experience
                </motion.h4>
                <p className="text-gray-600">3+ Years</p>
                <p className="text-sm text-gray-500">Web & Mobile Development</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
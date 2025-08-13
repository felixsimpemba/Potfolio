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
            <div className="w-full h-[400px] bg-secondary rounded-lg overflow-hidden relative">
              {/* Replace with actual profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-primary">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-lg -z-10"></div>
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
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold text-primary text-lg">Education</h4>
                <p className="text-gray-600">Bachelor of Computer Science</p>
                <p className="text-sm text-gray-500">University of Zambia, 2021-2024</p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold text-primary text-lg">Experience</h4>
                <p className="text-gray-600">3+ Years</p>
                <p className="text-sm text-gray-500">Web & Mobile Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background shapes */}
          <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
          />
          <motion.div
              className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, -20, 0],
                y: [0, 15, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
          />
          <motion.div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-2xl opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                rotate: 360
              }}
              transition={{
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[70vh]">
            {/* Text content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm md:text-base font-medium mb-6 border border-blue-200">
                👋 Hello, I'm
              </span>
              </motion.div>

              <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6"
              >
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight block">
                Felix
              </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight block">
                Simpemba
              </span>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-6 lg:mb-8 font-light">
                  <span className="font-semibold text-slate-800">Software Engineer</span>
                  <span className="text-slate-400 mx-2">•</span>
                  <span className="font-semibold text-slate-800">IT Specialist</span>
                </h2>
              </motion.div>

              <motion.p
                  variants={itemVariants}
                  className="text-slate-600 text-base md:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building innovative solutions with expertise in web development, mobile apps,
                and system design to create positive technological impacts.
              </motion.p>

              <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <motion.a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform text-center"
                    whileHover={{
                      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>

                <motion.a
                    href="#projects"
                    className="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 text-center"
                    whileHover={{
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.a>

                <motion.a
                    href="/felix_simpemba_cv.md"
                    download="Felix_Simpemba_CV.md"
                    className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </motion.a>
              </motion.div>

              {/* Skills badges */}
              <motion.div
                  variants={itemVariants}
                  className="mt-8 lg:mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {['React', 'Flutter', 'Node.js', 'Database Design', 'System Architecture'].map((skill, index) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-600 rounded-full text-sm font-medium border border-slate-200 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero illustration */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="relative w-full max-w-md lg:max-w-lg"
              >
                {/* Main card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>

                  {/* Profile illustration */}
                  <div className="relative z-10 text-center">
                    <motion.div
                        className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl"
                        animate={{
                          boxShadow: [
                            "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
                            "0 25px 50px -12px rgba(147, 51, 234, 0.4)",
                            "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                    >
                      <motion.svg
                          className="w-16 h-16 lg:w-20 lg:h-20 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                      >
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </motion.svg>
                    </motion.div>

                    {/* Code simulation */}
                    <div className="space-y-3 text-left">
                      <motion.div
                          className="flex items-center gap-2"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 1.5 }}
                      >
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="h-2 bg-slate-200 rounded flex-1">
                          <motion.div
                              className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded"
                              initial={{ width: "0%" }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 2, delay: 2 }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                          className="flex items-center gap-2"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 2.2 }}
                      >
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="h-2 bg-slate-200 rounded flex-1">
                          <motion.div
                              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded"
                              initial={{ width: "0%" }}
                              animate={{ width: "92%" }}
                              transition={{ duration: 2, delay: 2.7 }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                          className="flex items-center gap-2"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 2.9 }}
                      >
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <div className="h-2 bg-slate-200 rounded flex-1">
                          <motion.div
                              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded"
                              initial={{ width: "0%" }}
                              animate={{ width: "78%" }}
                              transition={{ duration: 2, delay: 3.4 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        rotate: 360
                      }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                      }}
                  />

                  <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"
                      animate={{
                        y: [0, 8, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.a
              href="#about"
              className="flex flex-col items-center text-slate-600 hover:text-blue-600 transition-colors duration-300"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
          >
            <span className="text-xs md:text-sm mb-2 font-medium">Scroll Down</span>
            <motion.div
                className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
                animate={{
                  borderColor: ["#64748b", "#3b82f6", "#64748b"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
            >
              <motion.div
                  className="w-1 h-3 bg-current rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                    opacity: [1, 0.3, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </section>
  );
};

export default Hero;
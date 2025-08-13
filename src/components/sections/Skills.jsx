import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Skills data from CV
  const skillCategories = [
    {
      id: 'web',
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'Vue.js', level: 70 },
        { name: 'Node.js', level: 75 },
        { name: 'Spring Boot', level: 65 },
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'React Native', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'Expo Router', level: 65 },
      ]
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C/C++', level: 70 },
      ]
    },
    {
      id: 'other',
      title: 'Other Skills',
      skills: [
        { name: 'IT Support', level: 85 },
        { name: 'Graphic Design', level: 75 },
        { name: 'Electronic Circuit Design', level: 70 },
        { name: 'Networking', level: 80 },
        { name: 'Microsoft Office', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-dark mb-6">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={`${category.id}-${skillIndex}`} 
                    skill={skill} 
                    delay={skillIndex * 0.1} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional skills icons */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-center mb-8">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* These would typically be actual SVG icons or images */}
            {['React', 'Flutter', 'Python', 'Java', 'Node.js', 'MySQL', 'Firebase', 'Git', 'Figma', 'AWS'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="text-primary font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skill Bar Component
const SkillBar = ({ skill, delay }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-dark">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  MessagesSquare,
  Brain
} from 'lucide-react';

const TechIcon = ({ name }) => {
  return (
    <div className="w-8 h-8">
      <img 
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
        alt={`${name} icon`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { icon: 'html5', color: '#E34F26' },
        { icon: 'css3', color: '#1572B6' },
        { icon: 'javascript', color: '#F7DF1E' },
        { icon: 'react', color: '#61DAFB' },
        { icon: 'bootstrap', color: '#7952B3' },
        { icon: 'tailwindcss', color: '#38B2AC' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { icon: 'php', color: '#777BB4' },
        { icon: 'python', color: '#3776AB' },
        { icon: 'nodejs', color: '#339933' },
        { icon: 'express', color: '#000000' },
        { icon: 'laravel', color: '#FF2D20' },
        { icon: 'mysql', color: '#4479A1' },
        { icon: 'postgresql', color: '#4169E1' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { icon: 'git', color: '#F05032' },
        { icon: 'github', color: '#181717' },
        { icon: 'vscode', color: '#007ACC' },
        { icon: 'postman', color: '#FF6C37' } 

      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Trabajo en equipo', icon: Users, color: '#FF6B6B', isLucide: true },
        { name: 'Comunicación', icon: MessagesSquare, color: '#4CAF50', isLucide: true },
        { name: 'Proactividad', icon: Brain, color: '#9C27B0', isLucide: true }
      ]
    }
  ];

  return (
    <section id="skill" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-teal-500">Mis</span> Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-teal-500">
                {category.title}
              </h3>
              {category.title === 'Soft Skills' ? (
                // Mantener el diseño original para Soft Skills
                <div className="grid gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300">
                        <skill.icon 
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="text-gray-400 group-hover:text-teal-500 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Grid de 3 columnas para las secciones técnicas
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.icon}
                      className="flex justify-center items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-300">
                        <TechIcon name={skill.icon.toLowerCase()} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
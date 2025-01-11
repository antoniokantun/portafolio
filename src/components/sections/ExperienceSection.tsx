import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  type: string;
  resumen: string;
  description: string[];
  skills: string[];
}

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      title: "Aplicacion web de gestión de presupuestos y cotizaciones",
      company: "Cancun Express Rent a Car - Pasantía",
      location: "Cancún, México",
      period: "Mayo 2024 - Agosto 2024",
      type: "Pasantía",
      resumen: "Trabajé en el desarrollo de una aplicación web para gestionar presupuestos, cotizaciones de artículos automovilísticos. Esto fue algo de lo que hice:",
      description: [
        "Participé en el diseño e implementación de las interfaces del frontend, asegurando una experiencia de usuario intuitiva y eficiente.",
        "Diseñé e implementé módulos funcionales para cotizaciones, ventas, clientes, productos, administradores y configuracion.", 
        "Participé en la estructuración de una base de datos robusta en MySQL para garantizar su escalabilidad.",
      ],
      skills: ["Laravel", "PHP", "TailwindCSS", "MySQL", "Git"]
    },
    {
      title: "Aplicación web Tsakin",
      company: "Proyecto Personal",
      period: "Enero 2024 - Marzo 2024",
      type: "Proyecto Personal",
      resumen: "Desarrollé una plataforma web integral enfocada en el bienestar emocional, que conecta recursos de YouTube, calendario de Google y mapas para ayudar a personas que buscan apoyo psicológico en Cancún. La plataforma incluye un asistente virtual impulsado por IA para brindar apoyo inicial y orientación. Algunas de las tareas que realicé fueron:",
      description: [
        "Integré múltiples APIs (YouTube, Calendar, Maps) para crear un hub de recursos de salud mental, incluyendo videos motivacionales y ubicación de centros de atención psicológica en Cancún ",
        "Implementé un sistema de chat con IA usando OpenAI para ofrecer un primer nivel de apoyo emocional y guiar a los usuarios hacia recursos profesionales.",
      ],
      skills: ["React", "TailwindCSS", "API OpenAI", "Express.js", "MySQL", "Git"]
    },
    {
      title: "Tienda en línea",
      company: "Proyecto Personal",
      period: "Enero 2023 - Marzo 2023",
      type: "Proyecto Personal",
      resumen: "Desarrolle un e-commerce especializado en productos para el bienestar mental y emocional, desde libros de autoayuda hasta artículos para terapia y meditación.",
      description: [
        "Diseñé e implementé un módulo de catálogo de productos para facilitar la navegación y búsqueda de artículos.",
        "Creé una landing page atractiva y optimizada para captar la atención de los usuarios.",
        "Implementé un sistema de login para la autenticación de usuarios y gestión de cuentas.",
        "Desarrollé el proceso de checkout con integración para pagos a través de PayPal.",
      ],
      skills: ["React", "TailwindCSS", "Express.js", "MySQL", "Git"]
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-teal-500">Mi</span> Experiencia
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-xl p-6 ml-12 relative hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -left-8 top-8 bg-teal-500 rounded-full p-3">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-500">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    {index === 0 && exp.location && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => toggleExpansion(index)}
                  className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors mt-2"
                >
                  {expandedIndex === index ? (
                    <>Ver menos <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Ver más <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-4">
                        <p className="text-gray-400">{exp.resumen}</p>
                        <ul className="space-y-2 text-gray-400">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="min-w-1.5 h-1.5 rounded-full bg-teal-500 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-700 text-teal-500 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
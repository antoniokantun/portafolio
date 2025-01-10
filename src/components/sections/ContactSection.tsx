'use client';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-teal-500">Contacta</span> Conmigo
        </h2>
        <p className="text-gray-400 mb-8">
          Me encantaría formar parte de tu equipo y contribuir con nuevas ideas.
        </p>
        <motion.a
          href="mailto:tony13.aekc@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-teal-500 text-white rounded-lg font-semibold shadow-lg hover:bg-teal-600 transition-colors"
        >
          Enviar Mensaje
        </motion.a>
      </div>
    </section>
  );
};

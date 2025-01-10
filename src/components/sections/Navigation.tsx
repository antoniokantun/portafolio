'use client';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setIsMenuOpen: (value: boolean) => void;
}

export const Navigation = ({ isMenuOpen, toggleMenu, setIsMenuOpen }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur-sm z-40 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-teal-500"
          >
            AEKC
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-6"
          >
            <a href="#about" className="hover:text-teal-500 transition-colors">Sobre mí</a>
            <a href="#skill" className="hover:text-teal-500 transition-colors">Habilidades</a>
            <a href="#experience" className="hover:text-teal-500 transition-colors">Experiencia</a>
            <a href="#contact" className="hover:text-teal-500 transition-colors">Contacto</a>
          </motion.div>

          <button
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg"
          >
            <div className="flex flex-col items-center gap-4">
              <a
                href="#about"
                className="w-full text-center py-2 hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </a>
              <a
                href="#projects"
                className="w-full text-center py-2 hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="w-full text-center py-2 hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';
import avatarImage from '../public/images/he_sitting_with_notebook.png';
import perfilImage from '../public/images/perfil.jpg';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#0F172A] text-gray-100 min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navigation 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <HeroSection avatarImage={avatarImage} />
      <AboutSection perfilImage={perfilImage} />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
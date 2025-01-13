'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  avatarImage: StaticImageData;
}

export const HeroSection = ({ avatarImage }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative mt-16 md:mt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pt-8 md:pt-0"
          >
            <h2 className="text-2xl text-teal-500">Hola, me llamo</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Antonio
              <span className="text-teal-500"> Emmanuel</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Desarrollador jr
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/antoniokantun" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/antonio-emmanuel-kantun-cahum-163b02171/" },
                { Icon: Mail, href: "mailto:tony13.aekc@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-teal-500 transition-colors"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[200px] md:max-w-[250px] lg:max-w-md mx-auto">
              <Image
                src={avatarImage}
                alt="Developer Avatar"
                width={150}
                height={150}
                className="w-auto h-auto object-contain scale-90 md:scale-100"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
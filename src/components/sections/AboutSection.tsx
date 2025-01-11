'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Code, Coffee } from 'lucide-react';

interface AboutSectionProps {
  perfilImage: StaticImageData;
}

export const AboutSection = ({ perfilImage }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-teal-500">Sobre</span> Mí
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Soy Antonio Emmanuel, un estudiante de Ingeniería en Desarrollo de Software y un desarrollador web junior. Me encanta enfrentar nuevos retos y aprender, con el fin de utilizar herramientas y tecnologías modernas. Mis proyectos personales y mi experiencia en una pasantía me han permitido adquirir habilidades prácticas en la temática de diseño y desarrollo web. Tengo interés por participar en proyectos desafiantes y quiero colaborar con personas talentosas con el objetivo de crear soluciones innovadoras. En cuanto a mis habilidades, destacaría mi capacidad para trabajar en equipo, el enfoque en la resolución de problemas y el ánimo para aprender y afrontar nuevos retos. Me motiva el trabajo con el objetivo de construir soluciones digitales que generen un impacto positivo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: "Desarrollo Web" },
                { icon: Coffee, label: "Coding & Coffee" }
              ].map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-800 rounded-lg text-center"
                >
                  <Icon className="w-8 h-8 mb-2 mx-auto text-teal-500" />
                  <p className="text-sm">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src={perfilImage}
                alt="Profile"
                className="object-cover"
                width={600}
                height={500}
              />
            </div>
            <div className="absolute inset-0 bg-teal-500/10 rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
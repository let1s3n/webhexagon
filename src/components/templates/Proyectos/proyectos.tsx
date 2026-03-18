import { projectsProps } from '@/utils/types/generalProps';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const Proyectos = ({ projects }: projectsProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[25vw] h-[25vw] bg-cyan-600/30 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase"
          >
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Proyectos
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Fácil de entender. Imposible de ignorar. Diseñamos y creamos
            productos, marcas y experiencias digitales de gran belleza.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight"
              >
                Trabajos
                <br />
                Destacados
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors no-underline"
              >
                Iniciar un proyecto <ExternalLink className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_CDN + project.card_image}
                  alt={project.company_name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500 via-black/50 to-transparent opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 no-underline"
                >
                  <div className="flex gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.project_types.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs font-bold tracking-wider text-gray-300 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight">
                    {project.company_name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿TIENES UN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              PROYECTO
            </span>{' '}
            EN MENTE?
          </h2>
          <p className="text-gray-400 mb-10">
            Cuéntanos tu idea y la convertimos en realidad digital.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-105 no-underline"
          >
            Contactar Ahora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Proyectos;

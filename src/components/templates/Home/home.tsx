import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const Home = ({ imageProps, projects }: any) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[25vw] h-[25vw] bg-cyan-600/30 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[35vw] h-[35vw] bg-pink-600/20 rounded-full blur-[130px] mix-blend-screen animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
              La Nueva Era del Diseño Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            DEFINE TU
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              PRESENCIA
            </span>
            <br />
            DIGITAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Que te encuentren en todos los canales digitales para que crezcas
            sin límites. Transformamos tu visión en una realidad digital
            vibrante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/proyectos"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] no-underline"
            >
              <span className="relative z-10">Ver Proyectos</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/contacto"
              className="text-white font-medium hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 no-underline"
            >
              Hablemos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative floating element */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-20 w-48 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.2)] opacity-80 hidden md:block"
        >
          <Image
            src={imageProps[0].src}
            alt="Hexagon Studio"
            fill
            style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
            placeholder="blur"
            blurDataURL={imageProps[0].blurDataURL}
          />
        </motion.div>
      </section>

      {/* Info Box */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 text-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              ¡NOSOTROS PODEMOS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                AYUDARTE
              </span>{' '}
              A LOGRARLO!
            </h4>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Nos apasiona apoyar a empresas, mejorando su presencia en línea y
              multiplicando su impacto positivo.
            </p>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-bold text-sm tracking-wider hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 no-underline"
            >
              VER SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight"
            >
              Proyectos
              <br />
              Destacados
            </motion.h2>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors no-underline"
            >
              Ver todos los proyectos <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 &&
              projects.slice(0, 3).map((project: any, index: number) => (
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

      {/* Contact CTA Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿TODO LISTO PARA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              EMPEZAR?
            </span>
          </h2>
          <p className="text-gray-400 mb-10">
            Déjanos un mensaje y te contactaremos lo más pronto posible.
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

export default Home;

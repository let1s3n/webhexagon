import { Brain, Code2, Globe, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const services = [
  {
    title: 'Aplicaciones Web',
    description:
      'Sistemas a medida para digitalizar tu operación: ERP, tesorería, ventas, inventarios y procesos de negocio.',
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    title: 'Aplicaciones Móviles',
    description:
      'Apps nativas y multiplataforma conectadas a tu operación, con funcionalidad avanzada y experiencia de usuario fluida.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    gradient: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'SaaS / ISaaS',
    description:
      'Plataformas inteligentes con IA y analítica de datos en el core. Automatiza decisiones y anticipa resultados.',
    icon: <Brain className="w-8 h-8 text-pink-400" />,
    gradient: 'from-pink-500/20 to-transparent',
  },
  {
    title: 'Páginas Web',
    description:
      'Presencia digital profesional para negocios que necesitan visibilidad, confianza y un punto de contacto online.',
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    gradient: 'from-emerald-500/20 to-transparent',
  },
];

const Servicios = ({ imageProps }: any) => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-32 pb-20">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[25vw] h-[25vw] bg-cyan-600/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6"
              >
                Desarrollamos software que resuelve{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                  problemas reales
                </span>{' '}
                de negocio
              </motion.h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Aplicaciones web, móviles y SaaS con IA para automatizar
                procesos, integrar sistemas y escalar tu operación.
              </p>
              <a
                href="#contacto"
                className="inline-flex px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 text-white font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 no-underline"
              >
                Contáctanos
              </a>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] hidden xl:block">
              <Image
                src={imageProps[0].src}
                alt="Teamwork"
                fill
                className="object-contain"
                blurDataURL={imageProps[0].blurDataURL}
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                Servicios
              </span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Soluciones digitales para empresas que quieren orden, control y
              crecimiento. Desde sistemas a medida hasta plataformas con IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-bl ${service.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;

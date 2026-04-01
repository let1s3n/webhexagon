import { motion } from 'motion/react';
import Image from 'next/image';

interface Client {
  company_name: string;
  logo: string;
}

const Clientes = ({ clients }: { clients: Client[] }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6"
          >
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500">
              Clientes
            </span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empresas que confiaron en nosotros para digitalizar y automatizar su
            operación.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <Image
                  src={process.env.NEXT_PUBLIC_CDN + client.logo}
                  alt={client.company_name}
                  width={80}
                  height={80}
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors text-center">
                {client.company_name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;

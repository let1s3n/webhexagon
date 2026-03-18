import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const Contacto = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  /* const [captchaError, setCaptchaError] = useState(false); */
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const {
    register,
    handleSubmit,
    formState: { errors: _errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    /* const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false); */
    setIsSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        /* body: JSON.stringify({ ...data, captchaToken }), */
        body: JSON.stringify({ ...data }),
      });
      if (response.ok) setIsSent(true);
    } catch (e) {
      console.error(e);
    }
    setIsSending(false);
    recaptchaRef.current?.reset();
  };

  return (
    <section className="py-24 pt-40 bg-[#050505] relative overflow-hidden min-h-screen">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              ¿TIENES UNA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                IDEA?
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10">
              Estamos listos para transformar tu visión en realidad. Escríbenos
              y hagamos algo increíble juntos.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Email
                  </p>
                  <Link
                    href="mailto:info@hexagonstudio.pe"
                    className="text-lg font-medium text-white no-underline hover:text-cyan-400 transition-colors"
                  >
                    info@hexagonstudio.pe
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Teléfono
                  </p>
                  <p className="text-lg font-medium text-white">
                    +51 943 448 751
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Ubicación
                  </p>
                  <p className="text-lg font-medium text-white">Lima, Perú</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link
                  href="https://www.facebook.com/HexagonStudioPeru"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/fbIcon.svg`}
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/hexagonstudio_peru"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/igIcon.svg`}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=943448751"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN}images/general/iconos/social/whatsappIcon.svg`}
                    alt="Whatsapp"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          {!isSent ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Correo Electrónico
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Mensaje
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                {/* <div className="flex flex-col items-center gap-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    theme="dark"
                    onChange={() => setCaptchaError(false)}
                  />
                  {captchaError && (
                    <p className="text-red-400 text-sm">
                      Por favor, verifica que no eres un robot.
                    </p>
                  )}
                </div> */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] disabled:opacity-50"
                >
                  {isSending ? 'Enviando...' : 'Enviar Mensaje'}{' '}
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.form>
          ) : (
            <div className="bg-[#0a0a0a] p-12 rounded-3xl border border-white/10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-400">
                Te contactaremos lo más pronto posible.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacto;

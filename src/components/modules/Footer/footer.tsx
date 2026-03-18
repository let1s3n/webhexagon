import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.png`}
            alt="Hexagon Logo"
            width={40}
            height={46}
            quality={100}
          />
          <span className="text-lg font-bold tracking-wider text-white">
            HEXAGON<span className="text-cyan-400">STUDIO</span>
          </span>
        </Link>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hexagon Studio. Todos los derechos
          reservados.
        </p>

        <div className="flex items-center gap-4">
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
    </footer>
  );
};

export default Footer;

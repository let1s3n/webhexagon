import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'servicios', 'clientes', 'contacto'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg shadow-purple-900/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group no-underline">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}images/general/logo2.png`}
            alt="Hexagon Logo"
            width={30}
            height={35}
            priority
            quality={100}
          />
          <span className="text-xl font-bold tracking-wider text-white">
            HEXAGON
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
              STUDIO
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-cyan-400 transition-colors duration-300 uppercase tracking-widest no-underline ${
                activeSection === link.href.replace('#', '')
                  ? 'text-cyan-400'
                  : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-2 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 text-white font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 no-underline"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-gray-200 hover:text-cyan-400 no-underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

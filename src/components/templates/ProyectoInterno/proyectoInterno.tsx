import { projectProps, projectsProps } from '@/utils/types/generalProps';
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProyectoInterno = ({ projects }: projectsProps) => {
  const [project, setProject] = useState<projectProps>({
    slug: '',
    company_name: '',
    link_web: '',
    project_types: [],
    year: '',
    services: [],
    techtools: [],
    techtags: [],
    service_slogan: '',
    description: '',
    hero_image: '',
    card_image: '',
    logo: '',
    galery: [],
    history: '',
    solution: '',
  });
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (projects) {
      const currentProject = projects.find((el) => el.slug === slug);
      if (currentProject) setProject(currentProject);
    }
  }, [slug, projects]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
        {project.hero_image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN}${project.hero_image}`}
            alt={project.company_name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              {project.logo && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN}${project.logo}`}
                  alt="logo"
                  width={200}
                  height={60}
                  style={{ height: 'auto' }}
                  className="mb-4"
                />
              )}
              <div className="flex gap-2 mb-3">
                {project.project_types.map((type, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold tracking-wider text-cyan-400 uppercase"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                {project.company_name}
              </h1>
              <p className="text-gray-400 text-lg mt-2">{project.year}</p>
            </div>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-0"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Atrás</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
          <p className="text-white/60 text-sm mb-2">Acerca del proyecto</p>
          <ChevronDown
            className="w-6 h-6 text-white/60 mx-auto animate-bounce cursor-pointer"
            onClick={scrollToContent}
          />
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              {project.link_web && (
                <Link
                  href={project.link_web}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors mb-8 no-underline"
                >
                  Visitar sitio web <ExternalLink className="w-5 h-5" />
                </Link>
              )}

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                {project.service_slogan}
              </h2>

              <div className="mb-8">
                <p className="text-gray-400 border-b border-white/10 pb-2 mb-4 text-sm uppercase tracking-wider font-semibold">
                  Servicios proporcionados
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {project.services.map((el, i) => (
                    <p key={i} className="text-white/80">
                      {el}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-gray-400 border-b border-white/10 pb-2 mb-4 text-sm uppercase tracking-wider font-semibold">
                  Tecnologías usadas
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {project.techtools.map((el, i) => (
                    <p key={i} className="text-white/80">
                      {el}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex gap-2 flex-wrap mb-6">
                {project.techtags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-10 text-justify leading-relaxed">
                {project.description}
              </p>

              <div className="mb-10">
                <h2 className="text-xl font-bold text-white mb-4">Historia</h2>
                <p className="text-gray-400 text-justify leading-relaxed">
                  {project.history}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">Solución</h2>
                <p className="text-gray-400 text-justify leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProyectoInterno;

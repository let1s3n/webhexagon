import Home from '@/components/templates/Home/home';
import { imageProps, projectsProps } from '@/utils/types/generalProps';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';

const index = ({ imageProps, projects }: imageProps & projectsProps) => {
  return (
    <>
      <Head>
        <title>
          Desarrollo de Apps Web, Móviles y Software a Medida | Hexagon Studio
        </title>
        <meta
          name="description"
          content="Hexagon Studio ofrece desarrollo de aplicaciones web, apps móviles y software ERP a medida. Impulsa tu negocio con nuestras soluciones digitales personalizadas e innovadoras."
        />
      </Head>
      <Home imageProps={imageProps} projects={projects} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const illustrationHome = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/home/illustrationHome1.png`
  );
  const cubosHome = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_CDN}images/home/cubosHome.png`
  );
  const projects = [
    {
      slug: 'hacons',
      company_name: 'H.A. CONS',
      link_web: 'https://www.haconstructorasac.com/',
      project_types: ['WEB'],
      year: '2024',
      services: ['Sitio web', 'Brand Identity', 'UI', 'Form. contacto'],
      techtools: [
        'React JS',
        'Next.js',
        'AWS',
        'TypeScript',
        'Tailwindcss',
        'Shadcn',
      ],
      techtags: ['React JS', 'Next.js', 'AWS', 'TypeScript'],
      service_slogan:
        'Desarrollo web personalizado: diseño único, funcionalidades integradas y secciones a medida.',
      description:
        'Sitio web de la Constructora e Inmobiliaria H.A. Cons. Desarrollado cumpliendo todas las solicitudes del cliente: diseño moderno, uso de tecnologías avanzadas de desarrollo, servicios backend para contacto por email, y manejo óptimo de dominio y hosting.',
      hero_image: 'images/projects/web/showcase-hacons-secondary.png',
      card_image: 'images/projects/web/showcase-hacons.png',
      logo: 'images/projects/logos/hacons-logo-white.png',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'En Hexagon Studio, nos enorgullece haber trabajado con H.A. Cons, una constructora e inmobiliaria líder en el sector. H.A. Cons, reconocida por su excelencia en construcción y bienes raíces, buscaba un sitio web que reflejara su compromiso con la calidad y la innovación. Aprovechamos esta oportunidad para fusionar nuestra experiencia en desarrollo web con la visión de H.A. Cons, creando una plataforma digital que cumple con todas sus expectativas.',
      solution:
        'Para H.A. Cons, desarrollamos un sitio web robusto y elegante que cumplió con todas sus expectativas. El diseño moderno y visualmente atractivo refleja la profesionalidad de H.A. Cons en el sector de la construcción e inmobiliaria. Utilizamos tecnologías de vanguardia para asegurar un rendimiento óptimo y una experiencia de usuario fluida. Además, integramos servicios backend eficientes para facilitar el contacto por email y optimizamos el manejo del dominio y hosting, garantizando una velocidad de carga rápida y una disponibilidad continua del sitio web. Esta solución integral establece un nuevo estándar de calidad y funcionalidad en la presencia digital de H.A. Cons.',
    },
    {
      slug: 'alr',
      company_name: 'SMRL ALR',
      link_web: '',
      project_types: ['WEB'],
      year: '2023',
      services: [
        'Sitio web',
        'Brand Identity',
        'UI',
        'Multilenguaje',
        'Form. contacto',
      ],
      techtools: ['React JS', 'Next.js', 'AWS', 'TypeScript', 'Bootstrap'],
      techtags: ['React JS', 'Next.js', 'AWS', 'TypeScript'],
      service_slogan: 'Web con diseño moderno y multilenguaje.',
      description:
        'Sitio web de empresa minera SMRL ALR. Cuenta con todas las secciones requeridas por el cliente, diseño moderno, uso de tecnologías modernas de desarrollo, características internacionales - multilenguaje, además de servicios backend de contacto por email.',
      hero_image: 'images/projects/web/showcaseALR2.png',
      card_image: 'images/projects/web/showcaseALR2.png',
      logo: 'images/projects/logos/alr-logo.png',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'En Hexagon Studio, tuvimos la oportunidad de colaborar con SMRL ALR, una destacada empresa minera que necesitaba una presencia digital renovada. SMRL ALR, conocida por su liderazgo en el sector minero, buscaba un sitio web que reflejara su innovación y alcance global. Este proyecto nos permitió combinar nuestra experiencia en desarrollo web con la visión de SMRL ALR, creando una plataforma digital moderna y efectiva que se alinea con su prestigio en la industria.',
      solution:
        'Para SMRL ALR, desarrollamos un sitio web integral que aborda todas sus necesidades específicas. Creamos un diseño contemporáneo y atractivo que comunica la profesionalidad de la empresa minera. Incorporamos tecnologías avanzadas para asegurar un rendimiento óptimo y una experiencia de usuario fluida. El sitio incluye funcionalidades multilenguaje para atender a una audiencia global, facilitando el acceso a la información en varios idiomas. Además, implementamos servicios backend eficientes para el contacto por email y optimizamos el dominio y hosting para garantizar una carga rápida y una disponibilidad constante. Esta solución completa redefine la presencia digital de SMRL ALR, destacando su innovación y alcance en el sector minero.',
    },
    {
      slug: 'alr_reports',
      company_name: 'Reportes ALR',
      link_web: '',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: ['React JS', 'Next.js', 'AWS'],
      service_slogan:
        'Datos integrados, gráficos dinámicos y reportes precisos.',
      description:
        'Aplicativo web de reportes, dashboards y monitoreo de métricas de empresa minera SMRL ALR.',
      hero_image: 'images/projects/web/showcaseREPORTESALR3.png',
      card_image: 'images/projects/web/showcaseREPORTESALR3.png',
      logo: 'images/projects/logos/alr-logo.png',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'En Hexagon Studio, tuvimos la oportunidad de colaborar con SMRL ALR, una destacada empresa minera, para transformar su gestión de datos a través de un sitio web innovador. SMRL ALR necesitaba una solución que no solo presentara información sobre su producción, sino que también facilitara la visualización dinámica de datos. Este proyecto fue una excelente ocasión para aplicar nuestra experiencia en desarrollo web y gestión de datos, creando una herramienta poderosa y eficiente para el análisis y la toma de decisiones.',
      solution:
        'Desarrollamos una web a medida para SMRL ALR que optimiza la gestión de datos y la presentación de información clave. Implementamos un sistema que carga datos desde archivos Excel a una base de datos centralizada, facilitando la actualización y el manejo de la información. La web incluye funcionalidades para generar gráficos estadísticos y reportes generales sobre la producción, ofreciendo a SMRL ALR una visión clara y detallada de su desempeño. Utilizamos tecnologías avanzadas para asegurar un rendimiento óptimo y una experiencia de usuario fluida. Esta solución mejora la eficiencia en la gestión de datos y proporciona herramientas analíticas valiosas para decisiones estratégicas en la empresa.',
    },
    {
      slug: 'amarante',
      company_name: 'AMARANTE GROUP',
      link_web: '',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: ['React JS', 'Next.js', 'AWS'],
      service_slogan: 'Landing de presencia digital',
      description:
        'Nos apasiona ayudar a las marcas con propósito a ganar en Internet y aumentar su impacto positivo.',
      hero_image: 'images/projects/web/showcaseAMARANTE2.png',
      card_image: 'images/projects/web/showcaseAMARANTE2.png',
      logo: 'images/projects/logos/amarante-logo.png',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'En Hexagon Studio, colaboramos con Amarante Group para llevar su presencia digital al siguiente nivel. Nuestro equipo se dedicó a crear un sitio web que refleja la elegancia y profesionalismo de Amarante Group, combinando diseño moderno con la última tecnología para ofrecer una experiencia de usuario excepcional.',
      solution:
        'Desarrollamos un sitio web personalizado para Amarante Group que incluye un diseño atractivo y funcional, tecnologías avanzadas para un rendimiento óptimo y soporte multilenguaje. Nuestra solución garantiza una plataforma digital robusta y eficiente, alineada con los objetivos de Amarante Group y destacando en el mercado.',
    },
    {
      slug: 'lusitano',
      company_name: 'LUSITANO MARITIME',
      link_web: '',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: ['React JS', 'Next.js', 'AWS'],
      service_slogan: 'Presencia digital moderna para el sector marítimo.',
      description:
        'Nos apasiona ayudar a las marcas con propósito a ganar en Internet y aumentar su impacto positivo.',
      hero_image: 'images/projects/web/showcaseLUSITANO2.png',
      card_image: 'images/projects/web/showcaseLUSITANO2.png',
      logo: 'images/projects/logos/lusitano-logo.png',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'En Hexagon Studio, creamos una landing page moderna y profesional para Lusitano Maritime, diseñada para destacar su presencia en el sector marítimo. La página refleja el compromiso de Lusitano Maritime con la calidad y la excelencia en sus operaciones.',
      solution:
        'Desarrollamos una landing page atractiva y funcional que presenta de manera clara los servicios y la propuesta de valor de Lusitano Maritime. Con un diseño intuitivo y gráficos informativos, la página proporciona una experiencia de usuario fluida y efectiva, ayudando a captar la atención de clientes potenciales y socios estratégicos.',
    },
  ];
  return {
    props: {
      imageProps: [
        {
          ...illustrationHome.img,
          blurDataURL: illustrationHome.base64,
        },
        {
          ...cubosHome.img,
          blurDataURL: cubosHome.base64,
        },
      ],
      projects: projects,
    },
  };
};

export default index;

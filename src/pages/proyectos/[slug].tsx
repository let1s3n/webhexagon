import ProyectoInterno from '@/components/templates/ProyectoInterno/proyectoInterno';
import { projectsProps } from '@/utils/types/generalProps';
import { GetStaticPaths, GetStaticProps } from 'next';

const proyectoInterno = ({ projects }: projectsProps) => {
  return <ProyectoInterno projects={projects} />;
};

export default proyectoInterno;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = [
    {
      slug: 'project_alr',
      company_name: 'SMRL ALR',
      project_types: ['WEB'],
      year: '2023',
      services: [
        'Research & Strategy',
        'Brand Identity',
        'Digital Design',
        'Multilenguaje',
      ],
      techtools: ['React JS', 'Next.js', 'AWS', 'TypeScript'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Sitio web de empresa minera SMRL ALR. Cuenta con todas las secciones requeridas por el cliente, diseño moderno, uso de tecnologías modernas de desarrollo, características internacionales - multilenguaje, además de servicios backend de contacto por email.',
      hero_image: 'images/home/projects/web/showcaseALR2.png',
      card_image: 'images/home/projects/web/showcaseALR2.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
    {
      slug: 'project_alr_reports',
      company_name: 'Reportes ALR',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Aplicativo web de reportes, dashboards y monitoreo de métricas de empresa minera SMRL ALR.',
      hero_image: 'images/home/projects/web/showcaseREPORTESALR3.png',
      card_image: 'images/home/projects/web/showcaseREPORTESALR3.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
    {
      slug: 'project_amarante',
      company_name: 'AMARANTE GROUP',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Nos apasiona ayudar a las marcas con propósito a ganar en Internet y aumentar su impacto positivo.',
      hero_image: 'images/home/projects/web/showcaseAMARANTE2.png',
      card_image: 'images/home/projects/web/showcaseAMARANTE2.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
    {
      slug: 'project_lusitano',
      company_name: 'LUSITANO MARITIME',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Nos apasiona ayudar a las marcas con propósito a ganar en Internet y aumentar su impacto positivo.',
      hero_image: 'images/home/projects/web/showcaseLUSITANO2.png',
      card_image: 'images/home/projects/web/showcaseLUSITANO2.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
  ];
  const projectSlug = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths: projectSlug,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = [
    {
      slug: 'project_alr',
      company_name: 'SMRL ALR',
      project_types: ['WEB'],
      year: '2023',
      services: [
        'Research & Strategy',
        'Brand Identity',
        'Digital Design',
        'Multilenguaje',
      ],
      techtools: ['React JS', 'Next.js', 'AWS', 'TypeScript'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Sitio web de empresa minera SMRL ALR. Cuenta con todas las secciones requeridas por el cliente, diseño moderno, uso de tecnologías modernas de desarrollo, características internacionales - multilenguaje, además de servicios backend de contacto por email.',
      hero_image: 'images/home/projects/web/showcaseALR2.png',
      card_image: 'images/home/projects/web/showcaseALR2.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
    {
      slug: 'project_alr_reports',
      company_name: 'Reportes ALR',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Aplicativo web de reportes, dashboards y monitoreo de métricas de empresa minera SMRL ALR.',
      hero_image: 'images/home/projects/web/showcaseREPORTESALR3.png',
      card_image: 'images/home/projects/web/showcaseREPORTESALR3.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
    {
      slug: 'project_amarante',
      company_name: 'AMARANTE GROUP',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Nos apasiona ayudar a las marcas con propósito a ganar en Internet y aumentar su impacto positivo.',
      hero_image: 'images/home/projects/web/showcaseAMARANTE2.png',
      card_image: 'images/home/projects/web/showcaseAMARANTE2.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
    {
      slug: 'project_lusitano',
      company_name: 'LUSITANO MARITIME',
      project_types: ['WEB'],
      year: '2023',
      services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
      techtools: ['React JS', 'Next.js', 'AWS'],
      techtags: [
        'web',
        'HTML5',
        'javascript',
        'Android',
        'HTML5',
        'javascript',
        'Android',
      ],
      description:
        'Nos apasiona ayudar a las marcas con propósito a ganar en Internet y aumentar su impacto positivo.',
      hero_image: 'images/home/projects/web/showcaseLUSITANO2.png',
      card_image: 'images/home/projects/web/showcaseLUSITANO2.png',
      logo: 'logo 1',
      galery: ['name_1', 'name_2', 'name_3'],
      history:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      solution:
        'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
    },
  ];
  return {
    props: {
      projects: projects,
    },
  };
};

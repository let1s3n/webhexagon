import Home from '@/components/templates/Home/home';
import { imageProps, projectsProps } from '@/utils/types/generalProps';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPlaiceholder } from 'plaiceholder';

const index = ({ imageProps, projects }: imageProps & projectsProps) => {
  return (
    <>
      <Head>
        <title>Hexagon Studio</title>
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
      tecktools: ['React JS', 'Next.js', 'AWS'],
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
      tecktools: ['React JS', 'Next.js', 'AWS'],
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
      tecktools: ['React JS', 'Next.js', 'AWS'],
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

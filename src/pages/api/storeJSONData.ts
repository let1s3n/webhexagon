// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  projects: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    projects: [
      {
        company_name: 'SMRL ALR',
        project_types: ['WEB', 'Android'],
        // summary_project_type: ['web'],
        services: ['Research & Strategy', 'Brand Identity', 'Digital Design'],
        tecktools: ['React JS', 'Next.js', 'AWS', 'TypeScript'],
        description:
          'HOLA Sitio web de empresa minera SMRL ALR. Cuenta con todas las secciones requeridas por el cliente, diseño moderno, uso de tecnologías modernas de desarrollo, características internacionales - multilenguaje, además de servicios backend de contacto por email.',
        hero_image: 'images/home/projects/web/showcaseLUSITANO2.png',
        logo: 'logo 1',
        galery: ['name_1', 'name_2', 'name_3'],
        history:
          'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
        solution:
          'Lorem ipsum dolor sit amet consectetur. Ipsum vulputate integer suspendisse ut suspendisse dignissim sit mauris. Pulvinar cursus aliquet consequat nunc dui sed lorem. Placerat felis gravida quam iaculis euismod neque in. Risus suscipit mattis id ultricies eu nec felis. Ornare varius velit purus vulputate in cursus erat.',
      },
    ],
  });
}

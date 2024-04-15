import ProyectoInterno from '@/components/templates/ProyectoInterno/proyectoInterno';
import { selectedProjectContext } from '@/pages/_app';
import { useContext } from 'react';

const proyectoInterno = () => {
  const selectedProjectData = useContext(selectedProjectContext);
  return <ProyectoInterno selectedProjectData={selectedProjectData} />;
};

export default proyectoInterno;

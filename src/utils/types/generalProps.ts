export interface imageProps {
  imageProps: { src: string; blurDataURL: string }[];
}

export interface projectsProps {
  projects: {
    slug: string;
    company_name: string;
    project_types: string[];
    year: string;
    services: string[];
    techtools: string[];
    techtags: string[];
    service_slogan: string;
    description: string;
    hero_image: string;
    card_image: string;
    logo: string;
    galery: string[];
    history: string;
    solution: string;
  }[];
}

export interface projectProps {
  slug: string;
  company_name: string;
  project_types: string[];
  year: string;
  services: string[];
  techtools: string[];
  techtags: string[];
  service_slogan: string;
  description: string;
  hero_image: string;
  card_image: string;
  logo: string;
  galery: string[];
  history: string;
  solution: string;
}

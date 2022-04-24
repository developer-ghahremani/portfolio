interface Project {
  id: number;
  jobTitle: { en: string; fa: string };
  title: { en: string; fa: string };
  from: Date;
  to?: Date;
  // shortDescription: { en: string; fa: string };
  description: { en: string; fa: string };
  companyId: number;
  images: { image: string; title?: string }[];
}

export default Project;

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  inquiryType: 'project' | 'collaboration' | 'other';
}

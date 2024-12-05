export interface Project {
  id: string;
  title: string;
  duration: string;
  category: 'Journalism' | 'Research' | 'Social Design';
  description: string;
  imageUrl: string;
  content?: string;
  links?: Array<{ url: string; label: string }>;
}

export type Category = Project['category'];
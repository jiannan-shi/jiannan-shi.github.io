import React from 'react';
import { Category } from '../types';
import { projects } from '../data/projects';
import ProjectGrid from '../components/ProjectGrid';

interface CategoryPageProps {
  category: Category;
}

const categoryInfo = {
  Journalism: {
    title: 'Journalism',
    description: 'Bridging cultural and digital divides with sociology-informed humanistic storytelling, focusing on the social side of tech, global China, and civil society.',
    specialties: 'Multimedia storytelling, ethnographic reporting, cross-cultural dialogue, and OSINT investigations.'
  },
  Research: {
    title: 'Academic & Applied Research',
    description: 'From examining urban space transformation in Shanghai to exploring algorithmic normativity affecting LGBTQ+ creators in China, I am interested in how public spaces and civil resilience is built with wisdom, workaround, and manipulations.',
    specialties: 'Ethnography, digital methods, participatory design, mixed-methods, UX research.'
  },
  'Social Design': {
    title: 'Social Design',
    description: 'I facilitate + design collaborative community-driven solutions that address local challenges while building capacity for long-term social change. I call myself a Freire-inspired social designer — a key outsider, facilitator — helping to collaborate on real problems that arise spontaneously in the community, rather than the fake problems that the oppressive, powerful dominant perceives as the problem.',
    specialties: 'Participatory design, facilitation, diversity & inclusion, community engagement, co-creation, and social innovation.'
  }
};

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const info = categoryInfo[category];
  const categoryProjects = projects.filter(project => project.category === category);

  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl space-y-12 fade-in">
          <header className="space-y-8">
            <h1 className="heading-xl">{info.title}</h1>
            <div className="space-y-6">
              <p className="text-xl text-gray-600">{info.description}</p>
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Specialties</h2>
                <p className="text-body">{info.specialties}</p>
              </div>
            </div>
          </header>

          <div className="space-y-12">
            <h2 className="heading-lg">Projects</h2>
            <ProjectGrid projects={categoryProjects} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;

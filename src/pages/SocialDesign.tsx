import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const categories = ['Participatory Design', 'Community Projects', 'Urban Planning', 'Social Innovation'];

const socialDesignItems = [
  {
    id: '1',
    title: 'Community-Led Urban Planning Initiative',
    date: 'March 2024',
    description: 'Facilitating participatory design workshops for neighborhood development planning.',
    category: ['Participatory Design', 'Urban Planning'],
    thumbnail: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
    badges: ['Active Project'],
    content: {
      fullDescription: `A collaborative initiative bringing together community members, urban planners, and local organizations to develop inclusive neighborhood development strategies. Through participatory design workshops and community engagement sessions, we're creating sustainable solutions that reflect local needs and aspirations.`,
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200',
          caption: 'Community design workshop'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200',
          caption: 'Neighborhood planning session'
        }
      ],
      links: [
        {
          text: 'Project Overview',
          url: '#'
        },
        {
          text: 'Workshop Materials',
          url: '#'
        }
      ]
    }
  },
  {
    id: '2',
    title: 'Social Innovation Lab',
    date: 'February 2024',
    description: 'Creating collaborative spaces for community-driven social innovation projects.',
    category: ['Social Innovation', 'Community Projects'],
    thumbnail: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=800',
    content: {
      fullDescription: `The Social Innovation Lab is a platform for community members to develop and implement solutions to local challenges. Through facilitated workshops, mentorship, and resource sharing, we support grassroots initiatives that promote social change and community development.`,
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=1200',
          caption: 'Innovation workshop session'
        }
      ],
      links: [
        {
          text: 'Lab Projects',
          url: '#'
        },
        {
          text: 'Get Involved',
          url: '#'
        }
      ]
    }
  }
];

const SocialDesign: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="heading-xl mb-6">Social Design</h1>
          <p className="text-body">
            Creating collaborative design solutions that empower communities and facilitate 
            meaningful social change through participatory processes and innovative approaches.
          </p>
        </div>

        <PortfolioGrid
          items={socialDesignItems}
          categories={categories}
        />
      </div>
    </main>
  );
};

export default SocialDesign;
import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const categories = ['Urban Resilience', 'Digital Democracy', 'Community Development', 'Academic Publications'];

const researchItems = [
  {
    id: '1',
    title: 'Urban Resilience in NYC Communities',
    date: 'March 2024',
    description: 'Research project examining community-led resilience strategies in New York City neighborhoods.',
    category: ['Urban Resilience', 'Community Development'],
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800',
    badges: ['Ongoing'],
    content: {
      fullDescription: `A comprehensive study exploring how urban communities develop and implement resilience strategies. This research focuses on grassroots initiatives, community organizing, and the role of social networks in building resilient neighborhoods.`,
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=1200',
          caption: 'Community resilience workshop'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200',
          caption: 'Neighborhood planning session'
        }
      ],
      links: [
        {
          text: 'Research Abstract',
          url: '#'
        },
        {
          text: 'Project Updates',
          url: '#'
        }
      ]
    }
  },
  {
    id: '2',
    title: 'Digital Tools in Community Organizing',
    date: 'February 2024',
    description: 'Examining the impact of digital platforms on community organizing and civic engagement.',
    category: ['Digital Democracy', 'Academic Publications'],
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    content: {
      fullDescription: `This research investigates how digital tools and platforms are transforming community organizing practices. Through case studies and participatory research, we explore the effectiveness of various digital strategies in mobilizing communities and facilitating civic engagement.`,
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
          caption: 'Digital democracy workshop'
        }
      ],
      links: [
        {
          text: 'Publication',
          url: '#'
        },
        {
          text: 'Research Data',
          url: '#'
        }
      ]
    }
  }
];

const Research: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="heading-xl mb-6">Research</h1>
          <p className="text-body">
            Conducting academic research on urban resilience, digital democracy, and 
            community development through participatory methodologies and collaborative approaches.
          </p>
        </div>

        <PortfolioGrid
          items={researchItems}
          categories={categories}
        />
      </div>
    </main>
  );
};

export default Research;
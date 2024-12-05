import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const categories = ['Feature Stories', 'Investigations', 'Data Journalism', 'Multimedia'];

const journalismItems = [
  {
    id: '1',
    title: 'The Hidden Cost of Urban Development',
    date: 'March 2024',
    description: 'An in-depth investigation into the social impact of rapid urban development in NYC neighborhoods.',
    category: ['Investigations', 'Data Journalism'],
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    badges: ['Featured'],
    content: {
      fullDescription: `A comprehensive investigation into how urban development affects local communities...`,
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
          caption: 'New developments in downtown Manhattan'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200',
          caption: 'Local community meeting'
        }
      ],
      links: [
        {
          text: 'Read the full story',
          url: '#'
        },
        {
          text: 'View the data',
          url: '#'
        }
      ]
    }
  },
  {
    id: '2',
    title: 'Digital Democracy in Action',
    date: 'February 2024',
    description: 'Exploring how technology is reshaping civic engagement and community organizing.',
    category: ['Feature Stories', 'Multimedia'],
    thumbnail: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
    content: {
      fullDescription: `An exploration of how digital tools are transforming community organizing...`,
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200',
          caption: 'Community organizers using digital tools'
        }
      ],
      links: [
        {
          text: 'Read the full story',
          url: '#'
        }
      ]
    }
  }
];

const Journalism: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h1 className="heading-xl mb-6">Journalism</h1>
          <p className="text-body">
            Exploring social issues through data-driven journalism, with a focus on 
            urban development, community stories, and the impact of technology on society.
          </p>
        </div>

        <PortfolioGrid
          items={journalismItems}
          categories={categories}
        />
      </div>
    </main>
  );
};

export default Journalism;
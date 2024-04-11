import React from 'react';
import Card from './Component/Card';
import { HeartIcon } from '@heroicons/react/outline';
import { BiSearch } from 'react-icons/bi';

const App = () => {
  const pujaData = [
    {
      title: 'Ganesha Puja',
      imageUrl: 'https://images.unsplash.com/photo-1603387834688-8b0d6dcde141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'Perform this puja to seek the blessings of Lord Ganesha:\n' +
        '1. Begin with Ganesh Vandana.\n' +
        '2. Offer modaks and favorite sweets.\n' +
        '3. Recite Ganesh Mantra.\n' +
        '4. Conclude with Aarti.'
    },
    {
      title: 'Ganesh Pooja',
      imageUrl: 'https://images.unsplash.com/photo-1613422954567-8eade6e47038?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
      'Embrace Ganesh Puja with reverence:\n' +
      '1. Install Lord Ganesh\'s idol.\n' +
      '2. Present flowers and prasad.\n' +
      '3. Recite Ganesh Chalisa.\n' +
      '4. Conduct the Ganesh Sandhi Puja during the auspicious days of worship.'

    },{
      title: 'Laxmi pooja',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1674898515661-7dfe776368b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
      "Observe Laxmi Puja with reverence:\n" +
      "1. Set up the Laxmi idol.\n" +
      "2. Present flowers and prasad.\n" +
      "3. Recite Laxmi Chalisa.\n" +
      "4. Conduct Sandhi Puja during Navaratri."
    }

    // Add more puja data as needed
  ];

  const handleCardClick = (title) => {
    const searchQuery = encodeURIComponent(title + ' Importance');
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 to-indigo-900 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Explore Spiritual Pooja <HeartIcon className="h-8 w-8 text-red-400 inline" />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pujaData.map((puja, index) => (
            <Card
              key={index}
              title={puja.title}
              imageUrl={puja.imageUrl}
              description={puja.description}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <footer className="text-gray-300 text-center p-4">
        Powered by <BiSearch className="inline h-6 w-6 text-blue-400" /> <strong>Divine Pooja</strong>
      </footer>
    </div>
  );
};

export default App;

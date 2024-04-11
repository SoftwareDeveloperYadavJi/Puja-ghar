import React from 'react';

const Card = ({ title, description, imageUrl, onClick }) => {
  // Split the description into an array of 4 points
  const descriptionPoints = description.split('\n');

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg cursor-pointer m-4 bg-white">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <ul className="text-gray-700 text-base list-disc pl-6">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => onClick(title)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;


import React from 'react';

interface PlaceholderPageProps {
  title: string;
  content: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, content }) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">{title}</h1>
          <div className="prose lg:prose-xl text-gray-700">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;

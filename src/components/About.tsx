import React from 'react';
import { Users, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold premium-text-gradient text-center mb-8">
          About ContentPro
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          ContentPro is your all-in-one solution for content creation, planning, and analytics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'For Creators', icon: Users, description: 'Streamline your content creation process and boost productivity.' },
            { title: 'Powerful Tools', icon: Zap, description: 'Access analytics, scheduling, and idea generation tools.' },
            { title: 'Global Reach', icon: Globe, description: 'Optimize your content for audiences around the world.' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md premium-border">
              <feature.icon className="h-12 w-12 text-premium-start mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
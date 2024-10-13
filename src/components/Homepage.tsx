import React from 'react';
import { ArrowRight } from 'lucide-react';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-extrabold premium-text-gradient sm:text-5xl">
          Welcome to ContentPro
        </h1>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Streamline your content creation process and boost your online presence.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <a
              href="/signup"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white premium-gradient hover:opacity-90 md:py-4 md:text-lg md:px-10"
            >
              Get Started
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/login"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-premium-start bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
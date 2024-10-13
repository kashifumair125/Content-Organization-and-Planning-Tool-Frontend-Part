import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md premium-border">
        <h1 className="text-3xl font-bold premium-text-gradient mb-6">Terms of Service</h1>
        <div className="space-y-4 text-gray-600">
          <p>
            By accessing and using ContentPro, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on ContentPro's website for personal, non-commercial transitory viewing only.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Disclaimer</h2>
          <p>
            The materials on ContentPro's website are provided on an 'as is' basis. ContentPro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Limitations</h2>
          <p>
            In no event shall ContentPro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ContentPro's website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
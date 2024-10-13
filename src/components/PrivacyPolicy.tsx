import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md premium-border">
        <h1 className="text-3xl font-bold premium-text-gradient mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-gray-600">
          <p>
            Your privacy is important to us. It is ContentPro's policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Use of Information</h2>
          <p>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
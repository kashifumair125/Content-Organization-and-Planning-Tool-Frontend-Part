import React from 'react';
import { Calendar, BarChart2, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Content Calendar Preview */}
      <div className="bg-white p-6 rounded-lg shadow-md premium-border">
        <h2 className="text-lg font-semibold mb-4 flex items-center premium-text-gradient">
          <Calendar className="w-5 h-5 mr-2" />
          Upcoming Content
        </h2>
        <ul className="space-y-3">
          {['Instagram Post', 'YouTube Video', 'Twitter Thread'].map((item, index) => (
            <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="font-medium">{item}</span>
              <span className="text-sm text-indigo-600">In 2 days</span>
            </li>
          ))}
        </ul>
        <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block font-medium">View Full Calendar</a>
      </div>

      {/* Analytics Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md premium-border">
        <h2 className="text-lg font-semibold mb-4 flex items-center premium-text-gradient">
          <BarChart2 className="w-5 h-5 mr-2" />
          Performance Overview
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-500 mb-1">Total Engagement</p>
            <p className="text-2xl font-bold text-indigo-600">24,521</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-500 mb-1">Avg. Engagement Rate</p>
            <p className="text-2xl font-bold text-indigo-600">3.2%</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-500 mb-1">Top Performing Post</p>
            <p className="text-md font-medium">Instagram Reel: "5 Tips for Productivity"</p>
          </div>
        </div>
        <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block font-medium">View Detailed Analytics</a>
      </div>

      {/* Reminders and Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-md premium-border">
        <h2 className="text-lg font-semibold mb-4 flex items-center premium-text-gradient">
          <AlertCircle className="w-5 h-5 mr-2" />
          Reminders & Alerts
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center p-2 bg-yellow-50 rounded text-yellow-700">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>YouTube video due in 24 hours</span>
          </li>
          <li className="flex items-center p-2 bg-green-50 rounded text-green-700">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Instagram post performing 20% above average</span>
          </li>
          <li className="flex items-center p-2 bg-blue-50 rounded text-blue-700">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>New trending hashtag: #ContentCreatorLife</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
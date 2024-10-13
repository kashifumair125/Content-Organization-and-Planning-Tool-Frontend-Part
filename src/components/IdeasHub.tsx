import React from 'react';
import { Lightbulb, Plus, Tag, Calendar } from 'lucide-react';

const IdeasHub: React.FC = () => {
  const ideas = [
    { id: 1, title: '10 Productivity Hacks', platform: 'YouTube', category: 'Lifestyle', dueDate: '2023-05-15' },
    { id: 2, title: 'Instagram Story Series: A Day in the Life', platform: 'Instagram', category: 'Behind the Scenes', dueDate: '2023-05-20' },
    { id: 3, title: 'Twitter Thread: Social Media Tips', platform: 'Twitter', category: 'Social Media', dueDate: '2023-05-25' },
  ];

  const trendingTopics = [
    '#ContentCreatorLife',
    '#ProductivityTips',
    '#SocialMediaMarketing',
    '#CreativeProcess',
    '#WorkFromHome',
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 premium-border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center premium-text-gradient">
            <Lightbulb className="w-6 h-6 mr-2" />
            Content Ideas
          </h2>
          <button className="px-4 py-2 premium-gradient text-white rounded-md hover:opacity-90 transition-opacity duration-200 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Idea
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ideas.map((idea) => (
                <tr key={idea.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{idea.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{idea.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {idea.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{idea.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                    <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 premium-border">
        <h3 className="text-xl font-semibold mb-4 flex items-center premium-text-gradient">
          <Tag className="w-5 h-5 mr-2" />
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 premium-border">
        <h3 className="text-xl font-semibold mb-4 flex items-center premium-text-gradient">
          <Calendar className="w-5 h-5 mr-2" />
          Content Calendar
        </h3>
        <p className="text-gray-600 mb-4">Quickly add your ideas to the content calendar to start planning your content strategy.</p>
        <button className="px-4 py-2 premium-gradient text-white rounded-md hover:opacity-90 transition-opacity duration-200 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add to Calendar
        </button>
      </div>
    </div>
  );
};

export default IdeasHub;
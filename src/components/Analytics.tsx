import React from 'react';
import { BarChart2, TrendingUp, Users, Eye } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Followers', value: '125,430', icon: Users, change: '+5.3%' },
          { title: 'Engagement Rate', value: '3.2%', icon: TrendingUp, change: '+0.8%' },
          { title: 'Total Views', value: '1.2M', icon: Eye, change: '+12.7%' },
          { title: 'Avg. Watch Time', value: '4:32', icon: BarChart2, change: '-0.5%' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 premium-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold premium-text-gradient">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-indigo-600" />
            </div>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 premium-border">
        <h3 className="text-xl font-semibold mb-4 premium-text-gradient">Performance by Platform</h3>
        <div className="space-y-4">
          {[
            { platform: 'Instagram', followers: '80K', engagement: '4.5%', color: 'bg-pink-600' },
            { platform: 'YouTube', followers: '35K', engagement: '2.8%', color: 'bg-red-600' },
            { platform: 'Twitter', followers: '10.4K', engagement: '1.9%', color: 'bg-blue-400' },
          ].map((platform, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-2 h-2 rounded-full ${platform.color} mr-2`}></div>
              <span className="w-24 font-medium">{platform.platform}</span>
              <div className="flex-grow bg-gray-200 rounded-full h-2">
                <div
                  className={`${platform.color} h-2 rounded-full`}
                  style={{ width: platform.engagement }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-600">{platform.engagement}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 premium-border">
        <h3 className="text-xl font-semibold mb-4 premium-text-gradient">Top Performing Content</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { content: '5 Tips for Productivity', platform: 'Instagram', views: '250K', engagement: '15.2K' },
                { content: 'How to Start a YouTube Channel', platform: 'YouTube', views: '100K', engagement: '5.8K' },
                { content: 'Social Media Strategy Thread', platform: 'Twitter', views: '80K', engagement: '3.2K' },
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{item.content}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.engagement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
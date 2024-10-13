import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

const ContentCalendar: React.FC = () => {
  // Mock data for calendar events
  const events = [
    { id: 1, title: 'Instagram Post', date: '2023-04-15', platform: 'instagram' },
    { id: 2, title: 'YouTube Video', date: '2023-04-17', platform: 'youtube' },
    { id: 3, title: 'Twitter Thread', date: '2023-04-20', platform: 'twitter' },
  ];

  const platformColors: { [key: string]: string } = {
    instagram: 'bg-pink-100 text-pink-800 border-pink-300',
    youtube: 'bg-red-100 text-red-800 border-red-300',
    twitter: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 premium-border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center premium-text-gradient">
          <CalendarIcon className="w-6 h-6 mr-2" />
          Content Calendar
        </h2>
        <div>
          <button className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200">
            Week
          </button>
          <button className="px-4 py-2 premium-gradient text-white rounded hover:opacity-90 transition-opacity duration-200">
            Month
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">{day}</div>
        ))}
        {Array.from({ length: 35 }).map((_, index) => (
          <div key={index} className="border rounded-lg p-2 h-32 overflow-y-auto hover:shadow-md transition-shadow duration-200">
            <div className="text-right text-gray-500 mb-2">{index + 1}</div>
            {events.filter((event) => new Date(event.date).getDate() === index + 1).map((event) => (
              <div
                key={event.id}
                className={`${platformColors[event.platform]} p-1 mb-1 rounded text-sm border`}
              >
                {event.title}
              </div>
            ))}
            <button className="w-full mt-2 flex items-center justify-center text-gray-500 hover:text-indigo-600 transition-colors duration-200">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCalendar;
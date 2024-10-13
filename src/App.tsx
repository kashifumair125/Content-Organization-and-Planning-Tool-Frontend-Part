import React, { useState } from 'react';
import { Calendar, Layout, Sidebar, Home, PlusCircle, Settings, Lightbulb, BarChart2 } from 'lucide-react';
import Dashboard from './components/Dashboard';
import ContentCalendar from './components/ContentCalendar';
import Analytics from './components/Analytics';
import IdeasHub from './components/IdeasHub';
import UserSettings from './components/UserSettings';
import Homepage from './components/Homepage';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('homepage');

  const renderContent = () => {
    switch (activeTab) {
      case 'homepage':
        return <Homepage />;
      case 'about':
        return <About />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'forgot-password':
        return <ForgotPassword />;
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <ContentCalendar />;
      case 'analytics':
        return <Analytics />;
      case 'ideas':
        return <IdeasHub />;
      case 'settings':
        return <UserSettings />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 border-b premium-gradient">
          <Layout className="w-8 h-8 text-white" />
          <span className="ml-2 text-xl font-semibold text-white">ContentPro</span>
        </div>
        <nav className="mt-6">
          {[
            { name: 'Home', icon: Home, id: 'homepage' },
            { name: 'About', icon: Lightbulb, id: 'about' },
            { name: 'Dashboard', icon: BarChart2, id: 'dashboard' },
            { name: 'Calendar', icon: Calendar, id: 'calendar' },
            { name: 'Ideas Hub', icon: Lightbulb, id: 'ideas' },
            { name: 'Settings', icon: Settings, id: 'settings' },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${
                activeTab === item.id ? 'bg-gray-100 text-gray-800 border-r-4 border-indigo-500' : ''
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold premium-text-gradient">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            {activeTab !== 'homepage' && activeTab !== 'about' && activeTab !== 'privacy' && activeTab !== 'terms' && activeTab !== 'login' && activeTab !== 'signup' && activeTab !== 'forgot-password' && (
              <button className="flex items-center px-4 py-2 premium-gradient text-white rounded-md hover:opacity-90 transition-opacity duration-200 premium-shadow">
                <PlusCircle className="w-5 h-5 mr-2" />
                Create New Post
              </button>
            )}
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
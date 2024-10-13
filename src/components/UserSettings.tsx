import React from 'react';
import { User, Bell, Lock, CreditCard } from 'lucide-react';

const UserSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6 premium-border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center premium-text-gradient">
          <User className="w-6 h-6 mr-2" />
          Profile Settings
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea id="bio" name="bio" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white premium-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 premium-border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center premium-text-gradient">
          <Bell className="w-6 h-6 mr-2" />
          Notification Settings
        </h2>
        <div className="space-y-4">
          {['Email Notifications', 'Push Notifications', 'SMS Notifications'].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700">{item}</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 premium-border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center premium-text-gradient">
          <Lock className="w-6 h-6 mr-2" />
          Security
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
            <input type="password" id="currentPassword" name="currentPassword" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <input type="password" id="newPassword" name="newPassword" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white premium-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Change Password
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 premium-border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center premium-text-gradient">
          <CreditCard className="w-6 h-6 mr-2" />
          Subscription
        </h2>
        <div className="mb-4">
          <p className="text-gray-600">Current Plan: <span className="font-semibold">Free</span></p>
          <p className="text-gray-600">4 posts per week</p>
        </div>
        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm fonticient rounded-md text-white premium-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
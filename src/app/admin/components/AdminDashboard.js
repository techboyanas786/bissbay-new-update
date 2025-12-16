"use client";
import React, { useState } from 'react';
import { 
  FileText, 
  LogOut,
  Key
} from 'lucide-react';
import BissbayLogo from "../../../components/bissbayLogo.jsx";
import BlogManagement from './BlogManagement';
import PasswordManager from './PasswordManager';

const AdminDashboard = ({ onLogout, currentUser }) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('blogs');

  return (
    <div className="min-h-screen font-quicksand relative bg-gray-50">
      {/* Sidebar - copied from blog page */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-300 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
          isSidebarHovered ? "w-[280px]" : "w-[70px]"
        }`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <div className="p-4 h-full flex flex-col">
          <nav className="space-y-1 flex-1 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {/* Admin Header */}
            <div className={`pb-4 border-b border-gray-200 mb-4 transition-opacity duration-300 delay-150 ${
              isSidebarHovered ? "opacity-100" : "opacity-0"
            }`}>
              <h2 className="text-lg font-bold text-gray-800">Admin Panel</h2>
            </div>

            {/* Blog Management Button */}
            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full text-left flex items-center p-3 rounded-lg transition-all duration-200 group cursor-pointer border-none bg-transparent ${
                activeTab === 'blogs' ? 'bg-orange-50 text-orange-600' : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <FileText
                size={20}
                className={`transition-colors flex-shrink-0 ${
                  activeTab === 'blogs' ? 'text-orange-500' : 'text-gray-500'
                }`}
              />
              <div className={`flex items-center justify-between w-full ml-3 transition-opacity duration-300 delay-150 ${
                isSidebarHovered ? "opacity-100" : "opacity-0"
              }`}>
                <span className={`text-sm font-medium whitespace-nowrap ${
                  activeTab === 'blogs' ? 'text-orange-600' : 'text-gray-600'
                }`}>
                  Blog Management
                </span>
              </div>
            </button>

            {/* Password Management Button */}
            <button
              onClick={() => setActiveTab('password')}
              className={`w-full text-left flex items-center p-3 rounded-lg transition-all duration-200 group cursor-pointer border-none bg-transparent ${
                activeTab === 'password' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <Key
                size={20}
                className={`transition-colors flex-shrink-0 ${
                  activeTab === 'password' ? 'text-blue-500' : 'text-gray-500'
                }`}
              />
              <div className={`flex items-center justify-between w-full ml-3 transition-opacity duration-300 delay-150 ${
                isSidebarHovered ? "opacity-100" : "opacity-0"
              }`}>
                <span className={`text-sm font-medium whitespace-nowrap ${
                  activeTab === 'password' ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  Change Password
                </span>
              </div>
            </button>

            {/* Logout Button */}
            <div className={`pt-4 border-t border-gray-200 mt-4 transition-opacity duration-300 delay-150 ${
              isSidebarHovered ? "opacity-100" : "opacity-0"
            }`}>
              <button
                onClick={onLogout}
                className="w-full text-left flex items-center p-3 rounded-lg transition-all duration-200 group cursor-pointer border-none bg-transparent text-red-600 hover:bg-red-50"
              >
                <LogOut
                  size={20}
                  className="transition-colors flex-shrink-0 text-red-500"
                />
                <div className={`flex items-center justify-between w-full ml-3 transition-opacity duration-300 delay-150 ${
                  isSidebarHovered ? "opacity-100" : "opacity-0"
                }`}>
                  <span className="text-sm font-medium whitespace-nowrap text-red-600">
                    Logout
                  </span>
                </div>
              </button>
            </div>
          </nav>

          {/* Logo at bottom */}
          <div className="mt-8 flex justify-center items-center">
            <div style={{ color: '#374151' }}>
              <BissbayLogo width={80} height={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ease-in-out ${
        isSidebarHovered ? "ml-[280px]" : "ml-[70px]"
      }`}>
        <div className="p-6">
          {activeTab === 'blogs' && <BlogManagement />}
          {activeTab === 'password' && <PasswordManager currentUser={currentUser} />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
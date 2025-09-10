import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Modred</h1>
              <p className="text-gray-400 text-sm">Decentralized IP Protection</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Connected to Ethereum</span>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              0x1234...5678
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
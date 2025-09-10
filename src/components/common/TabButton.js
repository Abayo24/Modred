import React from 'react';

const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
      active 
        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105' 
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-md'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

export default TabButton;
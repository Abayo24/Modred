import React from 'react';

const MonitoringCard = ({ 
  icon: Icon, 
  title, 
  description, 
  status, 
  metric, 
  borderColor, 
  bgColor, 
  iconColor 
}) => {
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'active':
        return 'text-green-300';
      case 'inactive':
        return 'text-red-300';
      case 'pending':
        return 'text-yellow-300';
      default:
        return 'text-blue-300';
    }
  };

  return (
    <div className={`p-6 ${bgColor || 'bg-gray-800'} border ${borderColor || 'border-gray-700'} rounded-xl hover:border-opacity-80 transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${bgColor?.replace('/20', '/30') || 'bg-gray-700'}`}>
          <Icon className={iconColor || 'text-gray-400'} size={24} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Status:</span>
          <span className={`font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        
        {metric && (
          <span className="text-green-300 text-sm font-medium">
            {metric}
          </span>
        )}
      </div>

      {/* Progress indicator for active monitoring */}
      {status?.toLowerCase() === 'active' && (
        <div className="mt-3">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full animate-pulse" style={{width: '75%'}}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonitoringCard;
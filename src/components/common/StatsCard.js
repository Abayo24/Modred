import React from 'react';

const StatsCard = ({ title, value, subtitle, icon: Icon, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-opacity-80 text-white">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <Icon size={32} className="text-white text-opacity-60" />
      </div>
      <p className="text-sm text-white text-opacity-70">{subtitle}</p>
    </div>
  );
};

export default StatsCard;
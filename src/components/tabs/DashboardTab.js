import React from 'react';
import { DollarSign, FileText, AlertTriangle } from 'lucide-react';
import StatsCard from '../common/StatsCard';
import AssetCard from '../common/AssetCard';
import { statsData } from '../../data/dashboardData';

const DashboardTab = ({ registeredAssets }) => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            gradient={stat.gradient}
          />
        ))}
      </div>
      
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Your IP Assets</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {registeredAssets.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
import React from 'react';
import { FileText } from 'lucide-react';

const AssetCard = ({ asset }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <FileText className="text-white" size={20} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{asset.name}</h3>
          <p className="text-gray-400 text-sm">{asset.type}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-white font-semibold">{asset.revenue}</p>
          <p className="text-gray-400 text-sm">{asset.licenses} licenses</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          asset.status === 'Active' 
            ? 'bg-green-900 text-green-300' 
            : 'bg-orange-900 text-orange-300'
        }`}>
          {asset.status}
        </span>
      </div>
    </div>
  );
};

export default AssetCard;
import React from 'react';
import { Eye, Globe, Lock, AlertTriangle } from 'lucide-react';
import MonitoringCard from '../../../../modred-platform/src/components/common/MonitoringCard';
import { monitoringData, recentDetections } from '../../../../modred-platform/src/data/monitoringData';

const MonitorTab = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="text-blue-400" size={28} />
          <h2 className="text-2xl font-bold text-white">IP Monitoring & Detection</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {monitoringData.map((item, index) => (
              <MonitoringCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                status={item.status}
                metric={item.metric}
                borderColor={item.borderColor}
                bgColor={item.bgColor}
                iconColor={item.iconColor}
              />
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Detections</h3>
              <div className="space-y-3">
                {recentDetections.map((detection, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 ${detection.bgColor} border ${detection.borderColor} rounded-lg`}>
                    <div>
                      <p className="text-white font-medium">{detection.title}</p>
                      <p className="text-gray-400 text-sm">{detection.asset}</p>
                    </div>
                    <detection.icon className={detection.iconColor} size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Monitoring Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">98.7%</p>
                  <p className="text-gray-400 text-sm">Detection Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">24/7</p>
                  <p className="text-gray-400 text-sm">Continuous Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorTab;
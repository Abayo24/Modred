import React from 'react';

const DisputeList = ({ disputes }) => {
  const defaultDisputes = [
    {
      id: '1247',
      title: 'Dispute #1247',
      description: 'Unauthorized usage of "Digital Art Collection"',
      status: 'Under Review',
      timeAgo: '2 days ago',
      statusColor: 'bg-yellow-900 text-yellow-300',
      priority: 'High',
      estimatedResolution: '5-7 days'
    },
    {
      id: '1246', 
      title: 'Dispute #1246',
      description: 'License violation claim resolved in your favor',
      status: 'Resolved',
      timeAgo: '1 week ago',
      statusColor: 'bg-green-900 text-green-300',
      priority: 'Medium',
      resolution: 'Infringer ordered to pay $2,500 in damages'
    },
    {
      id: '1245',
      title: 'Dispute #1245', 
      description: 'Plagiarism claim against software code',
      status: 'Evidence Review',
      timeAgo: '4 days ago',
      statusColor: 'bg-blue-900 text-blue-300',
      priority: 'Medium',
      estimatedResolution: '3-5 days'
    }
  ];

  const displayDisputes = disputes || defaultDisputes;

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Resolved':
        return '✅';
      case 'Under Review':
        return '⏳';
      case 'Evidence Review':
        return '🔍';
      default:
        return '📋';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High':
        return 'text-red-400';
      case 'Medium':
        return 'text-yellow-400';
      case 'Low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Active Disputes</h3>
        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
          {displayDisputes.length} total
        </span>
      </div>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {displayDisputes.map(dispute => (
          <div key={dispute.id} className="p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-red-500 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getStatusIcon(dispute.status)}</span>
                <h4 className="text-white font-medium">{dispute.title}</h4>
              </div>
              <span className={`px-3 py-1 ${dispute.statusColor} rounded-full text-xs font-medium`}>
                {dispute.status}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-3">{dispute.description}</p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-xs">
                  {dispute.status === 'Resolved' ? 'Resolved:' : 'Filed:'} {dispute.timeAgo}
                </span>
                {dispute.priority && (
                  <span className={`text-xs font-medium ${getPriorityColor(dispute.priority)}`}>
                    {dispute.priority} Priority
                  </span>
                )}
              </div>
            </div>

            {dispute.estimatedResolution && (
              <div className="mb-3">
                <span className="text-gray-400 text-xs">
                  Est. Resolution: <span className="text-blue-400">{dispute.estimatedResolution}</span>
                </span>
              </div>
            )}

            {dispute.resolution && (
              <div className="mb-3 p-2 bg-green-900/20 border border-green-700 rounded">
                <span className="text-green-300 text-xs">
                  <strong>Resolution:</strong> {dispute.resolution}
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                {dispute.status === 'Resolved' ? 'View Resolution' : 'View Details'}
              </button>
              
              {dispute.status !== 'Resolved' && (
                <button className="text-red-400 hover:text-red-300 text-sm transition-colors">
                  Add Evidence
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {displayDisputes.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-2">🕊️</div>
          <p className="text-gray-400">No disputes filed yet</p>
          <p className="text-gray-500 text-sm">Your IP assets are secure</p>
        </div>
      )}
    </div>
  );
};

export default DisputeList;
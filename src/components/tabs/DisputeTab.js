import React from 'react';
import { Gavel } from 'lucide-react';
import DisputeForm from '../../../../modred-platform/src/components/common/DisputeForm';
import DisputeList from '../../../../modred-platform/src/components/common/DisputeList';
import { disputeTypes, activeDisputes } from '../../../../modred-platform/src/data/disputeData';

const DisputeTab = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Gavel className="text-red-400" size={28} />
          <h2 className="text-2xl font-bold text-white">Dispute Resolution</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <DisputeForm disputeTypes={disputeTypes} />
          <DisputeList disputes={activeDisputes} />
        </div>
      </div>
    </div>
  );
};

export default DisputeTab;
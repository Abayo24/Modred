import React, { useState } from 'react';

const DisputeForm = ({ disputeTypes }) => {
  const [selectedAsset, setSelectedAsset] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [evidence, setEvidence] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle dispute submission logic here
    console.log('Submitting dispute:', {
      asset: selectedAsset,
      type: selectedType,
      evidence: evidence
    });
  };

  const defaultDisputeTypes = [
    'Unauthorized Usage',
    'Improper Registration', 
    'License Violation',
    'Plagiarism'
  ];

  const availableAssets = [
    'Digital Art Collection',
    'Music Track - Synthwave Dreams',
    'Video Content #1',
    'Software Code Repository'
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">File New Dispute</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">IP Asset</label>
          <select 
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            required
          >
            <option value="">Select your IP asset...</option>
            {availableAssets.map(asset => (
              <option key={asset} value={asset}>{asset}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Dispute Type</label>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            required
          >
            <option value="">Select dispute type...</option>
            {(disputeTypes || defaultDisputeTypes).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Evidence & Description</label>
          <textarea
            value={evidence}
            onChange={(e) => setEvidence(e.target.value)}
            placeholder="Provide detailed evidence and description of the infringement..."
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Supporting Files (Optional)</label>
          <input
            type="file"
            multiple
            accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-red-600 file:text-white file:cursor-pointer hover:file:bg-red-700"
          />
          <p className="text-gray-500 text-xs mt-1">Upload screenshots, documents, or other evidence</p>
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedAsset || !selectedType || !evidence.trim()}
        >
          Submit Dispute to Blockchain
        </button>

        <p className="text-gray-400 text-xs text-center">
          Disputes are recorded on-chain and processed through our UMA arbitration policy
        </p>
      </form>
    </div>
  );
};

export default DisputeForm;
import React from 'react';
import { Upload, Shield } from 'lucide-react';
import FileUploadZone from '../common/FileUploadZone';
import { assetTypes } from '../../../../modred-platform/src/data/assetTypes';

const RegisterTab = ({ uploadedFiles, handleFileUpload }) => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Upload className="text-purple-400" size={28} />
          <h2 className="text-2xl font-bold text-white">Register Your IP Asset</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Asset Name</label>
              <input
                type="text"
                placeholder="Enter your IP asset name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Asset Type</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all">
                {assetTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">License Terms</label>
              <textarea
                placeholder="Define usage rules and revenue sharing terms..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
              />
            </div>
          </div>
          
          <FileUploadZone 
            uploadedFiles={uploadedFiles}
            handleFileUpload={handleFileUpload}
          />
        </div>
        
        <div className="mt-8">
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <Shield size={20} />
              Register IP Asset & Mint NFT
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterTab;
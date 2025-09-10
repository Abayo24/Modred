import React from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const FileUploadZone = ({ uploadedFiles, handleFileUpload }) => {
  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
        <Upload className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-300 mb-2">Drop your files here or</p>
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
        >
          Browse Files
        </label>
      </div>
      
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-300">Uploaded Files:</h3>
          {uploadedFiles.map(file => (
            <div key={file.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-white text-sm">{file.name}</span>
              <CheckCircle className="text-green-400" size={16} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;

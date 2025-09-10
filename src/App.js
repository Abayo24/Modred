import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import RegisterTab from './components/tabs/RegisterTab';
import DashboardTab from './components/tabs/DashboardTab';
import MonitorTab from './components/tabs/MonitorTab';
import DisputeTab from './components/tabs/DisputeTab';
import { navigationTabs } from './data/navigationData';
import './styles/globals.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [registeredAssets, setRegisteredAssets] = useState([
    {
      id: 1,
      name: "Digital Art Collection",
      type: "Image",
      status: "Active",
      revenue: "$2,450",
      licenses: 15
    },
    {
      id: 2,
      name: "Music Track - Synthwave Dreams",
      type: "Audio",
      status: "Under Dispute",
      revenue: "$890",
      licenses: 7
    }
  ]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: file.size,
      type: file.type
    }))]);
  };

  const tabComponents = {
    register: RegisterTab,
    dashboard: DashboardTab,
    monitor: MonitorTab,
    disputes: DisputeTab
  };

  const ActiveComponent = tabComponents[activeTab] || RegisterTab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Navigation 
          tabs={navigationTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <ActiveComponent 
          uploadedFiles={uploadedFiles}
          handleFileUpload={handleFileUpload}
          registeredAssets={registeredAssets}
          setRegisteredAssets={setRegisteredAssets}
        />
      </div>
    </div>
  );
};

export default App;
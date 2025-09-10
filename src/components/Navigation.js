import React from 'react';
import TabButton from './common/TabButton';

const Navigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 mb-8 overflow-x-auto">
      {tabs.map(tab => (
        <TabButton
          key={tab.id}
          id={tab.id}
          label={tab.label}
          icon={tab.icon}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        />
      ))}
    </div>
  );
};

export default Navigation;
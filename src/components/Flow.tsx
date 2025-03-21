import React from 'react';
import Tools from './Tools';
import FlowPanel from './FlowPanel';
import PropertyPanel from './PropertyPanel';
import './Flow.scss';

const Flow: React.FC = () => {
  return (
    <div className="flow-container">
      {/* Left Panel - Tools (25% width) */}
      <div className="tools-panel">
        <Tools />
      </div>
      
      {/* Middle Panel - Flow Panel (flexible width) */}
      <div className="flow-panel-container">
        <FlowPanel />
      </div>
      
      {/* Right Panel - Property Panel */}
      <div className="property-panel">
        <PropertyPanel />
      </div>
    </div>
  );
};

export default Flow;

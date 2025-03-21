import React from 'react';
import Tools from './Tools';
import FlowPanel from './FlowPanel';
import PropertyPanel from './PropertyPanel';

const Flow = () => {
  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      {/* Left Panel - Tools (30% width) */}
      <div style={{ width: '30%', height: '100%', borderRight: '1px solid #ccc' }}>
        <Tools />
      </div>
      
      {/* Middle Panel - Flow Panel (flexible width) */}
      <div style={{ flex: 1, height: '100%' }}>
        <FlowPanel />
      </div>
      
      {/* Right Panel - Property Panel */}
      <div style={{ width: '300px', height: '100%', borderLeft: '1px solid #ccc' }}>
        <PropertyPanel />
      </div>
    </div>
  );
};

export default Flow;

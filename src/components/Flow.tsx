import React from 'react';
import Tools from './Tools';
import FlowPanel from './FlowPanel';
import PropertyPanel from './PropertyPanel';

const Flow: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      height: '100%',
      overflow: 'hidden'
    }}>
      {/* Left Panel - Tools (25% width) */}
      <div style={{ 
        width: '25%', 
        height: '100%', 
        borderRight: '1px solid #ccc',
        overflow: 'auto'
      }}>
        <Tools />
      </div>
      
      {/* Middle Panel - Flow Panel (flexible width) */}
      <div style={{ 
        flex: 1, 
        height: '100%',
        position: 'relative'
      }}>
        <FlowPanel />
      </div>
      
      {/* Right Panel - Property Panel */}
      <div style={{ 
        width: '300px', 
        height: '100%', 
        borderLeft: '1px solid #ccc',
        overflow: 'auto'
      }}>
        <PropertyPanel />
      </div>
    </div>
  );
};

export default Flow;

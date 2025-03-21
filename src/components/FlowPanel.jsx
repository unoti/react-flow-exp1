import React from 'react';

const FlowPanel = () => {
  return (
    <div style={{ 
      padding: '16px',
      height: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff'
    }}>
      <h2>Flow Panel</h2>
      <p>This panel will contain the main flow editor workspace.</p>
      <div style={{
        fontSize: '72px',
        fontWeight: 'bold',
        margin: '40px 0',
        color: '#333'
      }}>
        Jackson
      </div>
    </div>
  );
};

export default FlowPanel;

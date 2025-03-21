import React from 'react';

const PropertyPanel: React.FC = () => {
  return (
    <div style={{ 
      padding: '16px',
      height: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#f8f8f8'
    }}>
      <h2>Property Panel</h2>
      <p>This panel will display properties of selected nodes.</p>
    </div>
  );
};

export default PropertyPanel;

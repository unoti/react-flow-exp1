import React from 'react';
import { 
  CommandBar, 
  initializeIcons,
  ThemeProvider,
  mergeStyles
} from '@fluentui/react';
import { Flow } from './components';
import './App.css';

// Initialize the Fluent UI icons
initializeIcons();

// App container styles
const appContainerStyle = mergeStyles({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

// Main content panel styles
const mainContentStyle = mergeStyles({
  flex: 1,
  display: 'flex',
  overflow: 'hidden',
});

function App() {
  // Menu bar items
  const menuItems = [
    {
      key: 'file',
      text: 'File',
      subMenuProps: {
        items: [
          {
            key: 'new',
            text: 'New',
            iconProps: { iconName: 'Add' },
            onClick: () => console.log('New clicked')
          },
          {
            key: 'open',
            text: 'Open',
            iconProps: { iconName: 'OpenFile' },
            onClick: () => console.log('Open clicked')
          },
          {
            key: 'save',
            text: 'Save',
            iconProps: { iconName: 'Save' },
            onClick: () => console.log('Save clicked')
          }
        ]
      }
    },
    {
      key: 'edit',
      text: 'Edit',
      subMenuProps: {
        items: [
          {
            key: 'cut',
            text: 'Cut',
            iconProps: { iconName: 'Cut' },
            onClick: () => console.log('Cut clicked')
          },
          {
            key: 'copy',
            text: 'Copy',
            iconProps: { iconName: 'Copy' },
            onClick: () => console.log('Copy clicked')
          },
          {
            key: 'paste',
            text: 'Paste',
            iconProps: { iconName: 'Paste' },
            onClick: () => console.log('Paste clicked')
          }
        ]
      }
    },
    {
      key: 'view',
      text: 'View',
      subMenuProps: {
        items: [
          {
            key: 'zoomIn',
            text: 'Zoom In',
            iconProps: { iconName: 'ZoomIn' },
            onClick: () => console.log('Zoom In clicked')
          },
          {
            key: 'zoomOut',
            text: 'Zoom Out',
            iconProps: { iconName: 'ZoomOut' },
            onClick: () => console.log('Zoom Out clicked')
          }
        ]
      }
    },
  ];

  return (
    <ThemeProvider>
      <div className={appContainerStyle}>
        {/* Menu Bar */}
        <CommandBar
          items={menuItems}
          ariaLabel="Use left and right arrow keys to navigate between commands"
          styles={{
            root: {
              padding: 0,
              borderBottom: '1px solid #edebe9'
            }
          }}
        />
        
        {/* Main Content - Flow Component */}
        <div className={mainContentStyle}>
          <Flow />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

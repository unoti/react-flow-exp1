import React, { useCallback } from 'react';
import { 
  ReactFlow, 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  addEdge 
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Define initial nodes
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Kusto Query' },
    position: { x: 250, y: 25 },
    style: {
      background: '#ebf8ff',
      color: '#2b6cb0',
      border: '1px solid #2b6cb0',
      width: 180,
    },
  },
  {
    id: '2',
    data: { label: 'Template Prompt' },
    position: { x: 100, y: 125 },
    style: {
      background: '#fefcbf',
      color: '#744210',
      border: '1px solid #744210',
      width: 180,
    },
  },
  {
    id: '3',
    data: { label: 'LLM Execution' },
    position: { x: 400, y: 125 },
    style: {
      background: '#e9d8fd',
      color: '#553c9a',
      border: '1px solid #553c9a',
      width: 180,
    },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Result Output' },
    position: { x: 250, y: 250 },
    style: {
      background: '#c6f6d5',
      color: '#22543d',
      border: '1px solid #22543d',
      width: 180,
    },
  },
];

// Define connections between nodes
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
];

const FlowPanel = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowPanel;

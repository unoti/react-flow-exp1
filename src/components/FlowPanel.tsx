import React, { useCallback } from 'react';
import { 
  ReactFlow, 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  addEdge,
  Node,
  Edge,
  Connection,
  EdgeChange,
  NodeChange,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './FlowPanel.scss';

// Type definitions for our node types
interface NodeTypeInfo {
  type: string;
  label: string;
  cssClass: string;
  description: string;
}

interface NodeConfig {
  id: string;
  nodeType: NodeTypeInfo;
  position: {
    x: number;
    y: number;
  };
}

interface ConnectionConfig {
  source: string;
  target: string;
}

// Node types with their styles and metadata
const NODE_TYPES: Record<string, NodeTypeInfo> = {
  KUSTO_QUERY: {
    type: 'input',
    label: 'Kusto Query',
    cssClass: 'node-kusto-query',
    description: 'Execute a Kusto query against a database'
  },
  TEMPLATE_PROMPT: {
    type: 'default',
    label: 'Template Prompt',
    cssClass: 'node-template-prompt',
    description: 'Define a prompt template for AI processing'
  },
  LLM_EXECUTION: {
    type: 'default',
    label: 'LLM Execution',
    cssClass: 'node-llm-execution',
    description: 'Execute a request against a language model'
  },
  RESULT_OUTPUT: {
    type: 'output',
    label: 'Result Output',
    cssClass: 'node-result-output',
    description: 'Display or export the final results'
  }
};

// Node placement configuration
const nodeLayout: NodeConfig[] = [
  { id: '1', nodeType: NODE_TYPES.KUSTO_QUERY, position: { x: 250, y: 25 } },
  { id: '2', nodeType: NODE_TYPES.TEMPLATE_PROMPT, position: { x: 100, y: 125 } },
  { id: '3', nodeType: NODE_TYPES.LLM_EXECUTION, position: { x: 400, y: 125 } },
  { id: '4', nodeType: NODE_TYPES.RESULT_OUTPUT, position: { x: 250, y: 250 } }
];

// Connection configuration - just define the relationships between nodes
const connectionLayout: ConnectionConfig[] = [
  { source: '1', target: '2' },
  { source: '1', target: '3' },
  { source: '2', target: '4' },
  { source: '3', target: '4' }
];

// Generate nodes from the configuration
const generateNodes = (nodeConfig: NodeConfig[]): Node[] => {
  return nodeConfig.map(config => ({
    id: config.id,
    type: config.nodeType.type || 'default',
    data: { 
      label: config.nodeType.label,
      description: config.nodeType.description 
    },
    position: config.position,
    className: config.nodeType.cssClass
  }));
};

// Generate edges from connection configuration
const generateEdges = (connections: ConnectionConfig[]): Edge[] => {
  return connections.map(conn => ({
    id: `e${conn.source}-${conn.target}`,
    source: conn.source,
    target: conn.target
  }));
};

// Create initial nodes and edges
const initialNodes = generateNodes(nodeLayout);
const initialEdges = generateEdges(connectionLayout);

const FlowPanel: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="flow-panel-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange as (changes: NodeChange[]) => void}
        onEdgesChange={onEdgesChange as (changes: EdgeChange[]) => void}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={'dots' as BackgroundVariant} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowPanel;

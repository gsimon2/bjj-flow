import React, { useCallback, useState } from "react";
import {
   useNodesState,
   useEdgesState,
   addEdge,
   Connection,
   Edge,
   Background,
   BackgroundVariant,
   Panel,
   MarkerType,
   useReactFlow,
   ReactFlowInstance,
} from "reactflow";
import { initialEdges, initialNodes } from "./graphData";

import "reactflow/dist/style.css";
import ThemeController from "./ThemeController";
import {
   ControlsStyled,
   MiniMapStyled,
   ReactFlowStyled,
   themes,
} from "./theme";
import { localStorageKeys } from './constants';

import "./index.css";
import { Button } from '@mui/material';
import { PositionNode, TechniqueNode } from './CustomNode';

const nodeTypes = {
   position: PositionNode,
   technique: TechniqueNode
};

const getInitialTheme = (): themes => {
   const savedTheme = localStorage.getItem(localStorageKeys.themePreference);

   if (savedTheme) {
      return savedTheme === themes.dark ? themes.dark : themes.light;
   }

   return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light;
};

const App: React.FC = () => {
   const [themeName, setThemeName] = useState<themes>(getInitialTheme);
   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const { setViewport } = useReactFlow();

   const onConnect = useCallback(
      (params: Edge | Connection) => setEdges((eds) => {
         const newEdge = {
            ...params,
            markerEnd: { type: MarkerType.ArrowClosed }
         }
         return addEdge(newEdge, eds);
      }),
      [setEdges]
   );

   const onSave = useCallback(() => {
      if (rfInstance) {
        const flow = rfInstance.toObject();
        localStorage.setItem(localStorageKeys.savedFlow, JSON.stringify(flow));
      }
    }, [rfInstance]);

    const onRestore = useCallback(() => {
      const restoreFlow = async () => {
        const flow = JSON.parse(localStorage.getItem(localStorageKeys.savedFlow) ?? '');
  
        if (flow) {
          const { x = 0, y = 0, zoom = 1 } = flow.viewport;
          setNodes(flow.nodes || []);
          setEdges(flow.edges || []);
          setViewport({ x, y, zoom });
        }
      };

      restoreFlow();
  }, [setNodes, setViewport]);

   const toggleThemeName = () => {
      const newTheme = themeName === themes.light ? themes.dark : themes.light;
      localStorage.setItem(localStorageKeys.themePreference, newTheme);
      setThemeName(newTheme);
   };

   return (
      <ThemeController themeName={themeName}>
         <main style={{ width: "100vw", height: "100vh" }}>
            <ReactFlowStyled
               nodes={nodes}
               edges={edges}
               onNodesChange={onNodesChange}
               onEdgesChange={onEdgesChange}
               onConnect={onConnect}
               nodeTypes={nodeTypes}
               onInit={setRfInstance}
               fitView
            >
               <ControlsStyled />
               <MiniMapStyled />
               <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
               <Panel position="top-left">
                  <Button variant="contained" onClick={toggleThemeName}>Switch Theme</Button>
                  <Button variant="contained" onClick={onSave}>Save</Button>
                  <Button variant="contained" onClick={onRestore}>Restore</Button>
               </Panel>
            </ReactFlowStyled>
         </main>
      </ThemeController>
   );
};

export default App;

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
import CustomNode from "./CustomNode";
import { localStorageKeys } from './constants';

import "./index.css";
import { Button } from '@mui/material';

const nodeTypes = {
   custom: CustomNode,
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

   const onConnect = useCallback(
      (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
      [setEdges]
   );

   const toggleThemeName = () => {
      setThemeName((t) => (t === themes.light ? themes.dark : themes.light));
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
               fitView
            >
               <ControlsStyled />
               <MiniMapStyled />
               <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
               <Panel position="top-left">
                  <Button variant="contained" onClick={toggleThemeName}>switch mode</Button>
               </Panel>
            </ReactFlowStyled>
         </main>
      </ThemeController>
   );
};

export default App;

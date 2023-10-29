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
import { ControlsStyled, MiniMapStyled, ReactFlowStyled } from "./theme";
import CustomNode from "./CustomNode";

import "./index.css";

const nodeTypes = {
   custom: CustomNode,
};

const App: React.FC = () => {
   const [themeName, setThemeName] = useState<"light" | "dark">("dark");
   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

   const onConnect = useCallback(
      (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
      [setEdges]
   );

   const toggleThemeName = () => {
      setThemeName((t) => (t === "light" ? "dark" : "light"));
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
                  <button onClick={toggleThemeName}>switch mode</button>
               </Panel>
            </ReactFlowStyled>
         </main>
      </ThemeController>
   );
};

export default App;

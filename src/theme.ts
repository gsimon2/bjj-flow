import ReactFlow, { Controls, MiniMap } from "reactflow";
import styled from "styled-components";

export const ReactFlowStyled = styled(ReactFlow)`
   background-color: ${(props) => props.theme.bg};

   .react-flow__edge-textbg {
      fill: ${(props) => props.theme.nodeBg};
   }

   .react-flow__edge-text {
      fill: ${(props) => props.theme.nodeColor} !important;
   }
`;

export const MiniMapStyled = styled(MiniMap)`
   background-color: ${(props) => props.theme.bg};

   .react-flow__minimap-mask {
      fill: ${(props) => props.theme.minimapMaskBg};
   }

   .react-flow__minimap-node {
      fill: ${(props) => props.theme.nodeBg};
      stroke: none;
   }
`;

export const ControlsStyled = styled(Controls)`
   button {
      background-color: ${(props) => props.theme.controlsBg};
      color: ${(props) => props.theme.controlsColor};
      border-bottom: 1px solid ${(props) => props.theme.controlsBorder};

      &:hover {
         background-color: ${(props) => props.theme.controlsBgHover};
      }

      path {
         fill: currentColor;
      }
   }
`;

export const lightTheme = {
   bg: "#fff",
   primary: "#fad300",

   nodeBg: "#f2f2f5",
   nodeColor: "#222",
   nodeBorder: "#222",

   minimapMaskBg: "#f2f2f5",

   controlsBg: "#fefefe",
   controlsBgHover: "#eee",
   controlsColor: "#222",
   controlsBorder: "#ddd",
};

export const darkTheme = {
   bg: "#000",
   primary: "#fad300",

   nodeBg: "#343435",
   nodeColor: "#f9f9f9",
   nodeBorder: "#888",

   minimapMaskBg: "#343435",

   controlsBg: "#555",
   controlsBgHover: "#676768",
   controlsColor: "#dddddd",
   controlsBorder: "#676768",
};

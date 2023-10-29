import { createTheme, styled } from "@mui/material";
import ReactFlow, { Controls, MiniMap } from "reactflow";

declare module "@mui/material/styles" {
   interface Theme {
      reactFlow: {
         bg: string;
         primary: string;
         nodeBg: string;
         nodeColor: string;
         nodeBorder: string;
         minimapMaskBg: string;
         controlsBg: string;
         controlsBgHover: string;
         controlsColor: string;
         controlsBorder: string;
      };
   }
   // allow configuration using `createTheme`
   interface ThemeOptions {
      reactFlow?: {
         bg: string;
         primary: string;
         nodeBg: string;
         nodeColor: string;
         nodeBorder: string;
         minimapMaskBg: string;
         controlsBg: string;
         controlsBgHover: string;
         controlsColor: string;
         controlsBorder: string;
      };
   }
}

export enum themes {
   light = "light",
   dark = "dark",
}

export const ReactFlowStyled = styled(ReactFlow)(({ theme }) => ({
   backgroundColor: theme.reactFlow.bg,

   '.react-flow__edge-textbg': {
      fill: theme.reactFlow.nodeBg
   },

   '.react-flow__edge-text': {
      fill: theme.reactFlow.nodeColor
   }
}));

export const MiniMapStyled = styled(MiniMap)(({ theme }) => ({
   backgroundColor: theme.reactFlow.bg,

   '.react-flow__minimap-mask': {
      fill: theme.reactFlow.minimapMaskBg
   },

   '.react-flow__minimap-node': {
      fill: theme.reactFlow.nodeBg,
      stroke: 'none'
   }
}));

export const ControlsStyled = styled(Controls)(({ theme }) => ({
   'button': {
      backgroundColor: theme.reactFlow.controlsBg,
      color: theme.reactFlow.controlsColor,
      borderBottom: `1px solid ${theme.reactFlow.controlsBorder}`,

      '&:hover': {
         backgroundColor: theme.reactFlow.controlsBgHover
      },

      'path': {
         fill: 'currentColor'
      }
   }
}));

export const getTheme = (theme: themes) => {
   if (theme === themes.light) {
      return createTheme({
         palette: {
            mode: theme,
         },
         reactFlow: {
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
         },
      });
   } else {
      return createTheme({
         palette: {
            mode: theme,
         },
         reactFlow: {
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
         },
      });
   }
};

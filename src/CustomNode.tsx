import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { styled } from "@mui/material";

interface props {
   selected: boolean;
}
const Node = styled('div')<props>`
   padding: 10px 20px;
   border-radius: 5px;
   background: ${(props) => props.theme.reactFlow.nodeBg};
   color: ${(props) => props.theme.reactFlow.nodeColor};
   border: 1px solid
      ${(props) =>
         props.selected ? props.theme.reactFlow.primary : props.theme.reactFlow.nodeBorder};

   .react-flow__handle {
      background: ${(props) => props.theme.reactFlow.primary};
      width: 8px;
      height: 10px;
      border-radius: 3px;
   }
`;

const CustomNode: React.FC<ICustomNodeProps> = ({ data, selected }) => {
   return (
      <Node selected={selected}>
         <Handle type="target" position={Position.Left} />
         <div>
            <strong>{data.label}</strong>
         </div>
         <Handle type="source" position={Position.Right} />
      </Node>
   );
};

export interface ICustomNodeProps {
   data: any;
   selected: boolean;
}

export default memo(CustomNode);

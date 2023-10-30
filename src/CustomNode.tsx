import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { styled } from "@mui/material";

interface props {
   selected: boolean;
   type: CustomNodeTypes;
}
const Node = styled("div")<props>`
   padding: 10px 20px;
   border-radius: ${(props) =>
      props.type === CustomNodeTypes.postion ? "5px" : "50%"};
   background: ${(props) => props.theme.reactFlow.nodeBg};
   color: ${(props) => props.theme.reactFlow.nodeColor};
   border: 1px solid
      ${(props) =>
         props.selected
            ? props.theme.reactFlow.primary
            : props.theme.reactFlow.nodeBorder};

   .react-flow__handle {
      background: ${(props) => props.theme.reactFlow.primary};
      width: 8px;
      height: 10px;
      border-radius: 3px;
   }
`;

const CustomNode: React.FC<ICustomNodeProps> = memo((props) => {
   return (
      <Node {...props}>
         <Handle type="target" position={Position.Left} />
         <div>
            <strong>{props.data.label}</strong>
         </div>
         <Handle type="source" position={Position.Right} />
      </Node>
   );
});

export enum CustomNodeTypes {
   postion,
   technique,
}

export const PositionNode: React.FC<Omit<ICustomNodeProps, "type">> = (
   props
) => <CustomNode {...props} type={CustomNodeTypes.postion} />;

export const TechniqueNode: React.FC<Omit<ICustomNodeProps, "type">> = (
   props
) => <CustomNode {...props} type={CustomNodeTypes.technique} />;

export interface ICustomNodeProps {
   data: any;
   selected: boolean;
   type: CustomNodeTypes;
}

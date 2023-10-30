import { MarkerType } from 'reactflow';

export const initialNodes = [
   { id: 'td', position: { x: 0, y: 0 }, data: { label: 'Takedown' }, type: 'position' },
   { id: 'gt', position: { x: 150, y: 0 }, data: { label: 'Gaurd Top' }, type: 'position' },
   { id: 'gb', position: { x: 150, y: 100 }, data: { label: 'Gaurd Bottom' }, type: 'position' },
   { id: 'sl', position: { x: 150, y: 100 }, data: { label: 'Single leg' }, type: 'technique' },
   { id: 'dl', position: { x: 150, y: 100 }, data: { label: 'Double leg' }, type: 'technique' },

 ];
 export const initialEdges = [
   { id: 'single-leg', source: 'td', target: 'gt', markerEnd: { type: MarkerType.ArrowClosed } },
   { id: 'double-leg', source: 'td', target: 'gb', markerEnd: { type: MarkerType.ArrowClosed } }
];
 
export const initialNodes = [
   { id: 'td', position: { x: 0, y: 0 }, data: { label: 'Takedown' }, type: 'custom' },
   { id: 'gt', position: { x: 0, y: 100 }, data: { label: 'Gaurd Top' }, type: 'custom' },
 ];
 export const initialEdges = [
   { id: 'single-leg', source: 'td', target: 'gt', label: 'single leg' },
   { id: 'double-leg', source: 'td', target: 'gt', label: 'double leg' }
];
 
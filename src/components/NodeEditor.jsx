import { useState, useCallback, useRef } from 'react';

const CATEGORY_COLORS = {
  core: '#534AB7',
  layers: '#2E86C1',
  effects: '#27AE60',
  data: '#D4AC0D',
  utility: '#E07B39',
};

const NODE_W = 192;
const HEADER_H = 32;
const PARAM_H = 22;
const BODY_PAD = 5;

const INITIAL_NODES = [
  { id: 'null', label: 'Null', category: 'utility', x: 16, y: 16, params: [{ key: 'Name', value: 'Controller' }] },
  { id: 'footage1', label: 'Footage1', category: 'layers', x: 16, y: 112, params: [{ key: 'File', value: 'bg.mp4' }] },
  { id: 'footage2', label: 'Footage2', category: 'layers', x: 16, y: 240, params: [{ key: 'File', value: 'fg.png' }] },
  { id: 'textLayer', label: 'Text Layer', category: 'layers', x: 16, y: 360, params: [{ key: 'Text', value: 'Hello World' }] },
  { id: 'color', label: 'Color', category: 'data', x: 16, y: 440, params: [{ key: 'Hex', value: '#FF6B6B' }] },
  { id: 'extractor', label: 'ExtractoR', category: 'core', x: 340, y: 112, params: [{ key: 'Channel', value: 'Alpha' }] },
  { id: 'blending', label: 'Blending', category: 'core', x: 340, y: 240, params: [{ key: 'Mode', value: 'Screen' }] },
  { id: 'fill', label: 'Fill', category: 'effects', x: 340, y: 360, params: [{ key: 'Color', value: 'Source' }] },
  { id: 'comp', label: 'Comp', category: 'core', x: 664, y: 200, params: [{ key: 'Name', value: 'Main' }] },
];

function bodyHeight(node) {
  return BODY_PAD * 2 + node.params.length * PARAM_H;
}

function nodeHeight(node) {
  return HEADER_H + bodyHeight(node);
}

function ports(node) {
  const bh = bodyHeight(node);
  return {
    input: { x: node.x, y: node.y + HEADER_H / 2 },
    output: { x: node.x + NODE_W, y: node.y + HEADER_H / 2 },
    child: { x: node.x + NODE_W / 2, y: node.y },
    parent: { x: node.x + NODE_W / 2, y: node.y + nodeHeight(node) },
  };
}

const WIRES = [
  { from: 'footage1', to: 'extractor', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'extractor', to: 'comp', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'footage2', to: 'blending', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'blending', to: 'comp', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'null', to: 'comp', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'textLayer', to: 'fill', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'color', to: 'fill', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'fill', to: 'comp', color: '#06D6A0', portFrom: 'output', portTo: 'input' },
  { from: 'null', to: 'footage1', color: '#E07B39', portFrom: 'parent', portTo: 'child' },
];

function wirePath(p1, p2) {
  if (p1.x === p2.x) {
    return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  }
  if (p1.y === p2.y) {
    return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  }
  const dx = Math.max(40, Math.abs(p2.x - p1.x) * 0.5);
  return `M${p1.x},${p1.y} C${p1.x + dx},${p1.y} ${p2.x - dx},${p2.y} ${p2.x},${p2.y}`;
}

export default function NodeEditor() {
  const [positions, setPositions] = useState(() => {
    const map = {};
    INITIAL_NODES.forEach(function (n) { map[n.id] = { x: n.x, y: n.y }; });
    return map;
  });
  const [dragKey, setDragKey] = useState(null);
  const dragRef = useRef({ offsetX: 0, offsetY: 0, startX: 0, startY: 0 });

  const onMouseDown = useCallback(function (e, id) {
    e.preventDefault();
    const node = INITIAL_NODES.find(function (n) { return n.id === id; });
    const pos = positions[id];
    dragRef.current = {
      offsetX: e.clientX - pos.x,
      offsetY: e.clientY - pos.y,
    };
    setDragKey(id);
  }, [positions]);

  const onMouseMove = useCallback(function (e) {
    if (!dragKey) return;
    const dx = e.clientX - dragRef.current.offsetX;
    const dy = e.clientY - dragRef.current.offsetY;
    setPositions(function (prev) {
      return { ...prev, [dragKey]: { x: Math.max(0, dx), y: Math.max(0, dy) } };
    });
  }, [dragKey]);

  const onMouseUp = useCallback(function () {
    setDragKey(null);
  }, []);

  const nodeList = INITIAL_NODES.map(function (n) {
    return { ...n, ...positions[n.id] };
  });

  return (
    <section className="py-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-lg">
        <div className="rounded-xl overflow-hidden border border-[#2a2a28] shadow-2xl relative" style={{ background: '#161614' }}>
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#2a2a28]" style={{ background: '#161614' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#e05555]/70" />
              <div className="w-3 h-3 rounded-full bg-[#E07B39]/70" />
              <div className="w-3 h-3 rounded-full bg-[#4cbb6c]/70" />
              <span className="font-mono-technical text-[12px] ml-2" style={{ color: '#5F5E5A' }}>Procedia_Editor_v0.9.bin</span>
            </div>
            <div className="flex items-center gap-3" style={{ color: '#5F5E5A' }}>
              <span className="material-symbols-outlined text-[16px]">settings</span>
              <span className="material-symbols-outlined text-[16px]">help_outline</span>
            </div>
          </div>
          <div
            className="h-[500px] relative overflow-hidden select-none cursor-grab"
            style={{ background: '#111110' }}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #222220 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[3]">
              {WIRES.map(function (w, i) {
                const fromNode = nodeList.find(function (n) { return n.id === w.from; });
                const toNode = nodeList.find(function (n) { return n.id === w.to; });
                if (!fromNode || !toNode) return null;
                const p1 = ports(fromNode)[w.portFrom];
                const p2 = ports(toNode)[w.portTo];
                return (
                  <path key={i} d={wirePath(p1, p2)} fill="none" stroke={w.color} strokeWidth={2} strokeLinecap="round" opacity={0.85} />
                );
              })}
            </svg>
            {nodeList.map(function (node) {
              const catColor = CATEGORY_COLORS[node.category] || '#534AB7';
              const isDragging = dragKey === node.id;
              const bh = bodyHeight(node);
              return (
                <div
                  key={node.id}
                  className="absolute z-10"
                  style={{
                    left: node.x + 'px', top: node.y + 'px', width: NODE_W + 'px',
                    background: '#1a1a18', border: '1px solid ' + (isDragging ? '#534AB7' : '#2a2a28'),
                    borderRadius: '8px', boxShadow: isDragging ? '0 2px 12px rgba(0,0,0,0.55), 0 0 0 1px #534AB7' : '0 2px 12px rgba(0,0,0,0.55)',
                    cursor: 'grab', transition: isDragging ? 'none' : 'border-color 0.1s ease',
                  }}
                  onMouseDown={function (e) { onMouseDown(e, node.id); }}
                >
                  <div className="flex items-center h-8 px-[6px] gap-[6px]" style={{ background: '#161614', borderRadius: '8px 8px 0 0' }}>
                    <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: catColor, flexShrink: 0 }} />
                    <span className="text-[12px] font-medium" style={{ color: '#d4d2cc', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node.label}</span>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4cbb6c', flexShrink: 0 }} />
                  </div>
                  <div className="py-[5px]">
                    {node.params.map(function (p, i) {
                      const isLeftPort = node.id !== 'null' && node.id !== 'footage1' && node.id !== 'footage2' && node.id !== 'textLayer' && node.id !== 'color';
                      return (
                        <div key={i} className="flex items-center h-[22px] px-3 gap-[6px]" style={{ paddingLeft: isLeftPort ? '18px' : '12px' }}>
                          {!isLeftPort && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4a4a48', border: '2px solid #1a1a18', flexShrink: 0 }} />}
                          <span className="text-[11px]" style={{ color: '#888780', minWidth: '52px' }}>{p.key}</span>
                          <span className="text-[11px] flex-1 text-right" style={{ color: '#d4d2cc' }}>{p.value}</span>
                          {isLeftPort && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4a4a48', border: '2px solid #1a1a18', flexShrink: 0 }} />}
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4cbb6c', border: '2px solid #161614', position: 'absolute', left: '-6px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4cbb6c', border: '2px solid #161614', position: 'absolute', right: '-6px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  {node.id === 'null' && (
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E07B39', border: '2px solid #1a1a18', position: 'absolute', left: '50%', bottom: '-5px', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
                  )}
                  {node.id === 'footage1' && (
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E07B39', border: '2px solid #161614', position: 'absolute', left: '50%', top: '-5px', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

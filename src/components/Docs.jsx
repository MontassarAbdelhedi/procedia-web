import { useState } from 'react';

const NODES = [
  {
    id: 'null',
    label: 'Null Object',
    category: 'utility',
    catColor: '#E07B39',
    summary: 'Invisible controller for parenting and organization.',
    description: 'The Null Object node is an invisible transform controller. It has no visual output but carries position, scale, rotation, and opacity properties. Use it as a parent to group and drive multiple child nodes, create control hierarchies, or serve as a target for constraints and expressions.',
    image: null,
    params: [
      { key: 'Name', type: 'String', default: 'Null 1', desc: 'Display label in the node graph' },
      { key: 'Position', type: 'Vector2', default: '(0, 0)', desc: 'XY position in comp space' },
      { key: 'Scale', type: 'Vector2', default: '(100, 100)', desc: 'Uniform or non-uniform scale %' },
      { key: 'Rotation', type: 'Number', default: '0', desc: 'Z rotation in degrees' },
      { key: 'Opacity', type: 'Number', default: '100', desc: 'Opacity 0-100%' },
    ],
  },
  {
    id: 'footage',
    label: 'Footage',
    category: 'layers',
    catColor: '#2E86C1',
    summary: 'Import external media files into the graph.',
    description: 'The Footage node imports video, image, or audio files into your procedural composition. It acts as a source layer — every downstream node reads pixel or audio data from this node. Supports MP4, PNG, JPG, EXR, WAV, and more.',
    image: null,
    params: [
      { key: 'File', type: 'File', default: '—', desc: 'Path to the media file on disk' },
      { key: 'Interpret Footage', type: 'Menu', default: 'Auto', desc: 'Color space and frame rate interpretation' },
      { key: 'Loop', type: 'Boolean', default: 'Off', desc: 'Loop video or audio' },
    ],
  },
  {
    id: 'textLayer',
    label: 'Text Layer',
    category: 'layers',
    catColor: '#2E86C1',
    summary: 'Render and animate text procedurally.',
    description: 'The Text Layer node creates a text source that can be driven by expressions, data bindings, or direct input. Supports variable fonts, multi-line text, per-character transforms, and emoji rendering.',
    image: null,
    params: [
      { key: 'Content', type: 'String', default: 'Hello World', desc: 'The text string to render' },
      { key: 'Font', type: 'Font', default: 'Inter', desc: 'Typeface family' },
      { key: 'Size', type: 'Number', default: '48', desc: 'Font size in pixels' },
      { key: 'Align', type: 'Menu', default: 'Left', desc: 'Horizontal alignment' },
      { key: 'Tracking', type: 'Number', default: '0', desc: 'Letter-spacing in pixels' },
    ],
  },
  {
    id: 'color',
    label: 'Color',
    category: 'data',
    catColor: '#D4AC0D',
    summary: 'Generate and output color values.',
    description: 'The Color node produces a solid color value that can be plugged into any color-aware input — Fill, Stroke, Tint, or custom shader parameters. Pick from presets, hex, or use HSL sliders.',
    image: null,
    params: [
      { key: 'Hex', type: 'String', default: '#FF6B6B', desc: 'Hex color value' },
      { key: 'Opacity', type: 'Number', default: '100', desc: 'Alpha opacity 0-100%' },
      { key: 'Mode', type: 'Menu', default: 'Solid', desc: 'Solid or Gradient output' },
    ],
  },
  {
    id: 'extractor',
    label: 'ExtractoR',
    category: 'core',
    catColor: '#534AB7',
    summary: 'Extract a specific channel from the upstream layer.',
    description: 'ExtractoR isolates a single channel (Red, Green, Blue, Alpha, Luminance, or Depth) from its input layer and outputs it as a grayscale image or data stream. Essential for creating masks, mattes, and channel-based procedural effects.',
    image: null,
    params: [
      { key: 'Channel', type: 'Menu', default: 'Alpha', desc: 'Channel to extract — R, G, B, A, Luma, or Depth' },
      { key: 'Invert', type: 'Boolean', default: 'Off', desc: 'Invert the extracted channel' },
      { key: 'Premultiply', type: 'Boolean', default: 'On', desc: 'Premultiply output with alpha' },
    ],
  },
  {
    id: 'blending',
    label: 'Blending',
    category: 'core',
    catColor: '#534AB7',
    summary: 'Composite two inputs using a blend mode.',
    description: 'The Blending node takes two layer inputs and composites them using industry-standard blend modes — Screen, Multiply, Overlay, Difference, and more. The result feeds downstream nodes for further processing.',
    image: null,
    params: [
      { key: 'Mode', type: 'Menu', default: 'Screen', desc: 'Blend mode: Screen, Multiply, Overlay, etc.' },
      { key: 'Opacity', type: 'Number', default: '100', desc: 'Blend strength 0-100%' },
      { key: 'Clamp', type: 'Boolean', default: 'On', desc: 'Clamp output to 0-1 range' },
    ],
  },
  {
    id: 'fill',
    label: 'Fill',
    category: 'effects',
    catColor: '#27AE60',
    summary: 'Fill the layer with a solid color or gradient.',
    description: 'The Fill node replaces the RGBA values of the input layer with a specified color or gradient, while preserving the alpha channel. Useful for creating colored mattes, overlay elements, and stylized treatments.',
    image: null,
    params: [
      { key: 'Color', type: 'Color', default: 'Source', desc: 'Fill color — accepts a Color node or direct pick' },
      { key: 'Opacity', type: 'Number', default: '100', desc: 'Fill opacity 0-100%' },
      { key: 'Blend Mode', type: 'Menu', default: 'Normal', desc: 'How fill blends with source' },
    ],
  },
  {
    id: 'comp',
    label: 'Comp',
    category: 'core',
    catColor: '#534AB7',
    summary: 'Final output — renders the node graph to a composition.',
    description: 'The Comp node is the output terminal of your procedural graph. It defines the final composition settings — resolution, frame rate, duration, and render settings. Every graph must have at least one Comp node to produce output.',
    image: null,
    params: [
      { key: 'Name', type: 'String', default: 'Main Comp', desc: 'Output composition name' },
      { key: 'Width', type: 'Number', default: '1920', desc: 'Output width in pixels' },
      { key: 'Height', type: 'Number', default: '1080', desc: 'Output height in pixels' },
      { key: 'Frame Rate', type: 'Number', default: '30', desc: 'Frames per second' },
      { key: 'Duration', type: 'Number', default: '10', desc: 'Duration in seconds' },
    ],
  },
  {
    id: 'gaussianBlur',
    label: 'Gaussian Blur',
    category: 'effects',
    catColor: '#27AE60',
    summary: 'Apply a gaussian blur to the input layer.',
    description: 'The Gaussian Blur node softens the input layer using a standard gaussian convolution. Supports separate horizontal and vertical blur amounts, and optional repeat-edge-pixel behavior.',
    image: null,
    params: [
      { key: 'Blurriness', type: 'Number', default: '5', desc: 'Blur radius in pixels' },
      { key: 'Blur Dimensions', type: 'Menu', default: 'Horizontal & Vertical', desc: 'Direction of blur' },
      { key: 'Repeat Edge', type: 'Boolean', default: 'Off', desc: 'Repeat edge pixels vs. transparent' },
    ],
  },
  {
    id: 'transform',
    label: 'Transform',
    category: 'effects',
    catColor: '#27AE60',
    summary: 'Apply 2D transforms to the input layer.',
    description: 'The Transform node applies position, scale, rotation, and anchor point adjustments to the input layer. Unlike the layer-level transform, this effect operates in screen space and stacks with the layer\'s own transform properties.',
    image: null,
    params: [
      { key: 'Position', type: 'Vector2', default: '(0, 0)', desc: 'Offset position in pixels' },
      { key: 'Scale', type: 'Vector2', default: '(100, 100)', desc: 'Scale percentage' },
      { key: 'Rotation', type: 'Number', default: '0', desc: 'Rotation in degrees' },
      { key: 'Opacity', type: 'Number', default: '100', desc: 'Opacity 0-100%' },
    ],
  },
  {
    id: 'expression',
    label: 'Expression',
    category: 'data',
    catColor: '#D4AC0D',
    summary: 'Run JavaScript expressions to drive parameters.',
    description: 'The Expression node evaluates JavaScript code and outputs the result as a numeric or string value. Connect its output to any parameter input to create dynamic, math-driven animations. Supports the full After Effects expression engine including loops, variables, and comp references.',
    image: null,
    params: [
      { key: 'Code', type: 'Code', default: 'value + 1', desc: 'JavaScript expression to evaluate' },
      { key: 'Output Type', type: 'Menu', default: 'Number', desc: 'Data type of the output value' },
      { key: 'Refresh', type: 'Button', default: '—', desc: 'Force re-evaluate the expression' },
    ],
  },
];

const CATEGORIES = [
  { key: 'core', label: 'Core' },
  { key: 'layers', label: 'Layers' },
  { key: 'effects', label: 'Effects' },
  { key: 'data', label: 'Data' },
  { key: 'utility', label: 'Utility' },
];

export default function Docs({ onNavigate }) {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(NODES[0].id);

  var selected = NODES.find(function (n) { return n.id === selectedId; }) || NODES[0];

  var query = search.toLowerCase();
  var filtered = NODES.filter(function (n) {
    return n.label.toLowerCase().indexOf(query) !== -1 || n.category.indexOf(query) !== -1;
  });

  function grouped(nodes) {
    var map = {};
    CATEGORIES.forEach(function (c) { map[c.key] = []; });
    nodes.forEach(function (n) {
      if (map[n.category]) map[n.category].push(n);
    });
    var result = [];
    CATEGORIES.forEach(function (c) {
      if (map[c.key].length > 0) result.push({ category: c, nodes: map[c.key] });
    });
    return result;
  }

  var groups = grouped(filtered);

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0A0A0B' }}>
      <div className="max-w-7xl mx-auto px-lg flex">
        <aside className="w-[240px] min-w-[240px] h-[calc(100vh-64px)] sticky top-16 pr-4 overflow-y-auto flex flex-col">
          <div className="py-4 border-b border-white/10 mb-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-outline pointer-events-none" style={{ fontSize: '16px' }}>search</span>
              <input
                type="text"
                placeholder="Search nodes..."
                value={search}
                onChange={function (e) { setSearch(e.target.value); }}
                className="w-full bg-surface-container-high border border-white/10 rounded-lg pl-9 pr-3 py-2 text-body-sm font-body-sm text-on-surface placeholder:text-outline/60 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          <nav className="flex-1 space-y-3 pb-6">
            {groups.map(function (g) {
              return (
                <div key={g.category.key}>
                  <div className="px-1 py-1.5 text-label-caps text-label-caps text-outline font-semibold uppercase tracking-wider">{g.category.label}</div>
                  {g.nodes.map(function (node) {
                    var isActive = selectedId === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={function () { setSelectedId(node.id); }}
                        className={'w-full text-left px-2 py-1.5 rounded-lg text-body-sm font-body-sm transition-all duration-150 flex items-center gap-2 ' + (isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface')}
                      >
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: node.catColor }} />
                        {node.label}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 min-w-0 py-8 pl-4 border-l border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: selected.catColor }} />
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">{selected.category}</span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface font-bold mb-1">{selected.label}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant/80 border-l-2 border-primary/30 pl-4 mb-8">{selected.summary}</p>

          <div className="rounded-xl border border-white/10 bg-surface-container-high/50 overflow-hidden mb-8">
            <div className="aspect-video flex items-center justify-center bg-surface-dim/80 text-outline/40 font-mono-technical text-mono-technical flex-col gap-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontSize: '40px' }}>image</span>
              <span>{selected.label} — preview</span>
            </div>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">{selected.description}</p>

          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 bg-surface-container-high border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary" style={{ fontSize: '16px' }}>tune</span>
              <span className="font-label-caps text-label-caps text-on-surface font-semibold">PARAMETERS</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm font-body-sm">
                <thead>
                  <tr className="bg-surface-dim/50">
                    <th className="text-left px-5 py-3 text-outline font-medium w-[140px]">Parameter</th>
                    <th className="text-left px-5 py-3 text-outline font-medium w-[100px]">Type</th>
                    <th className="text-left px-5 py-3 text-outline font-medium w-[120px]">Default</th>
                    <th className="text-left px-5 py-3 text-outline font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.params.map(function (p, i) {
                    return (
                      <tr key={i} className="border-t border-white/5 hover:bg-surface-container-high/50 transition-colors">
                        <td className="px-5 py-3 text-on-surface font-mono-technical text-[12px]">{p.key}</td>
                        <td className="px-5 py-3 text-primary/80 text-[12px]">{p.type}</td>
                        <td className="px-5 py-3 text-on-surface-variant/70 text-[12px] font-mono-technical">{p.default}</td>
                        <td className="px-5 py-3 text-on-surface-variant">{p.desc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

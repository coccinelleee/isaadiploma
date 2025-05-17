import React, { useState, useEffect } from 'react';

export default function ZoomControls() {
  const [zoom, setZoom] = useState(1);

  const handleZoom = (delta) => {
    const newZoom = Math.max(0.5, Math.min(2, zoom + delta));
    setZoom(newZoom);
    document.body.style.zoom = newZoom;
  };

  useEffect(() => {
    const root = document.getElementById('zoom-root');
    if (root) {
      root.style.transform = `scale(${zoom})`;
      root.style.transformOrigin = 'top left';
    }
  }, [zoom]);
  

  return (
    <div style={{
    position: 'fixed',
    top: '12px',
    left: '12px', // было right: 160
    zIndex: 1000,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '5px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    }}>
      <button onClick={() => handleZoom(-0.1)}>−</button>
      <button onClick={() => handleZoom(0.1)}>+</button>
    </div>
  );
}

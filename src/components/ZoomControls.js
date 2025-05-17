import React, { useState, useEffect } from 'react';

export default function ZoomControls() {
  const [zoom, setZoom] = useState(1);

  const handleZoom = (delta) => {
    const newZoom = Math.max(0.5, Math.min(2, zoom + delta));
    setZoom(newZoom);
    document.body.style.zoom = newZoom;
  };

  useEffect(() => {
    document.body.style.zoom = zoom;
  }, [zoom]);

  return (
    <div style={{
      position: 'fixed',
      top: 12,
      right: 160,
      zIndex: 9999,
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

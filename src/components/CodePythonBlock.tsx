import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface Props {
  code: string;
  language?: string;
}

export default function CodePythonBlock({
  code,
  language = 'python',
}: Props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid #333',
        background: '#292d3e',
        marginBottom: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          backgroundColor: '#1e1e2f',
          borderBottom: '1px solid #444',
        }}
      >
        <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>
          📄 Python коды
        </span>
        <button
          onClick={() => setIsVisible(!isVisible)}
          style={{
            background: '#292d3e',
            border: '1px solid #444',
            color: '#fff',
            padding: '0.3rem 0.75rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
          }}
        >
          {isVisible ? 'Кодты жасыру' : 'Кодты көрсету'}
        </button>
      </div>
      {isVisible && (
        <CodeBlock language={language}>
          {code}
        </CodeBlock>
      )}
    </div>
  );
}

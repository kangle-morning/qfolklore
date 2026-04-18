import React from 'react';

const COLORS = {
  proved: '#1f8f4e',
  conjectured: '#b7791f',
  disproved: '#c53030',
  partial: '#2b6cb0',
};

export default function StatusBadge({ status }) {
  const color = COLORS[status] || '#4a5568';

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.3rem 0.75rem',
        borderRadius: '999px',
        backgroundColor: color,
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '0.02em',
        marginBottom: '1rem',
      }}
    >
      {String(status).toUpperCase()}
    </span>
  );
}

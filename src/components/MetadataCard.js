import React from 'react';

export default function MetadataCard({
  field,
  status,
  dimensions,
  setting,
  lastReviewed,
}) {
  return (
    <div className="metadata-card">
      <div><strong>Field:</strong> {field}</div>
      <div><strong>Status:</strong> {status}</div>
      <div><strong>Dimensions:</strong> {dimensions}</div>
      <div><strong>Setting:</strong> {setting}</div>
      <div><strong>Last reviewed:</strong> {lastReviewed}</div>
    </div>
  );
}

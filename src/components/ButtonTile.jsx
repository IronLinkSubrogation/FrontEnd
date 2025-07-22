import React from 'react';

const ButtonTile = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      margin: '10px',
      padding: '14px 24px',
      fontWeight: 'bold',
      backgroundColor: '#00447c',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}
  >
    {label}
  </button>
);

export default ButtonTile;

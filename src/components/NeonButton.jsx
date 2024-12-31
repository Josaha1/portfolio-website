import React from 'react';

function NeonButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-[0_4px_20px_rgba(100,255,218,0.6)] transition-all duration-300 transform hover:scale-105 focus:outline-none"
    >
      {text}
    </button>
  );
}

export default NeonButton;

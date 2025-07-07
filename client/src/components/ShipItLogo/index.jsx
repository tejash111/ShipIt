import React from 'react'

const ShipItLogo = ({ className = "w-8 h-8", textSize = "text-xl" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Ship Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
      >
        <path
          d="M20 21V19C20 17.8954 19.1046 17 18 17H6C4.89543 17 4 17.8954 4 19V21"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3L22 12H2L12 3Z"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7V12"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <span className={`font-bold text-black ${textSize}`}>
        ShipIt
      </span>
    </div>
  )
}

export default ShipItLogo 
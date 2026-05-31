import React from 'react'

export default function Logo({ dark = false, size = 160 }) {
  const text = dark ? '#ffffff' : '#1a2744'
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" width={size} height={size * 0.4}>
      <polygon points="100,6 124,22 124,38 76,38 76,22" fill={dark ? '#ffffff' : '#1a2744'} />
      <rect x="91" y="24" width="18" height="14" fill="#c8a94e" />
      <rect x="97" y="28" width="6" height="10" fill={dark ? '#1a2744' : '#ffffff'} />
      <text x="100" y="58" textAnchor="middle" fontFamily="Playfair Display,Georgia,serif" fontSize="22" fontWeight="700" fill={text} letterSpacing="4">VIVO</text>
      <line x1="44" y1="66" x2="156" y2="66" stroke="#c8a94e" strokeWidth="0.8" />
      <text x="100" y="76" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fill="#c8a94e" letterSpacing="3">HAUS &amp; SERVICE</text>
    </svg>
  )
}

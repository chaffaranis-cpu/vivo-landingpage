import React from 'react'

let _uid = 0

export default function Logo({ dark = false, size = 160 }) {
  const id = React.useMemo(() => `lg${++_uid}`, [])
  const text = dark ? '#ffffff' : '#16233f'
  const roof = dark ? '#ffffff' : '#16233f'
  const inner = dark ? '#16233f' : '#ffffff'

  return (
    <svg viewBox="0 0 200 86" xmlns="http://www.w3.org/2000/svg" width={size} height={size * 0.43}>
      <defs>
        {/* gold gradient for 3D bevel */}
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#f0d98c" />
          <stop offset="45%" stopColor="#c9a96b" />
          <stop offset="100%" stopColor="#9c7f3c" />
        </linearGradient>
        {/* roof gradient */}
        <linearGradient id={`${id}-roof`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor={dark ? '#ffffff' : '#243258'} />
          <stop offset="100%" stopColor={roof} />
        </linearGradient>
        {/* soft drop shadow */}
        <filter id={`${id}-sh`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1.4" stdDeviation="1.6" floodColor="#000" floodOpacity="0.28" />
        </filter>
        {/* gold text sheen */}
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#e7cf8e" />
          <stop offset="100%" stopColor="#b9954c" />
        </linearGradient>
      </defs>

      {/* roof with bevel highlight */}
      <g filter={`url(#${id}-sh)`}>
        <polygon points="100,5 126,22 126,40 74,40 74,22" fill={`url(#${id}-roof)`} />
        {/* top highlight edge */}
        <polygon points="100,5 126,22 122,24 100,9 78,24 74,22" fill={dark ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.18)'} />
        {/* gold door 3D */}
        <rect x="90" y="24" width="20" height="16" rx="1" fill={`url(#${id}-gold)`} />
        <rect x="90" y="24" width="20" height="3" fill="#f3dd95" opacity="0.8" />
        <rect x="96" y="29" width="8" height="11" rx="0.5" fill={inner} />
      </g>

      {/* VIVO wordmark with subtle emboss */}
      <text x="100" y="62" textAnchor="middle" fontFamily="Playfair Display,Georgia,serif"
            fontSize="23" fontWeight="700" fill={text} letterSpacing="5"
            style={{ filter: dark ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.4))' : 'drop-shadow(0 1px 1px rgba(0,0,0,0.12))' }}>VIVO</text>

      {/* gold divider */}
      <line x1="46" y1="70" x2="154" y2="70" stroke={`url(#${id}-sheen)`} strokeWidth="1" />
      <circle cx="100" cy="70" r="1.6" fill="#e7cf8e" />

      {/* tagline */}
      <text x="100" y="81" textAnchor="middle" fontFamily="Montserrat,sans-serif"
            fontSize="7.5" fill={`url(#${id}-sheen)`} letterSpacing="4" fontWeight="600">HAUS &amp; SERVICE</text>
    </svg>
  )
}

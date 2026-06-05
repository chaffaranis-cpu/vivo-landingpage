import React, { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Popup() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3600)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="popup-overlay">
      <div className="popup-logo">
        <Logo dark size={200} />
      </div>
      <div className="popup-line" />
      <p className="popup-motto">
        „Ihr Zuhause verdient handwerkliche Exzellenz."
      </p>
    </div>
  )
}
